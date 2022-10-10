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

const hiw_list = [
  {
    title: '1. Sign up',
    Svg: require('@site/static/img/signup.svg').default,
    description: (
      <p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScLYMdZ7YRzHNMAJRUMY9YkurOUJ21jHjJ3F4-4CbTLiHOPAw/viewform?usp=sf_link" target="_blank">Sign up</a> for ConfLab by filling in our <a href="https://docs.google.com/forms/d/e/1FAIpQLScLYMdZ7YRzHNMAJRUMY9YkurOUJ21jHjJ3F4-4CbTLiHOPAw/viewform?usp=sf_link" target="_blank">Informed Consent Form</a> where you agree to take part and to donating your data for research purposes. Still not sure? Read our <a href="faq">FAQ</a></p>
      ),

  },
  {
    title: '2. Meet the Chairs on Thursday',
    Svg: require('@site/static/img/meet.svg').default,
    description: (
      <p>Our <a href="#data_collection">data collection</a> will take place on Thursday from 16:30 to 17:30 at the Rhodes hall. After you arrive, we will check if you agreed to <a href="#data">your data</a> for research. You fill in a short survey about your research interests and experience with MM. We will give you our newly designed MINGLE Midge to be worn around your neck. After that you are free to meet peers and the conference's organizational chairs at this event.</p>
    ),
  },
  {
    title: '3. Tutorial and Debrief on Friday',
    Svg: require('@site/static/img/tutorial.svg').default,
    description: (
      <p>Join us in learning more about the science and technology behind ConfLab including discussions on privacy, ethics, &amp; data sharing.</p>
    ),
  },
  {
    title: '4. Research and the Future ',
    Svg: require('@site/static/img/research.svg').default,
    description: (
      <p>Your data will help progress research on social interaction analysis in the wild. It will be shared in a pseudonymised form with the research community under an <a href="https://conflab.ewi.tudelft.nl/wp-content/uploads/2019/10/eula.pdf" target="_blank" style="">End User License Agreement</a> to be only used for non-commercial and non-governmental research. We also hope to use it for setting future grand challenges.</p>
    ),
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <h1>How it Works</h1>
        <div className={clsx(styles.hiw)}>
          {hiw_list.map(el => {
            return <div>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              
            </div>
          })}
          <div></div>
          

          
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
