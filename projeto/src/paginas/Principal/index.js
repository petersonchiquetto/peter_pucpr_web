import React, { Component } from 'react';
 import firebase from '../../Firebase';

 class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      sobrenome: '',
      dataNascimento: '' // Adicionando o estado para a data de nascimento
    };
  }

  async componentDidMount() {
    firebase.auth().onAuthStateChanged(async (usuario) => {
      if (usuario) {
        const uid = usuario.uid;

        try {
          const doc = await firebase.firestore().collection("usuario").doc(uid).get();
          if (doc.exists) {
            const dados = doc.data();
            this.setState({
              nome: dados.nome,
              sobrenome: dados.sobrenome,
              dataNascimento: dados.dataNascimento // Carregando a data de nascimento do Firestore
            });
          }
        } catch (erro) {
          console.error("Erro ao buscar dados do usuário:", erro);
        }
      }
    });
  }

  render() {
    return (
      <div>
        Nome: {this.state.nome} <br />
        Sobrenome: {this.state.sobrenome} <br />
        Data de Nascimento: {this.state.dataNascimento} {/* Exibindo a data de nascimento */}
      </div>
    );
  }
}

export default Principal;