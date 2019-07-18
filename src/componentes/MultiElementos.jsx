import React from 'react'

//solucoes para muitos elementos

//solucao exportar como array
export default props => [
    <h1>Parte 1</h1>,
    <h2>Parte 2</h2>
]

//solucao que nao gera nenhuma tag a mais
// export default props =>
//     <React.Fragment>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </React.Fragment>

//Solucao mais usada
// export default props =>
//     <div>
//         <h1>Parte 1</h1>
//         <h2>Parte 2</h2>
//     </div>