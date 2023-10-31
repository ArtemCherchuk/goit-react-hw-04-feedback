import React from 'react';
import css from 'components/Styled/Styled.module.css';

export const Notification = ({ message }) => {
  return <h2 className={css.title}>{message}</h2>;
};
