'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Breadcrumbs } from '@/app/components/Breadcrumbs';

type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

const contactInfo: ContactInfo = {
  email: 'contact@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, USA',
};

export default function ContactPage() {
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
      const myForm = e.target as HTMLFormElement;
      const formData = new FormData(myForm);

      // Convert FormData to URLSearchParams for proper form submission
      const body = new URLSearchParams(Array.from(formData.entries()) as [string, string][]).toString();

      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form after submission
      } else {
        setStatus('error');
        setError(`${response.status} ${response.statusText}`);
      }
    } catch (e) {
      setStatus('error');
      setError(`Submission error: ${e}`);
    }
  };

  return (

    <div className="container mx-auto px-4 py-8">
    <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />
        <div className="w-full py-10 flex justify-center">    

      <div className="container grid gap-8 px-6 md:grid-cols-3 md:px-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-base-content">Contact Us</h1>
          <p className="text-base-content/70">We&apos;ll get back to you as soon as possible.</p>
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
                <SuccessIcon />
                Thank you for reaching out! We’ll get back to you soon.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-error mt-4">
                <ErrorIcon />
                {error || 'An error occurred while submitting the form.'}
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
    </div>
  );
}

function SuccessIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ErrorIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
