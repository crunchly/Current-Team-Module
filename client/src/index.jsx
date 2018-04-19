import React from 'react';
import ReactDOM from 'react-dom';
import CurrentTeam from './components/CurrentTeam.jsx';
import test from './testData.js';

ReactDOM.render(<CurrentTeam test={test}/>, document.getElementById('app'));