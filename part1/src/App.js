import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return <button onClick={handleClick}>{text}</button>
}

const Header = ({text}) => {
  return <h1>{text}</h1>
}

const Statistic = ({name, value}) => {
  return ( 
  <div>
    {name} {value}
  </div> )
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodVote = () => {
    return setGood(good + 1)
  }
  const badVote = () => {
    return setBad(bad + 1)
  }
  const neutralVote = () => {
    return setNeutral(neutral + 1)
  }
  const feedbackText = "give feedback"
  const statisticsHeaderText = "statistics"

  const goodText = "good"
  const badText = "bad"
  const neutralText = "neutral"

  return (
    <>
    <div>
      <Header text={feedbackText}/>
      <Button handleClick={goodVote} text="good"/>
      <Button handleClick={neutralVote} text="neutral"/>
      <Button handleClick={badVote} text="bad"/>
      </div>
      <div>
      <Header text={statisticsHeaderText}/>
      <Statistic name={goodText} value={good}/>
      <Statistic name={neutralText} value={neutral}/>
      <Statistic name={badText} value={bad}/>
    </div>
    </>
  )
}

export default App