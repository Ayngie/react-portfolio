import React from 'react';
import './NotFound.scss';

const NotFound: React.FC = () => (
  <section className="not-found" aria-labelledby="notfound-title">
    <h1 id="notfound-title" className="not-found-title">
      404 - Page Not Found
    </h1>
    <p className="not-found-info" role="alert">
      Sorry, the page you're looking for doesn't exist.
    </p>
    <a className="not-found-info" href="/" aria-label="Go back to the homepage">
      Go back home
    </a>
  </section>
);

export default NotFound;
