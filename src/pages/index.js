import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">

        <div className={clsx(styles.bannerBox)}>

          <div className={clsx(styles.bannerLeft)}>

            <div>
              <h1>{siteConfig.title}</h1>
              <p>{siteConfig.tagline}</p>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Docusaurus Tutorial - 5min ⏱️
                </Link>
              </div>
            </div>
          </div>

          <div className={clsx(styles.bannerImg)}>
            <img  src="/img/lared.png"/>

          </div>
          
          
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <h1>How it Works</h1>
        <div className={clsx(styles.hiw)}>
          <div></div>
          <div>
            <h3>Sign up</h3>
            <p>Sign up for ConfLab by filling in our Informed Consent Form, where you agree to take part and to donating your data for research purposes.  Still not sure? Read our FAQ.</p>
          </div>

          
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
