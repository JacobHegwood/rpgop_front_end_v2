import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    if (this.props.visible) {
      return (
        <div className="modal is-active">
          <div className="modal-background" onClick={this.props.close}></div>
          <div className="modal-content">
            <div className="box">{this.props.content}</div>
          </div>

          <button className="modal-close is-large" onClick={this.props.close}>
            Close Modal
          </button>
        </div>
      );
    } else {
      return <div className="modal"></div>;
    }
  }
}
