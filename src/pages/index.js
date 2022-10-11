import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import {Project} from '@site/src/components/Project';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>

      <div className={styles.bannerH1}>
        <div className='container'>
          <h1>{siteConfig.title}</h1>
        </div>
      </div>

      <div className={clsx(styles.bannerBox)}>
        <div className='container'>
          
          <img src="img/scene.jpg"/>
        </div>
      </div>
      <div className={clsx(styles.bannerBottom)}>
        <div className='container'>
            <p>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--info button--lg"
                to="https://data.4tu.nl/collections/ConfLab_A_Rich_Multimodal_Multisensor_Dataset_of_Free-Standing_Social_Interactions_In-the-Wild/6034313">
                To download page →
              </Link>
            </div>
        </div>

          
      </div>
    </header>
  );
}



const data_list = [
  {
    title: 'Overhead video',
    fig: '/img/gopro.png',
    description: (
      <p>Overhead cameras will mounted to capture the interaction. These videos will be used to annotate behavior and for detection of social actions like speaking or of conversational groups.</p>
    ),
  },
  {
    title: 'Wearable data',
    fig: '/img/chip.png',
    description: (
      <p>Our newly designed MINGLE Midge wearable device  records acceleration and proximity during your interactions. Acceleration readings can be used to infer some of your actions like walking and gesturing. It is worn around the neck like a conference badge.</p>
    ),
  },
  {
    title: 'F-formation annotations',
    fig: '/img/networking.png',
    description: (
      <p>The Mingle MIDGE will also record low-frequency audio. This low frequency is enough for recognizing if you are speaking, but not enough to understand the content of your speech, giving us valuable information without compromising your privacy. Example audio:</p>
    ),
  },
  {
    title: 'Survey measures',
    fig: '/img/survey.png',
    description: (
      <p>Your research interests and level of experience within the MM community will be linked to the data above via a numerical identifier.</p>
    ),
  }
]

const template_list = [
  {
    img: 'img/midge-render.png',
    title: 'Mingle MIDGE',
    description: 'The Midge is a custom wearable device developed primarily for the collection of high resolution signals in in-the-wild mingling settings with multiple participants. The badge is a 55x35mm wearable PCB featuring two microphones, a 9 axis IMU, micro SD card storage, 300mAh battery, BMD 300 processor with bluetooth low energy',
    codeLink: 'https://github.com/TUDelft-SPC-Lab/spcl_midge_hardware',
  },
  {
    img: 'img/sync.png',
    title: 'Time synchronization at acquisition',
    description: '',
    paper: {
      title: 'A Modular Approach for Synchronized Wireless Multimodal Multisensor Data Acquisition in Highly Dynamic Social Settings',
      authors: 'Chirag Raman, Stephanie Tan and Hayley Hung',
      publication: 'Proceedings of the 28th ACM International Conference on Multimedia',
      url: 'https://doi-org.tudelft.idm.oclc.org/10.1145/3394171.3413697',
      date: '2020'
    }
  },
  {
    img: 'img/covfee.jpg',
    title: 'Continuous annotation of keypoints and actions',
    description: 'ConfLab is the first large-scale mingling dataset to be annotated for full-body poses. This was possible by using continuous annotation techniques for both keypoints and actions. In pilot studies we measured a 3x speed up in keypoint annotation when using our continuous method when compared to the traditional technique of annotating every frame, followed by interpolation. Our continuous methods are implemented and made available as part of the Covfee framework.',
    codeLink: 'https://github.com/josedvq/covfee',
    liveLink: 'https://josedvq.github.io/covfee/',
    paper: {
      title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
      authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
      publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
      url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
      date: '2022'
    }
  }
  
];


export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>

        <section>
          <div className='container'>
            <div className='row'>
              <div className={styles.about}>
                <div className={styles.aboutLeft}>
                  <h2>About ConfLab</h2>
                  <p>ConfLab is a multimodal multisensor dataset of in-the-wild free-standing social conversations. It records a real-life professional networking event at the international conference ACM Multimedia 2019. Involving 48 conference attendees, the dataset captures a diverse mix of status, acquaintance, and networking motivations. Our capture setup improves upon the data fidelity of prior in-the-wild datasets while : 8 overhead-perspective videos (1920 x 1080, 60fps), and custom personal wearable sensors with onboard recording of body motion (full 9-axis IMU), privacy-preserving low-frequency audio (1250Hz), and Bluetooth-based proximity. Additionally, we developed custom solutions for distributed hardware synchronization at acquisition, and time-efficient continuous annotation of body keypoints and actions at high sampling rates.</p>
                </div>
                <div className={styles.aboutRight}>
                  <a class="twitter-timeline" data-height="600" href="https://twitter.com/conflab_mm?ref_src=twsrc%5Etfw">Tweets by conflab_mm</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <h2>The Dataset</h2>

              <p className='subtitle'>The interaction space with 48 subjects was captured via overhead videos, in which f-formations (conversation groups) were annotated. Each person in an F-formation is associated to their body pose tracks, wearable sensor data, and speaking status labels.</p>

              <div className={clsx(styles.dataset)}>
                <div className={styles.datasetRight}>
                  <img src="img/instances.png"/>
                </div>

                <div className={styles.datasetLeft}>
                  {data_list.map(el => {
                    return <>
                      <img className={styles.dataImg} src={el.fig}/>
                      <div>
                        <h3>{el.title}</h3>
                        <p>{el.description}</p>
                      </div>
                    </>
                  })}
                </div>
                
              </div>

            </div>
          </div>
        </section>


        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <h2>The ConfLab Template</h2>
              <p className='subtitle'>ConfLab aims to be a template for future data collection in real-life, in-the-wild events through contributions such as the following.</p>

              <div className={clsx(styles.hiw)}>
                {template_list.map((el, idx) => {
                  return <Project key={idx} {...el} />
                })}
              </div>

            </div>
          </div>
        </section>

        <section>
        <a href="https://www.flaticon.com/free-icons/teamwork" title="teamwork icons">Teamwork icons created by Becris - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/survey" title="survey icons">Survey icons created by Freepik - Flaticon</a>
        </section>
      </main>
    </Layout>
  );
}
