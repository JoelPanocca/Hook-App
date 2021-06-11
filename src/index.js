import React from 'react';
import ReactDOM from 'react-dom';
// import { HookApp } from './HookApp';
// import { CounterApp } from './components/01-useState/CounterApp';
// import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { SimpleFormWithCustomHook } from './components/02-useEffect/SimpleFormWithCustomHook';

ReactDOM.render(
    <SimpleFormWithCustomHook />,
  document.getElementById('root')
);
