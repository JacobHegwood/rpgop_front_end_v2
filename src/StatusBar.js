import React, { Component } from "react";

import "./StatusBar.css";

export default class StatusBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flash: false,
    };
  }

  // flash the status text every time it changes
  componentDidUpdate(prevProps) {
    if (prevProps.text !== this.props.text) {
      this.setState({
        flash: true,
      });
    }
  }
  render() {
    if (this.state && this.state.flash) {
      setTimeout(() => {
        this.setState({
          flash: false,
        });
      }, 1000);
    }
    return (
      <div className="status-bar" flash={this.state.flash.toString()}>
        {this.props.text}
      </div>
    );
  }
}
