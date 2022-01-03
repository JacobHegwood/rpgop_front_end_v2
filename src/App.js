import "./App.css";
import CommandBar from "./CommandBar";
import StatusBar from "./StatusBar";
import GameBoard from "./GameBoard";
import Modal from "./Modal";

// import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserAstronaut, faUserNinja } from "@fortawesome/free-solid-svg-icons";

import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commandBar: [
        {
          name: "Create Player",
          command: this.createPlayer,
          icon: <FontAwesomeIcon icon={faUser} />,
        },
        {
          name: "Create NPC",
          command: this.createNPC,
          icon: <FontAwesomeIcon icon={faUserAstronaut} />,
        },
        {
          name: "Create Monster",
          command: this.createMonster,
          icon: <FontAwesomeIcon icon={faUserNinja} />,
        },
      ],
      statusText: "",
      modalVisible: false,
      modalContent: "",
      players: [
        { name: "Player 1", hp: 10, ac: 10 },
        { name: "Player 2", hp: 10, ac: 10 },
      ],
      NPCs: [],
    };
  }

  destroy = (player) => {
    this.setState({
      players: this.state.players.filter((element) => {
        return element !== player;
      }),
    });
  };

  createPlayer = () => {
    let modal = <div>Create Player</div>;
    this.setState({
      modalVisible: true,
      modalContent: modal,
    });
    const player = {
      name: "James",
      hp: Math.floor(Math.random() * 10) + 1,
      ac: 10,
    };
    const prevPlayers = this.state.players;
    const newPlayers = [...prevPlayers, player];
    this.setState({ players: newPlayers, statusText: "Player created" });
  };

  editName = (player) => {
    return () => {
      const newName = prompt("Enter new name", player.name);
      if (newName) {
        player.name = newName;
        this.setState({ statusText: "Player name changed" });
      }
    };
  };

  createNPC = (NPC) => {
    const prevNPCs = this.state.NPCs;
    const newNPCs = [...prevNPCs, NPC];
    this.setState({ NPCs: newNPCs, statusText: "NPC created" });
  };

  createMonster = () => {
    this.setState({ statusText: "Monster created" });
  };

  render() {
    return (
      <div className="App">
        <GameBoard
          entities={this.state.players}
          destroy={this.destroy}
          editName={this.editName}
        />
        <Modal
          visible={this.state.modalVisible}
          content={this.state.modalContent}
          close={() => this.setState({ modalVisible: false })}
        />
        <CommandBar commandList={this.state.commandBar}>
          <StatusBar text={this.state.statusText} />
        </CommandBar>
      </div>
    );
  }
}
