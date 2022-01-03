import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    if (this.props.visible) {
      return (
        <div className="modal">
          <div className="modal-content">
            {this.props.modalContent}
            <button onClick={this.props.close}>Close Modal</button>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}
