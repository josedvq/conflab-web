import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {Paper} from '@site/src/components/Paper';
import styles from './index.module.css';

const papers_using_conflab = [

]

const conflab_papers = [
    {
        title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
        authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
        publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
        url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
        date: '2022'
    },
    {
        title: 'Covfee: an extensible web framework for continuous-time annotation of human behavior',
        authors: 'Jose Vargas-Quiros, Stephanie Tan, Chirag Raman, Laura Cabrera-Quiros, and Hayley Hung',
        publication: 'Understanding Social Behavior in Dyadic and Small Group Interactions, Proceedings of Machine Learning Research',
        url: 'https://proceedings.mlr.press/v173/vargas-quiros22a.html',
        date: '2022'
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
  return <>
    {papers.map(paper => {
      return <Paper {...paper}/>
    })}
  </>
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

                <div className='papersLeft'>
                  <h2>Contributions made for ConfLab</h2>
                  <PapersList papers={conflab_papers}/>
                </div>

                <div className='papersRight'>
                  <h2>Contributions using ConfLab</h2>
                  <PapersList papers={papers_using_conflab}/>
                </div>
                
              </div>
  
            </div>
          </section>
        </main>
      </Layout>
    )
  }
  