import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => (
  <footer className="footer">
    <a
      href="https://github.com/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .26.18.57.69.47A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
          fill="#222"
        />
      </svg>
    </a>
    <a
      href="https://www.linkedin.com/in/yourusername"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
          d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.76 0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .97-.78 1.76-1.75 1.76zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.5 0-1.73 1.17-1.73 2.36v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"
          fill="#0077b5"
        />
      </svg>
    </a>
    <a href="mailto:your@email.com" aria-label="Email">
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true">
        <path
          d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"
          fill="#222"
        />
      </svg>
    </a>
  </footer>
);

export default Footer;
