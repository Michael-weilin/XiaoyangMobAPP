import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><TaskOne /><TaskTwoContainer /></StrictMode>);
export function TaskOne() {
    const msg = 'Hello World'
    return(<div className='App'><h2> {msg} </h2></div>);
};
export function TaskTwo(props) {
    const numbers = props.numbers;
    const rendered = numbers.map((n) => <li key={n}>{n}</li>);
    return rendered;
};
export function TaskTwoContainer() {
    const nums = [1,2,3,4,5,6,7];
    return(<div className='App'><ul> <TaskTwo numbers = {nums}/> </ul></div>);
};