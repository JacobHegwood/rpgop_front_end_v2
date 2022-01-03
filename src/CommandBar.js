import React, { Component } from "react";
import "./CommandBar.css";

export default class CommandBar extends Component {
  render() {
    return (
      <div className="command-bar-container">
        <div className="command-bar">
          {this.props.commandList.map((commandButton, index) => {
            return (
              <button key={index} onClick={commandButton.command}>
                <span className="icon">{commandButton.icon}</span>
                <span>{commandButton.name}</span>
              </button>
            );
          })}
        </div>
        {this.props.children}
      </div>
    );
  }
}
