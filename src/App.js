import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";
import * as math from "mathjs";

export default function App() {
    const [input, setInput] = useState('0');

    const addToInput = val => {
        if (isNaN(+input[input.length - 1]) && isNaN(val)) return input;

        if (input !== "0") {
            setInput(input + val);
        } else {
            setInput(val);
        }

    };

    const handleEqual = () => setInput(String(math.evaluate(input)));

    const handleClear = () => setInput('0');
    return (
        <div className="app">
            <div className="calc-wrapper">
                <Input input={input}/>
                <div className="row">
                    <Button addToInput={addToInput}>7</Button>
                    <Button addToInput={addToInput}>8</Button>
                    <Button addToInput={addToInput}>9</Button>
                    <Button addToInput={addToInput}>/</Button>
                </div>
                <div className="row">
                    <Button addToInput={addToInput}>4</Button>
                    <Button addToInput={addToInput}>5</Button>
                    <Button addToInput={addToInput}>6</Button>
                    <Button addToInput={addToInput}>*</Button>
                </div>
                <div className="row">
                    <Button addToInput={addToInput}>1</Button>
                    <Button addToInput={addToInput}>2</Button>
                    <Button addToInput={addToInput}>3</Button>
                    <Button addToInput={addToInput}>+</Button>
                </div>
                <div className="row">
                    <Button addToInput={addToInput}>.</Button>
                    <Button addToInput={addToInput}>0</Button>
                    <Button addToInput={handleEqual}>=</Button>
                    <Button addToInput={addToInput}>-</Button>
                </div>
                <ClearButton handleClear={handleClear}>Clear</ClearButton>
            </div>
        </div>
    )
}
