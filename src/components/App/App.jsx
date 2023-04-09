import React, { useState } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const stateKeys = Object.keys({ good, neutral, bad });
  const stateValues = Object.values({ good, neutral, bad });

  const countFeedbackByOption = option => {
    // console.log(option);

    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;

      case 'neutral':
        setNeutral(prev => prev + 1);
        break;

      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return stateValues.reduce((total, value) => total + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={stateKeys}
          onLeaveFeedback={countFeedbackByOption}
        />
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
}

export default App;

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countFeedbackByOption = option => {
//     this.setState(prevState => ({ [option]: prevState[option] + 1 }));
//   };

//   countTotalFeedback = () => {
//     const stateValues = Object.values(this.state);
//     return stateValues.reduce((total, value) => total + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.countFeedbackByOption}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           {this.countTotalFeedback() === 0 ? (
//             <Notification message={'There is no feedback'} />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
// export default App;
