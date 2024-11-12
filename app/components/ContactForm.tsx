"use client";

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
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<string, string> = {};

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="container grid gap-8 px-6 md:grid-cols-3 md:px-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold text-base-content">{title}</h1>
          <p className="text-base-content/70">{subtitle}</p>
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />

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
              />
              {errors.name && <span className="text-error text-sm">{errors.name}</span>}
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
              />
              {errors.email && <span className="text-error text-sm">{errors.email}</span>}
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
              ></textarea>
              {errors.message && <span className="text-error text-sm">{errors.message}</span>}
            </div>

            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
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
