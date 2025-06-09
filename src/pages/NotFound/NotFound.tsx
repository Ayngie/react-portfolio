import React from 'react';
import './NotFound.scss';

const NotFound: React.FC = () => (
  <main className="not-found">
    <h1 className="not-found-title">404 - Page Not Found</h1>
    <p className="not-found-info">
      Sorry, the page you're looking for doesn't exist.
    </p>
    <a className="not-found-info" href="/">
      Go back home
    </a>
  </main>
);

export default NotFound;
