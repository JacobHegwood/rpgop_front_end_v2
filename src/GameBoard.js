import React, { Component } from "react";

import "./GameBoard.css";

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
  }

  editName = (element) => {
    element.style.backgroundColor = "red";
  };

  render() {
    return (
      <div className="game-board">
        {this.props.entities.map((element) => {
          return (
            <div className="game-board-entity">
              <div
                className="game-board-entity-name"
                onClick={() => this.editName(element)}
                onDoubleClick={this.props.editName(element)}
              >
                {element.name}
              </div>
              <div className="game-board-entity-hp">HP: {element.hp}</div>
              <div className="game-board-entity-ac">AC: {element.ac}</div>
              <button onClick={() => this.props.destroy(element)}>
                Destroy
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
