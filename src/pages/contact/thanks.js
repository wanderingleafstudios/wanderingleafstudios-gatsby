import React from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Thank you!</h1>
          <p>We will get back to you within 2 business days.</p>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
