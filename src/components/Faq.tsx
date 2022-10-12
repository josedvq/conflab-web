import React from 'react';
import styles from './faq.module.css';

export const Faq = ({
    faq
}) => {
    return (<>
        {faq.map(faqSection => {
            return <div className={styles.faqSection}>
                <h2>{faqSection.section}</h2>
                {faqSection.data.map(qna => {
                    return <>
                        <p className={styles.question}>{qna.q}</p>
                        <p>{qna.a}</p>
                    </>
                })}
            </div>
        })}
    </>)
}
  