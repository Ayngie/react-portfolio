import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './ContactMe.scss';
import Card from '../../components/Card/Card';

type FormData = {
  user_name: string;
  user_email: string;
  title: string;
  message: string;
};

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

const ContactMe: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  const onSubmit = async () => {
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      alert('Email sent!');
      reset();
    } catch (error) {
      alert('Failed to send email.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="page-section">
      <Card>
        <h1>Contact Me</h1>
        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate>
          <div>
            <label htmlFor="user_name">Name</label>
            <input
              id="user_name"
              {...register('user_name', { required: 'Name is required' })}
              name="user_name"
            />
            {errors.user_name && <span>{errors.user_name.message}</span>}
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
            {errors.user_email && <span>{errors.user_email.message}</span>}
          </div>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              {...register('title', { required: 'Title is required' })}
              name="title"
            />
            {errors.title && <span>{errors.title.message}</span>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              {...register('message', { required: 'Message is required' })}
              name="message"
            />
            {errors.message && <span>{errors.message.message}</span>}
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
          {isSubmitSuccessful && <p>Thank you for your message!</p>}
        </form>
      </Card>
    </section>
  );
};

export default ContactMe;
