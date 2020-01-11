import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      characters: this.props.maxChars
      
    };
  }

  tweetMessage = (e) => {
    let remaining = this.props.maxChars - e.target.value.length

    this.setState({
      message: e.target.value,
      characters: remaining
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange = {this.tweetMessage} type="text" name="message" id="message" value={this.state.message} />
        <p>{this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
