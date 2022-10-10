import React from 'react';
import styles from './paper.module.css';

import {useColorMode} from '@docusaurus/theme-common';

export const Paper = ({
    title,
    authors,
    publication,
    url,
    date,
  }) => {

    const { isDarkTheme } = useColorMode();

    return <div className={styles.paperContainer}>
        {url &&
            <a className={styles.url} href={url} target='_blank'>
                <i className="fa-solid fa-link"></i>
            </a>
        }
        {url ? 
            <a className={styles.title} href={url} target='_blank'>{title}</a> :
            <span className={styles.title}>{title}</span>
        }
        
        <span className={styles.date}>{date}</span>
        <span className={styles.authors}>{authors}</span>
        
        {publication && 
            <span className={styles.publication}>{publication}</span>
        }    
    </div>
}