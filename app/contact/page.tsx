'use client'

import React, { useState, FormEvent } from 'react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'pending' | 'success' | 'error'>('idle')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('pending')
    setError(null)

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as any).toString(),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setError(`Submission failed: ${response.statusText}`)
      }
    } catch (error) {
      setStatus('error')
      setError(`Submission error: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="container px-6 md:px-8">
        <h1 className="text-3xl font-bold text-base-content mb-6">Contact Us</h1>
        <p className="text-base-content/70 mb-8">We'll get back to you as soon as possible.</p>
        
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="space-y-6 max-w-md"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          
          <div className="form-control w-full">
            <label className="label" htmlFor="name">
              <span className="label-text text-base-content">Your Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full text-base-content"
              required
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label" htmlFor="email">
              <span className="label-text text-base-content">Your Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full text-base-content"
              required
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label" htmlFor="message">
              <span className="label-text text-base-content">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message"
              className="textarea textarea-bordered w-full text-base-content"
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
              <span>Thank you for reaching out! We'll get back to you soon.</span>
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error mt-4">
              <span>{error || 'An error occurred while submitting the form.'}</span>
            </div>
          )}
        </form>

        <div className="mt-12 space-y-4">
          <h3 className="text-2xl font-bold text-base-content">Contact Information</h3>
          <p className="text-base-content/70">For support or inquiries, you can reach us at:</p>
          <ul className="list-disc list-inside text-base-content">
            <li>contact@example.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>
          <p className="text-base-content/70">Our office is located at:</p>
          <p className="text-base-content">123 Example Street, City, State, 12345</p>
        </div>
      </div>
    </div>
  )
}