import React from 'react';
import Title from '../Layout/Title';

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Title text='About' />
      <img className={styles.image} src='/images/me.jpg' alt='kronos' />
      <span className={styles.intro}>
        Hi, I am Georgios Katsanakis, a Front-End Developer and a Greek living in Sandnes,
        Norway.
      </span>

      <span className={styles.details}>
        I am passionate on everything I do and I give 100%. I love to create and solve
        problems. In my free time I enjoy spending time with my family, improving myself
        by practicing and learning new technologies and Unreal Engine.
      </span>
      <span className={styles.quote}>"Never stop learning"</span>
      <span className={styles.quote}>
        "It is the definition of paranoia to do the same thing and expect a different
        result. "
      </span>
    </div>
  );
};

export default About;
