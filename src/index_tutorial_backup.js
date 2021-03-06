import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

  /*
  //함수 컴포넌트로 변경하였다.
  class Square extends React.Component {
    render() {
      return (
        <button 
        className="square" 
        onClick={()=>{this.props.onClick()}}>
            {this.props.value}
        </button>
    
      );
    }
  }
  */
  function Square(props){
      return(
          <button className="square" onClick={props.onClick}>
              {props.value}
          </button>
      )
  }
  
  class Board extends React.Component {
    /*
    // props 부모로 끌어올리기
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xIsNext:true,
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext?'X':'O';
        this.setState({
            squares:squares,
            xIsNext: !this.state.xIsNext,
        });
    }
    */
    renderSquare(i){
        return <Square 
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}/>;
    }
  
    render() {
      //const status = 'Next player: '+(this.state.xIsNext)? 'X': 'O';

      /*
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
          status = 'Winner: ' + winner;
      } else{
          status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
      }
      */
  
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            history:[{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0,
        };
    }
    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if(calculateWinner(squares)||squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext?'X':'O'
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
        });
    }

    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext:(step%2)===0, //true로 초기화되는 값이다.
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) =>{
            const desc = move?
            'Go to move #' + move :
            'Go to game start';
            return(
                //리스트 render 시에는 key 필요
                //key는 컴포넌트에서 조회 불가
                //key 미지정시 react는 자동으로 배열의 인덱스를 키로 사용
                //이 경우 아이템 순서를 바꾸거나 추가/제거 시에 문제
                //명시적으로 key={i}로 전달하는 경우에도 위와 동일한 문제
                <li key = {move}>
                    <button onClick={()=> this.jumpTo(move)}>{desc}
                    </button>
                </li>
            )
        })

        let status;
        if(winner){
            status = 'Winner: '+ winner;
        } else{
            status = 'Next player: ' + (this.state.xIsNext ? 'X':'O');
        }
      return (
        <div className="game">
          <div className="game-board">
            <Board
            squares = {current.squares}
            onClick={(i) => this.handleClick(i)}
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
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  

  function calculateWinner(squares){
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
      for (let i = 0; i < lines.length; i++){
          const [a, b, c] = lines[i];
          if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
              return squares[a];
          }
      }
      return null;
  }