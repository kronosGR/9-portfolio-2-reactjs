import React from 'react';

import styles from './Project.module.css';
import Button from './button';
import Spacer from './Layout/Spacer';
import ActionButton from './actionButton';

const Project = ({ project }) => {
  const plus = project.plus.split('\n').map((item, i) => {
    if (i < project.plus.split('\n').length - 1) return <li key={i}>{item}</li>;
  });

  const techs = project.techs_imgs.map((img, i) => {
    return <img src={img} key={i} alt='technology' className={styles.tech_img} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <span className={styles.title}>{project.name}</span>
        <span className={styles.year}>{project.year}</span>
      </div>
      <Spacer size='0.5rem' />
      <div className={styles.techs_container}>{techs}</div>
      <p>{project.info}</p>
      <ul>{plus}</ul>
      <img src={project.img} alt={project.name} className={styles.img} />
      <div className={styles.btn_container}>
        <Button text='Source Code' img='icons/github.svg' url={project.source} />
        <Button text='Visit' img='icons/visit.svg' url={project.url} />
        <ActionButton
          text='Changes'
          img='icons/send.svg'
          action={() => {
            // TODO add popup with changes
            console.log('test');
          }}
        />
      </div>
    </div>
  );
};

export default Project;
