import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {Paper} from '@site/src/components/Paper';

const papers_list = [
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

export default function Research() {
    return (
      <Layout
        title={`Research papers`}
        description="Description will go into a meta tag in <head />">
        <main>
          <section>
            <div className="container">
              <div className="row">
                <h2>Research papers</h2>
  
                {papers_list.map(paper => {
                    return <Paper {...paper}/>
                })}
              </div>
  
            </div>
          </section>
        </main>
      </Layout>
    )
  }
  