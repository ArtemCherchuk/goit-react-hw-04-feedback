import React from 'react';
import css from 'components/Styled/Styled.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.container}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
