import React from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactMe: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>();

  // Replace this with your email sending logic (e.g., EmailJS, API endpoint)
  const onSubmit = async (data: FormData) => {
    try {
      // Example: await fetch("/api/send-email", { method: "POST", body: JSON.stringify(data) });
      alert('Email sent!\n' + JSON.stringify(data, null, 2));
      reset();
    } catch (error) {
      alert('Failed to send email.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <section id="contact" className="full-viewport-section">
      <h1>Contact Me</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
          />
          {errors.message && <span>{errors.message.message}</span>}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
        {isSubmitSuccessful && <p>Thank you for your message!</p>}
      </form>
    </section>
  );
};

export default ContactMe;
