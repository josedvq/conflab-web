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
    fig: 'img/gopro.png',
    description: (<>
      10 overhead cameras
      <p>∼ 45 min; 1920×1080 @ 60 fps</p>
    </>
    ),
  },
  {
    title: 'Wearable data',
    fig: 'img/chip.png',
    description: (
      <>
      <p>Recorded by a badge wearable:</p>
      <ul>
        <li>Low-freq. audio (1250 Hz)</li>
        <li>BT proximity (5 Hz)</li>
        <li>9-axis IMU (56 Hz)</li>
      </ul>
      </>
    ),
  },
  {
    title: 'F-formation annotations (16min)',
    fig: 'img/networking.png',
    description: (
      <p>Annotated at 1Hz for 16 min of interaction.</p>
    ),
  },
  {
    title: 'Full body pose tracks (16min)',
    fig: 'img/poses.png',
    description: (
      <p>Full body pose tracks (17 body joints) annotated seperately per camera (5 cameras) for all participants in the scene.</p>
    ),
  },
  {
    title: 'Action annotations (16min)',
    fig: 'img/talking.png',
    description: (
      <p>Speaking status (binary) annotated continuously (60Hz) for all participants in the scene.</p>
    ),
  },
  {
    title: 'Survey measures',
    fig: 'img/survey.png',
    description: (
      <p>Data subjects reported research interests and level of experience within the MM community.</p>
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
    description: <>
      <p>ConfLab is the first large-scale mingling dataset to be annotated for full-body poses. This was possible by using continuous annotation techniques for both keypoints and actions. In pilot studies we measured a 3x speed up in keypoint annotation when using our continuous method when compared to the traditional technique of annotating every frame, followed by interpolation.</p>
      <p>The following video shows some of the dataset and annotation interface:</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/X8ahEd5GZW8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <p>Our continuous methods are implemented and made available as part of the Covfee framework.</p>
    </>,
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
                  <p style={{fontSize: '1.4em', fontWeight: 300}}>We proposed ConfLab (Conference Living Lab) as a new concept for in-the-wild recording of real-life social human behavior, and provided a dataset from the first edition of ConfLab at ACM Multimedia 2019.</p>
                </div>
                <div className={styles.aboutRight}>
                  <a class="twitter-timeline" data-height="400" href="https://twitter.com/conflab_mm?ref_src=twsrc%5Etfw">Tweets by conflab_mm</a>
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
        <div className="container">
            <div className="row">
              <div className={styles.attribution}>
                <a href="https://www.flaticon.com/free-icons/gopro" title="gopro icons">Gopro icons created by Roundicons Premium - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/chip" title="chip icons">Chip icons created by smalllikeart - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/group" title="group icons">Group icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/speaking" title="speaking icons">Speaking icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/survey" title="survey icons">Survey icons created by Freepik - Flaticon</a>
              </div>
             
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
