import React from "react";

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      value: 0,
      prev: "",
      name: "",
    };
  }

  UNSAFE_componentWillMount() {
    this.setState({ value: "Loading" });
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ value: 32 });
    }, 2000);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Component will receive props", nextProps);
    this.setState({ name: nextProps.name });
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should Component update", nextProps, nextState);
    if (nextProps.value === "1") {
      return true;
    } else {
      return false;
    }
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
    console.log("Component will update", nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component did update", prevProps, prevState);
  }

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.state.value}</p>
      </>
    );
  }
}
