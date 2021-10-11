import React from "react";

export class Form extends React.Component {
  constructor(props) {
    super();
    this.usernameInputRef = React.createRef();
  }

  doABarellRoll = () => {
    this.usernameInputRef.current.classList.add("block__input");
    setTimeout(() => {
      this.usernameInputRef.current.classList.remove("block__input");
    }, 250);
  };

  stopRoll = () => {
    this.usernameInputRef.current.classList.remove("block__input");
  };

  keepRolling = () => {
    this.usernameInputRef.current.classList.add("block__input");
  };

  focusUsernameInput = () => {
    this.usernameInputRef.current.focus();
  };

  render() {
    return (
      <>
        <br />
        <h1>Ref Example</h1>
        <label>Username:</label>
        <input type="text" ref={this.usernameInputRef} />
        <button onClick={this.doABarellRoll}>Roll Once</button>
        <button onClick={this.keepRolling}>Keep Rolling</button>
        <button onClick={this.stopRoll}>Stop Roll</button>
        <button onClick={this.focusUsernameInput}>Focus Input Field</button>
      </>
    );
  }
}
