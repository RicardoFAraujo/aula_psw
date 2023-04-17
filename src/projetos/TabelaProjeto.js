import React, {Component} from 'react';

export default class ListagemProjeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
                              projetos:  [{nome: 'Projeto 1', sigla: 'P1'},
                                {nome: 'Projeto 2', sigla: 'P2'},
                                 {nome: 'Projeto 3', sigla: 'P3'},
                                 {nome: 'Projeto 4', sigla: 'P4'}]
                                
                            }


                            this. handleClickExcluirProjeto = this.handleClickExcluirProjeto.bind(this);                  

    }


    handleClickExcluirProjeto(nome){
                let projetos = this.state.projetos.slice();
                projetos = projetos.filter((p) => p.nome !== nome);
                this.setState({projetos: projetos});
        }
        
    render(){
        return(
            <>
                <div id="lbl_titulo_pagina"> Listagem de Projetos </div> <br/>
                 <button id="Novo Projeto" name="btn_novo_projeto">Novo Projeto </button> <br/><br/>
                 <TabelaProjeto projetos={this.state.projetos} onClickExcluirProjeto={this.handleClickExcluirProjeto} />
        </>
        );
        }
    } 
        
const LinhaProjeto = (props) => {
    return (
        <tr>
            <td>{props.projeto.nome}</td>
            <td>{props.projeto.sigla}</td>
            <td><button onClick={() => props.onClickExcluirProjeto(props.projeto.nome)}>X</button></td>

            
        </tr>
    );
}


const TabelaProjeto = (props) => {
    return(
        <table id="projetos" border="1">
            <tbody>
            {props.projetos.map((projeto) => <LinhaProjeto key={projeto.id} projeto={projeto} 
                onClickExcluirProjeto={props.onClickExcluirProjeto} />)}
            </tbody>
        </table>
    );
}

//export default TabelaProjeto;