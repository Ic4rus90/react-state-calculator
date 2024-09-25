import ".././App.css"

export default function Result({ firstNumber, operator, secondNumber, result, setResult  }) {
  
  function calculate() {
    switch (operator) {
      case ('+'):
        setResult(parseInt(firstNumber) + parseInt(secondNumber));
        break;
      case ('-'):
        setResult(parseInt(firstNumber) - parseInt(secondNumber));
        break;
      case ('*'):
        setResult(parseInt(firstNumber) * parseInt(secondNumber));
        break;
      case ('/'):
        setResult(parseInt(firstNumber) / parseInt(secondNumber));
        break;
    }
  }

  return (
        <div className="panel answer">
        <p> { result } </p>
        <div>
          <button onClick={ calculate }>=</button>
        </div>
      </div>
    );
}