import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactMe.scss';

type FormData = {
  user_name: string;
  user_email: string;
  title: string;
  message: string;
};

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mdkzgyog';
const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        reset();
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      alert('Failed to send message.');
      console.error('Error sending message:', error);
    }
  };

  return (
    <section id="contact" className="page-section">
      <h1>Contact Me</h1>
      <div className="contact-form-container">
        <form
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <div>
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              aria-invalid={!!errors.user_name}
              {...register('user_name', { required: 'Name is required' })}
              name="user_name"
            />
            {errors.user_name && (
              <span role="alert">{errors.user_name.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="user_email">Email</label>
            <input
              id="user_email"
              type="email"
              {...register('user_email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              name="user_email"
            />
            {errors.user_email && (
              <span role="alert">{errors.user_email.message}</span>
            )}
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              {...register('title', { required: 'Title is required' })}
              name="title"
            />
            {errors.title && <span role="alert">{errors.title.message}</span>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              name="message"
            />
            {errors.message && (
              <span role="alert">{errors.message.message}</span>
            )}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {isSubmitSuccessful && (
            <p role="status">Thank you for your message!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
