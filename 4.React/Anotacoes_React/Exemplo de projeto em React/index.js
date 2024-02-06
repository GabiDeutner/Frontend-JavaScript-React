import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';

import Primeiro from './Components/Primeiro'
import ComParametro from './Components/ComParametro'

ReactDOM.render(
	<div>
		<Primeiro></Primeiro>
		<ComParametro titulo="Esse é o título"
		subtitulo="Esse é o subtítulo"></ComParametro>
	</div>
	,
	document.getElementById('root')
)