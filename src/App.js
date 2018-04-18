import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  genRandInt(max, min) {
    return parseInt(Math.random() * (max - min) - min);
  }

  componentDidMount() {
    const height = prompt("Enter board height");
    const width = prompt("Enter board width");

    let cellCount = parseInt((height * width) / 10);

    const startPosition = {
      x: genRandInt(0, width),
      y: genRandInt(0, height)
    };

    var board = new Array(width);

    for (let i = 0; i < width; i++) {
      board[i] = new Array(height);
    }

    const filledCell = [];

    for (let i = 0; i < cellCount; i++) {
      const positionX = genRandInt(0, width);
      const positionY = genRandInt(0, height);

      if (!(startPosition.x == positionX && startPosition.y == positionY)) {
        filledCell.push({
          x: positionX,
          y: positionY
        });
      }
    }

    let container = document.getElementById("container");

    for (let i = 0; i < width; i++) {
      for (let j = 0; j < height; j++) {
        board[i][j] = {
          x: i,
          y: j,
          isCelled: false,
        }
      }
    }

    cellCount = 0;
    for(let i = 0; i < filledCell.length; i++) {
      if (!board[filledCell[i].x][filledCell[i].y].isCelled) {
        board[filledCell[i].x][filledCell[i].y].isCelled = true;
        cellCount = cellCount + 1;
      }
      board[filledCell[i].x][filledCell[i].y].isCelled = true;
    }

    let boardContent = "<div class='board'>";

    for (let i = 0; i < width; i++) {
      let row = "<div class='row row-" + i + "'>\n";
      for (let j = 0; j < height; j++) {
        const addClass = board[i][j].isCelled ? 'food' : '';
        row += "<div class='cell " + "row-" + i + "col-" + j + " " + addClass + " '" + "></div>" + "\n";
      }
      row += "</div>";
      boardContent += row;
    }

    container.innerHTML = boardContent;

    let currentPosition = {
      x: startPosition.x,
      y: startPosition.y
    };

    let greenCell = ".row-" + currentPosition.x + ".col-" + currentPosition.y;
  }

  render() {
    return (
      <div className="App">
        <header>Maze</header>
        <div id="container"></div>
      </div>
    );
  }
}

export default App;
