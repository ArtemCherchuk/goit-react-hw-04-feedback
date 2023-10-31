import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from 'components/Styled/Styled.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClickBtn = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let total = this.countTotalFeedback();
    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title={'Please leave feedback'}>
          <ul className={css.list}>
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.onHandleClickBtn}
            />
          </ul>
        </Section>

        <Section title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </>
    );
  }
}
