import ".././App.css"
import FirstNumber from "./firstNumber"
import Operator from "./operator"
import SecondNumber from "./secondNumber"
import Result from "./Result"
import { useState } from "react"

function Calculator() {
    const [firstNumber, setFirstNumber] = useState('0');
    const [op, setOp] = useState('')
    const [secondNumber, setSecondNumber] = useState('0');
    const [result, setResult] = useState(0) 

    const updateFirstNumber = (number) => {
        if (firstNumber === '0') {
            if (number === '0') {
                return;
            } 
            setFirstNumber(number);
            return 
        } else if (number === '') {
            setFirstNumber('0');
            return;
        }
        setFirstNumber(firstNumber + number);
    }

    const updateSecondNumber = (number) => {
        if (secondNumber === '0') {
            if (number === '0') {
                return;
            } 
            setSecondNumber(number);
            return 
        } else if (number === '') {
            setSecondNumber('0');
            return;
        }
        setSecondNumber(secondNumber + number);
    }

    return (    
        <div className="calculator">
            < FirstNumber 
            number={firstNumber} 
            onValueChange={updateFirstNumber}/>
            
            < Operator 
            op={op} 
            setOp={setOp}/>
            
            < SecondNumber 
            number={secondNumber} 
            onValueChange={updateSecondNumber}/>
            
            < Result 
            firstNumber={firstNumber} 
            operator={op} 
            secondNumber={secondNumber} 
            result={result} 
            setResult={setResult}/>
        </div>
    )
}

export default Calculator;
