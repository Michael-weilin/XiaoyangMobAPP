import React, {StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Product from './data';
const root = createRoot(document.getElementById('root'));
root.render(<StrictMode><TaskOne /><TaskTwoContainer /><TaskThreeContainer /></StrictMode>);
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
export function TaskThree(props) {
    const { name, description, unit_price } = props.product;
    return (
        <li>
            <strong>{name}</strong>: {description} (${unit_price.toFixed(2)})
        </li>
    );
};
function TaskThreeContainer() {
    const productInfo = {
        name: 'Banana bread',
        description: 'Toasted with butter and cinnamon',
        unit_price: 3.5,
    };
    return (
        <div className='App'>
            <ul>
                <TaskThree product={productInfo} /> {'Laptop','High-performance laptop',1200.00}
            </ul>
        </div>
    );
}