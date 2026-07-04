"use client";

import React, { FormEvent, useState } from "react";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

function ContactForm() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you soon.");
      form.reset();
    }, 700);
  };
  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
            placeholder="you@domain.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-none rounded-lg border border-border/60 bg-background/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary/60 focus:ring-1 focus:ring-primary/40"
            placeholder="Tell me about your project or idea..."
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-(image:--gradient-purple) px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_-5px_var(--primary)] disabled:opacity-70"
        >
          {sending ? (
            "Sending..."
          ) : (
            <>
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />{" "}
              Send message
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}

export default ContactForm;
