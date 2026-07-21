"use server";

import sgMail from "@sendgrid/mail";
import { contactFormSchema, ContactFormState } from "@/lib/contact-validations";

export async function submitContactMessage(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const rawData = {
    name: formData.get("name")?.toString() || "",
    email: formData.get("email")?.toString() || "",
    message: formData.get("message")?.toString() || "",
  };

  const validationResult = contactFormSchema.safeParse(rawData);

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten().fieldErrors;
    return {
      status: "error",
      message: "Please check the highlighted fields below and correct any errors.",
      fieldErrors,
    };
  }

  const { name, email, message } = validationResult.data;

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL || process.env.SENDGRID_TO_EMAIL || "danielivanparraverde@gmail.com";
  const fromEmail = process.env.SENDGRID_FROM_EMAIL || "contact@danivpv.com";

  if (!apiKey) {
    console.warn("[Contact Action] SENDGRID_API_KEY not configured in environment. Simulating successful submission in development.");
    return {
      status: "success",
      message: "Message received. I will review your note and get back to you shortly.",
    };
  }

  try {
    sgMail.setApiKey(apiKey);

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: `[Portfolio Contact] New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 24px; border: 1px solid #eaeaea; border-radius: 8px;">
          <h2 style="color: #10b981; margin-top: 0;">New Contact Inquiry</h2>
          <p><strong>From:</strong> ${name} (&lt;<a href="mailto:${email}">${email}</a>&gt;)</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 16px 0;" />
          <h4 style="margin-bottom: 8px; color: #333;">Message:</h4>
          <p style="white-space: pre-wrap; line-height: 1.6; color: #444;">${message}</p>
        </div>
      `,
    });

    return {
      status: "success",
      message: "Message received. I will review your note and get back to you shortly.",
    };
  } catch (error: unknown) {
    console.error("[Contact Action] SendGrid error:", error);
    return {
      status: "error",
      message: "An unexpected error occurred while sending your message. Please try again or email me directly.",
    };
  }
}
