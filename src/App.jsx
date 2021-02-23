import React from 'react'
import './App.css'

import Primeiro from './componets/Primeiro'
import ComParametro from './componets/ComParametro'
import Filhos from './componets/Filhos'
import Card from './componets/layout/Card'
import Repeticao from './componets/Repeticao'

export default props =>(
    <div className="App">
        <Card titulo="#04 Repetição">
            <Repeticao></Repeticao>
        </Card>
        <Card titulo="#03 Componente com filhos">
            <Filhos>
                <ul>
                    <li>Geovanna</li>
                    <li>Matheus</li>
                    <li>Jonana</li>
                    <li>Larissa</li>
                </ul>
            </Filhos>
        </Card>
        <Card titulo="#02 Componente com parametro">
            <ComParametro titulo="Esse é o titulo" 
            subtitulo="Esse é o subtitulo"/>
        </Card>
        <Card titulo=" #01 Primeiro componente">
            <Primeiro/>
        </Card>
        

        {/*  */}

        {/* <Primeiro/>
        
        <ComParametro titulo="Opa" 
        subtitulo="Epa"/> */}
    </div>
);


