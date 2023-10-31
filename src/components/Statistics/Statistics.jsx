import React from 'react';
import css from 'components/Styled/Styled.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.listStats}>
      <li className={css.listStatsItem}>
        <p>
          Good: <span className={css.value}>{good}</span>
        </p>
      </li>
      <li className={css.listStatsItem}>
        <p>
          Neutral: <span className={css.value}>{neutral}</span>
        </p>
      </li>
      <li className={css.listStatsItem}>
        <p>
          Bad: <span className={css.value}>{bad}</span>
        </p>
      </li>
      <li className={css.listStatsItem}>
        <p>
          Total: <span className={css.value}>{total}</span>
        </p>
      </li>
      <li className={css.listStatsItem}>
        <p>
          Positive Feedback:{' '}
          <span className={css.value}>
            {good === 0 ? 0 : positivePercentage}%
          </span>
        </p>
      </li>
    </ul>
  );
};
