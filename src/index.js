import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) {
  return (
    <button 
      className={"square " + (props.isWinnerSquare? 'winner' : '')}
      onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(row, col) {
    const position = calculateArrayPosition(row, col);
    const isWinnerSquare = this.props.winner && (this.props.winner.indexOf(position) >= 0);
    return ( 
      <Square 
        isWinnerSquare={isWinnerSquare}
        value={this.props.squares[position]}
        onClick={() => this.props.onClick(row, col)}
      />
    );
  }
  renderBorderSquare(content) {
    return ( 
      <button
      className="square"  >
        {content}
      </button>
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0, 0)}
          {this.renderSquare(0, 1)}
          {this.renderSquare(0, 2)}
          {this.renderBorderSquare("0")}
        </div>
        <div className="board-row">
          {this.renderSquare(1, 0)}
          {this.renderSquare(1, 1)}
          {this.renderSquare(1, 2)}
          {this.renderBorderSquare("1")}
        </div>
        <div className="board-row">
          {this.renderSquare(2, 0)}
          {this.renderSquare(2, 1)}
          {this.renderSquare(2, 2)}
          {this.renderBorderSquare("2")}
        </div>
        <div className="board-row">
          {this.renderBorderSquare("A")}
          {this.renderBorderSquare("B")}
          {this.renderBorderSquare("C")}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(row, col) {    
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const posInArray = calculateArrayPosition(row, col)
    if (calculateWinner(squares) || squares[posInArray]) {
      return;
    } 
    squares[posInArray] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
        squares: squares,
        move: {
          row : row,
          col : col
          }
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move + ' '  + String.fromCharCode(65 + step.move.col) + ',' + step.move.row:
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    
    let status;
    if (winner) {
      status = 'Winner: ' + current.squares[winner[0]];
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board 
            winner={winner}
            squares={current.squares}
            onClick={(row, col) => this.handleClick(row, col)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

function calculateArrayPosition(row, col) {
  return col * 3 + row;
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
  