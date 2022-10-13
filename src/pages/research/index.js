import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {Paper} from '@site/src/components/Paper';
import styles from './index.module.css';

const papers_using_conflab = [

]

const conflab_papers = [
  
    {
      title: 'ConfLab: A Data Collection Concept, Dataset, and Benchmark for Machine Analysis of Free-Standing Social Interactions in the Wild',
      authors: 'Chirag Raman, Jose Vargas Quiros, Stephanie Tan, Ashraful Islam, Ekin Gedik and Hayley Hung',
      publication: 'NeurIPS 2022 Datasets and Benchmarks',
      url: null,
      date: '2022'
    },
    {
      title: 'Multimodal Data Collection for Social Interaction Analysis In-the-Wild',
      authors: 'Hayley Hung, Chirag Raman, Ekin Gedik, Stephanie Tan and Jose Vargas',
      publication: 'MM \'19 - Proceedings of the 27th ACM International Conference on Multimedia',
      url: 'https://dl-acm-org.tudelft.idm.oclc.org/doi/10.1145/3343031.3351320',
      date: '2019'
    },
    {
      title: 'A Modular Approach for Synchronized Wireless Multimodal Multisensor Data Acquisition in Highly Dynamic Social Settings',
      authors: 'Chirag Raman, Stephanie Tan and Hayley Hung',
      publication: 'Proceedings of the 28th ACM International Conference on Multimedia',
      url: 'https://doi-org.tudelft.idm.oclc.org/10.1145/3394171.3413697',
      date: '2020'
    },
    {
      title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
      authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
      publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
      url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
      date: '2022'
    }
]

const PapersList = (({papers}) => {
  return <div className={styles.paperList}>
    {papers.map(paper => {
      return <Paper {...paper}/>
    })}
  </div>
})

export default function Research() {
    return (
      <Layout
        title={`Research papers`}
        description="Description will go into a meta tag in <head />">
        <main>
          <section>
            <div className="container">
              <div className={clsx("row", styles.papersContainer)}>

                  <h2>ConfLab and related contributions</h2>
                  <PapersList papers={conflab_papers}/>

                  <h2>Papers using ConfLab</h2>
                  <PapersList papers={papers_using_conflab}/>
                
              </div>
  
            </div>
          </section>
        </main>
      </Layout>
    )
  }
  