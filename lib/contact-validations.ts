import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters long.")
    .max(100, "Name cannot exceed 100 characters."),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address.")
    .max(254, "Email address is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters long so I have enough context.")
    .max(5000, "Message cannot exceed 5000 characters."),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface ContactFormState {
  status: "idle" | "submitting" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}
