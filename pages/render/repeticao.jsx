export default function repeticao() {

    const listaAprovados = [
        'João',
        'Ana',
        'Maria',
        'Carlos',
        'Dani',
        'Paulo',
        'Jé',
        'Lara',
    ]

    function renderizarLista(){
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)

    }

    return (
        <>
            <ul>
                {renderizarLista()}
            </ul>
        </>
    )
}


// function renderizarLista(){
//     const itens = []

//     for (let i = 0; i < listaAprovados.length; i++) {
//         itens.push(<li key={i}>{listaAprovados[i]}</li>)
//     }

//     return itens

// }