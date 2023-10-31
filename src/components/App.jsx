import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from 'components/Styled/Styled.module.css';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const objData = () => {
    return { good, neutral, bad };
  };

  const onHandleClickBtn = option => {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;

      case 'bad':
        setBad(prevState => prevState + 1);
        return;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <ul className={css.list}>
          <FeedbackOptions
            options={objData()}
            onLeaveFeedback={onHandleClickBtn}
          />
        </ul>
      </Section>

      <Section title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};
