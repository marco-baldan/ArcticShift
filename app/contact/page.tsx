"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { Breadcrumbs } from "@/app/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

const contactInfo: ContactInfo = {
  email: "marco@designbath.co.uk",
  phone: "+44 7577717604",
  address: "Bath, UK",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "pending" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("pending");
    setError(null);

    try {
      const myForm = e.target as HTMLFormElement;
      const formData = new FormData(myForm);

      // Convert FormData to URLSearchParams for proper form submission
      const body = new URLSearchParams(
        Array.from(formData.entries()) as [string, string][]
      ).toString();

      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Clear form after submission
      } else {
        setStatus("error");
        setError(`${response.status} ${response.statusText}`);
      }
    } catch (e) {
      setStatus("error");
      setError(`Submission error: ${e}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <div className="w-full py-10 flex justify-center">
        <div className="container grid gap-8 px-6 md:grid-cols-3 md:px-8">
          <div className="md:col-span-2 space-y-6">
            <h1 className="text-3xl font-bold text-primary">Contact Us</h1>
            <p className="text-muted-foreground">
              We&apos;ll get back to you as soon as possible.
            </p>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden inputs for Netlify form handling */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              {/* Form fields */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Your Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Your Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={status === "pending"}>
                  {status === "pending" ? "Submitting..." : "Submit"}
                </Button>
              </div>

              {status === "success" && (
                <Alert variant="default">
                  <CheckCircle2 className="h-4 w-4" />
                  <AlertDescription>
                    Thank you for reaching out! Well get back to you soon.
                  </AlertDescription>
                </Alert>
              )}
              {status === "error" && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {error || "An error occurred while submitting the form."}
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </div>
          <Card>
            <CardContent className="space-y-4 mt-6">
              <h3 className="text-2xl font-bold text-primary">
                Contact Information
              </h3>
              <p className="text-muted-foreground">
                For support or inquiries, you can reach us at:
              </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>{contactInfo.email}</li>
                <li>{contactInfo.phone}</li>
              </ul>
              <p className="text-muted-foreground">Our office is located at:</p>
              <p className="text-primary">{contactInfo.address}</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="text-center py-8">
        <h2 className="text-xl font-bold text-primary">
          Or Schedule a Meeting
        </h2>
        <p className="text-muted-foreground mb-4">
          Choose a time that works best for you:
        </p>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/marco-designbath"
          data-hide_event_type_details="1"
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
      <script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      ></script>
    </div>
  );
}
