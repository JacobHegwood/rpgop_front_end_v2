import React, { Component } from "react";

export default class CharacterSheet extends Component {
  constructor(props) {
    super(props);

    // receive a character sheet id, look up the character sheet in the database and save it to this.state.character
    this.state.character = {
      id: "",
      name: "",
      class: "",
      hp: 0,
      ac: 0,
      str: 0,
      dex: 0,
      con: 0,
      int: 0,
      wis: 0,
      cha: 0,
    };
  }

  render() {
    return <div></div>;
  }
}
