import React, {useState} from 'react';
import './App.css';

function App() {
  /*
  * Input: valor de entrada
  * setInput: valores que se le agregan de Input y que se muestran en la pantalla de la calculadora.
   */
  const [input, setInput] = useState("");

  /* Esta función agrega el valor dado que es el input al setInput, 
  usamos la función de concat para juntarlos*/
  const handleInput = (e) => {
    setInput(input.concat(e.target.name));
  }

  /* Esta función "limpia" el contenido de la variable de setInput,
  se le da al boton de "C" */
  const handleClear = () => {
    setInput("");
  }

  /* Esta función lo que hace es elimina el último carácter del valor de input*/
  const handleBackspace = () => {
    setInput(input.slice(0, -1));
  }
  
  /* Aquí evalua el valor de entrada y si no hay error muestra el resultado
  de la ecuación que se le de, al setInput se le da el valor resultado. 
  Si es que hay error en la ecuación y para que no se rompa el programa, 
  hay un tryCatch que cacha el error e imprime el valor de input que es "Error" */
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error){
      setInput("Error")
    }
  }

  return (
    <div className="calculator">
      <form>
        <input className='screen' type='text' value={input}/>
      </form>
      <div className='button'>
        <button name='(' onClick={handleInput}>(</button>
        <button name=')' onClick={handleInput}>)</button>
        <button name='C' onClick={handleClear}>C</button>
        <button name='CE' onClick={handleBackspace}>CE</button>

        <button name='7' onClick={handleInput}>7</button>
        <button name='8' onClick={handleInput}>8</button>
        <button name='9' onClick={handleInput}>9</button>
        <button name='/' onClick={handleInput}>/</button>

        <button name='4' onClick={handleInput}>4</button>
        <button name='5' onClick={handleInput}>5</button>
        <button name='6' onClick={handleInput}>6</button>
        <button name='*' onClick={handleInput}>*</button>

        <button name='1' onClick={handleInput}>1</button>
        <button name='2' onClick={handleInput}>2</button>
        <button name='3' onClick={handleInput}>3</button>
        <button name='-' onClick={handleInput}>-</button>

        <button name='0' onClick={handleInput}>0</button>
        <button name='.' onClick={handleInput}>.</button>
        <button name='=' onClick={handleEqual}>=</button>
        <button name='+' onClick={handleInput}>+</button>
      </div>
    </div>
  );
}

export default App;
