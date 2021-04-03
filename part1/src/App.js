import React, { useState } from "react"

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const Header = ({ text }) => {
  return <h1>{text}</h1>
}

const Statistic = ({ name, value, unit }) => {
  return (
    <div>
      {name} {value} {unit}
    </div>
  )
}

const Statistics = ({ statistics }) => {
  if (statistics.all == 0) {
    return (
      <div>
        <Header text={statistics.statisticsHeaderText} />
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <Header text={statistics.statisticsHeaderText} />
      <Statistic name="good" value={statistics.good} />
      <Statistic name="neutral" value={statistics.neutral} />
      <Statistic name="bad" value={statistics.bad} />
      <Statistic name="all" value={statistics.all} />
      <Statistic name="average" value={statistics.average} />
      <Statistic name="positive" value={statistics.positive} unit="%" />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const goodVote = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage((good - bad + 1) / (all + 1))
    setPositive(((good + 1) / (all + 1)) * 100)
  }
  const badVote = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage((good - bad - 1) / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }
  const neutralVote = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage((good - bad) / (all + 1))
    setPositive((good / (all + 1)) * 100)
  }

  const feedbackText = "give feedback"

  const statistics = {
    statisticsHeaderText: "statistics",
    good: good,
    bad: bad,
    neutral: neutral,
    all: all,
    average: average,
    positive: positive,
  }
  return (
    <div>
      <Header text={feedbackText} />
      <Button handleClick={goodVote} text="good" />
      <Button handleClick={neutralVote} text="neutral" />
      <Button handleClick={badVote} text="bad" />
      <Statistics statistics={statistics} />
    </div>
  )
}

export default App
