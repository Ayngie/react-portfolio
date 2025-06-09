import React from 'react';
import './NotFound.scss';

const NotFound: React.FC = () => (
  <main className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <a href="/">Go back home</a>
  </main>
);

export default NotFound;
