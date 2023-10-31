import React from 'react';
import css from 'components/Styled/Styled.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(item => {
    return (
      <li key={item}>
        <button
          type="button"
          className={css.button}
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      </li>
    );
  });
};
