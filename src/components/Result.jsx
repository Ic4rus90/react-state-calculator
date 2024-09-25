import ".././App.css"

export default function Result({ firstNumber, operator, secondNumber, result, setResult, setStoredNumber, recallStoredNumber  }) {
  
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
          <button onClick={() => setStoredNumber(result)}> Store </button>
          <button onClick={() => recallStoredNumber(3)}> Recall </button>
        </div>
      </div>
    );
}