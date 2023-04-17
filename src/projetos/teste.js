const TabelaProjeto = (props) => {
    return(
        <table id="projetos" border="1">
            <tbody>
                {props.projetos.map((projeto) => 
                <LinhaProjeto key={projeto.nome} projeto=
                {projeto} />)
                }
            </tbody>
        </table>
    );
}