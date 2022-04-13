import React, { Component } from "react";
import "./style.css"

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numero: 0,
      botaoTXT: "START"
    }
    this.timer = null
    this.start = this.start.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  start() {
    let state = this.state
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
      state.botaoTXT = "START"
    } else {
      this.timer = setInterval(() => {
        let state = this.state
        state.numero += 0.1
        this.setState(state)
      }, 100);
      state.botaoTXT = "PAUSAR"
    }

    this.setState(state)
  }

  limpar() {
    if (this.timer !== null) {
      clearInterval(this.timer)
      this.timer = null
    }

    let state = this.state
    state.numero = 0
    state.botaoTXT = "START"
    this.setState(state)
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")} className="img" alt="cronometro imagem" />
        <p className="timer">{this.state.numero.toFixed(1)}</p>
        <div className="areaBtn">
          <p className="botao" onClick={this.start}>{this.state.botaoTXT}</p>
          <p className="botao" onClick={this.limpar}>LIMPAR</p>
        </div>
      </div>
    )
  }
}

export default App