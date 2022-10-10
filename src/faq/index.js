import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import {Paper} from '@site/src/components/Paper';

const faq = [
    {
        section: 'Data subject FAQ',
        data: [
            {
                q: 'Does my gender and age get linked to my data?',
                a: 'No. Only your research interests and level of experience with the MM community.'
            },
            {
                q: 'Who will the data be shared with?',
                a: 'The data you donate will be shared in a pseudo-anomized form. This means that your data is linked to a numerical identifier that cannot be traced back to your identity. The data is shared under an end user license agreement (EULA) where users sign and agree to a number of restrictions on how the data is to be used and shared. '
            },
            {
                q: 'What\'s in it for me? ',
                a: 'Within a month after the end of the event, you will receive information about your behavior based on your sensor data for comparison in a pseudonymised form relative to other participants. This can be an interesting new way for you to reflect about your networking behavior. You get to reflect on the ethics of data sharing by living through the process, which could be useful for reflecting on your own research. '
            },
            {
                q: 'What information do I get back about my sensor data?',
                a: 'From the proximity sensor we will estimate how many people you interacted with compared to the distribution from all other participants.'
            },
            {
                q: 'I work at a company. Can I take part?',
                a: 'Yes! However, our ethics board do not allow us to share data for commercial or governmental research. The EULA only allows for academic research to be carried out with the data.'
            }
        ]
    },
]

export default function Faq() {
    return (
      <Layout
        title={`Frequently-asked Questions`}
        description="Description will go into a meta tag in <head />">
        <main>
          <section>
            <div className="container">
              <div className="row">
                <h2>Frequently-asked Questions</h2>
  
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
  