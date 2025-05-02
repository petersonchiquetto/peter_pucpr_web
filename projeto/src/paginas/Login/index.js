import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            mensagemErro: ''
        }

        this.acessar = this.acessar.bind(this);
    }
   async acessar() {
        await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.senha)
        .then(() => {
            window.location.href = "./principal";
        })
        .catch(() => {
            this.setState({ mensagemErro: "Usuário não encontrado." });
        });
    }

    render() {
      return (
        <div>
        <h1>Login</h1>
        <input type="text"  placeholder="E-mail" onChange={(e) => this.setState({ email: e.target.value })} />
        <br />
        <input type="password"  placeholder="Senha" onChange={(e) => this.setState({ senha: e.target.value })} />
        <br />
        <button onClick={this.acessar}>Acessar</button>
        {this.state.mensagemErro && <p style={{ color: 'red' }}>{this.state.mensagemErro}</p>}
        </div>
      );
    }
  }
  export default Login;