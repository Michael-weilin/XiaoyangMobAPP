import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><TaskOne /></StrictMode>);
export function TaskOne() {
    const msg = 'Hello World'
    return(<div className='App'><h2> {msg} </h2></div>);
};