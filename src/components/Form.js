function Form (){
    function cadastrarUsuario(e){
        e.preventDefault()
        console.log(`cadastrou o usuario`)
    }
    return (
        <div>
            <h1>Meu cadsatro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <input type="text" placeholder="digite o seu nome" />
                </div>
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default Form