import ReactDOM from 'react-dom';
import React from 'react';
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaBaltazar from './componentes/FamiliaBaltazar'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'

const elemento = document.getElementById('root');
ReactDOM.render(
    <div>
        <Hook />
        {/* <Contador numeroInicial={10}/> */}
        {/* <ComponenteClasse valor="Ola Classe com props"/> */}
        {/* <Pai />
        <ComponenteComFuncao />
        <PrimeiroComponente valor="Loreninha" />
        <CompA valor="Ola" />
        <B valor="Alou" />
        <MultiElementos />
        <FamiliaBaltazar />
        <Familia sobrenome="Matos">
            <Membro nome="Andre" sobrenome="Matos"/>
            <Membro nome="Mariana" sobrenome="Matos"/>
        </Familia>
        <Familia sobrenome="Pinto">
            <Membro nome="Ana" sobrenome="Pinto"/>
            <Membro nome="Mariana" sobrenome="Pinto"/>
        </Familia> */}
    </div>
    , elemento)

// const jsx = <h1>olá react!</h1>
// ReactDOM.render(jsx, elemento);

// ReactDOM.render(
//     <ul>
//         <li>Julio</li>
//         <li>Lorena</li>
//         <li>Duda</li>
//     </ul>
//     , elemento)