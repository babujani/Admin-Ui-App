import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackGiven: false}

  updateState = () => {
    this.setState(prevState => ({isFeedbackGiven: !prevState.isFeedbackGiven}))
  }

  givenFeedback = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-card">
        <img className="icon" alt="love emoji" src={loveEmojiUrl} />
        <h1>Thank You!</h1>
        <p className="feedback-text">
          We will use your feedback to improve are customer support performance
        </p>
      </div>
    )
  }

  feedbackCard = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1 className="feedback-question">
          How satisfied are you with our customer support performance
        </h1>
        <ul className="reaction-container">
          {emojis.map(eachReaction => (
            <li key={eachReaction.id} className="eachEmoji">
              <img
                className="icon"
                src={eachReaction.imageUrl}
                alt={eachReaction.name}
                onClick={this.updateState}
              />
              <br />
              <span>{eachReaction.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isFeedbackGiven} = this.state
    return (
      <div className="page-bg">
        <div className="card">
          {isFeedbackGiven ? this.givenFeedback() : this.feedbackCard()}
        </div>
      </div>
    )
  }
}

export default Feedback
