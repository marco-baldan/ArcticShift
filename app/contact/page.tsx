'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};
type ContactProps = {
  title?: string;
  subtitle?: string;
  contactInfo: ContactInfo;
};
const ContactForm: React.FC<ContactProps> = ({
  title = 'Contact Us',
  subtitle = "We'll get back to you as soon as possible.",
  contactInfo,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle');
  const [error, setError] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('pending');
    setError(null);
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      // Send the form data to Netlify’s form handling endpoint
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      } else {
        setStatus('error');
        setError(`Submission failed: ${response.statusText}`);
      }
    } catch (error) {
      setStatus('error');
      setError(`Submission error: ${error.message}`);
    }
  };
  return (
    <div className="w-full py-10 flex justify-center">
      <div className="container grid gap-8 px-6 md:grid-cols-3 md:px-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-base-content">{title}</h1>
          <p className="text-base-content/70">{subtitle}</p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base-content">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full text-base-content"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base-content">Your Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full text-base-content"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-base-content">Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Type your message"
                className="textarea textarea-bordered w-full text-base-content"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary" disabled={status === 'pending'}>
                {status === 'pending' ? 'Submitting...' : 'Submit'}
              </button>
            </div>
            
            {status === 'success' && (
              <div className="alert alert-success mt-4">
                <span>Thank you for reaching out! We’ll get back to you soon.</span>
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error mt-4">
                <span>{error || 'An error occurred while submitting the form.'}</span>
              </div>
            )}
          </form>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-base-content">Contact Information</h3>
          <p className="text-base-content/70">For support or inquiries, you can reach us at:</p>
          <ul className="list-disc list-inside text-base-content">
            <li>{contactInfo.email}</li>
            <li>{contactInfo.phone}</li>
          </ul>
          <p className="text-base-content/70">Our office is located at:</p>
          <p className="text-base-content">{contactInfo.address}</p>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
