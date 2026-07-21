"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContactMessage } from "@/app/actions/contact";
import { ContactFormState } from "@/lib/contact-validations";
import { LuArrowRight, LuCircleCheck } from "react-icons/lu";

const initialFormState: ContactFormState = {
  status: "idle",
  message: "",
};

function SubmitButton({ status }: { status: ContactFormState["status"] }) {
  const { pending } = useFormStatus();
  const isPending = pending;
  const isSuccess = status === "success";

  return (
    <button
      type="submit"
      disabled={isPending || isSuccess}
      className="group w-full sm:w-auto px-8 py-3.5 rounded-xl bg-accent hover:bg-accent/80 text-bg-primary font-secondary text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg shadow-accent/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
    >
      <span>{isPending ? "Sending..." : isSuccess ? "Sent" : "Send Message"}</span>
      {!isPending && !isSuccess && <LuArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactMessage, initialFormState);
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <div className="space-y-6 animate-pulse py-4">
        <div className="h-12 bg-bg-card rounded border-b border-border-card" />
        <div className="h-12 bg-bg-card rounded border-b border-border-card" />
        <div className="h-28 bg-bg-card rounded border-b border-border-card" />
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-secondary text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
          Your Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Daniel Parra"
          disabled={state.status === "success"}
          className="w-full bg-transparent border-b border-border-card py-2.5 font-secondary text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
        />
        {state.fieldErrors?.name && (
          <p className="mt-1.5 font-secondary text-xs text-rose-400">
            {state.fieldErrors.name[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-secondary text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="daniel@example.com"
          disabled={state.status === "success"}
          className="w-full bg-transparent border-b border-border-card py-2.5 font-secondary text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50"
        />
        {state.fieldErrors?.email && (
          <p className="mt-1.5 font-secondary text-xs text-rose-400">
            {state.fieldErrors.email[0]}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block font-secondary text-xs font-medium uppercase tracking-wider text-text-secondary mb-2">
          Message / Scope
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell me about the role, project scope, or technical goals..."
          disabled={state.status === "success"}
          className="w-full bg-transparent border-b border-border-card py-2.5 font-secondary text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors disabled:opacity-50 resize-none"
        />
        {state.fieldErrors?.message && (
          <p className="mt-1.5 font-secondary text-xs text-rose-400">
            {state.fieldErrors.message[0]}
          </p>
        )}
      </div>

      {state.message && (
        <div
          className={`p-4 rounded-lg text-xs sm:text-sm flex items-center gap-3 font-secondary ${state.status === "success"
            ? "bg-accent-subtle text-accent border border-accent/20"
            : "bg-rose-500/[0.08] text-rose-400 border border-rose-500/20"
            }`}
        >
          {state.status === "success" && <LuCircleCheck className="w-4 h-4 shrink-0" />}
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton status={state.status} />
    </form>
  );
}
