import { useState } from "react";

function App() {

const [num1, setNum1] = useState("");

const [num2, setNum2] = useState("");

const [resultado, setResultado] = useState(0);

const [operando, setOperando] = useState("");


function limpiar(){
  setNum1("");
  setNum2("");
  setOperando("");
  setResultado("");
}

function oprimir (n){
  if (operando === ""){
    setNum1(num1+n);
  }else{
    setNum2(num2+n);
  }
}

function oprimirOperando(n){
  setOperando(n);
}
 
function getResultado (){
  switch(operando){
    case "+":
      setNum1(Number(num1) + Number(num2));
      setOperando("");
      setNum2("");
      break;
      case "-":
        setResultado(Number(num1)- Number(num2));
        setOperando("");
        setNum2("");
        break;
        case "*":
      setNum1(Number(num1) * Number(num2));
      setOperando("");
      setNum2("");
      break;
      case "/":
      setNum1(Number(num1) / Number(num2));
      setOperando("");
      setNum2("");
      break;
        default:
  }
}

return (
  <div className="App">
    <h1>Calculadora</h1>
    <div className="calculadora">
      <div className="output">
        
        <div className="operandPrev">
          {
          operando ? num1 + operando: ""
          }
        </div>
        
        <div className="operandSig">
          {
            resultado ? resultado : (!operando ? num1 : num2)
          }
        </div>
        </div> 
        <button className="btn btn-primary" onClick={limpiar}>AC</button>
        <button className="btn btn-primary" onClick={() => {}} >DEL</button>
        <button className="btn btn-primary" onClick={() => {oprimirOperando("/")}} >/</button>
        <br />
        <button className="btn btn-primary" onClick={() => {oprimir(1)}} >1</button>
        <button className="btn btn-primary" onClick={() => {oprimir(2)}} >2</button>
        <button className="btn btn-primary" onClick={() => {oprimir(3)}} >3</button>
        <button className="btn btn-primary" onClick={() => {oprimirOperando("*")}} >*</button>
        <br />
        <button className="btn btn-primary" onClick={() => {oprimir(4)}} >4</button>
        <button className="btn btn-primary" onClick={() => {oprimir(5)}} >5</button>
        <button className="btn btn-primary" onClick={() => {oprimir(6)}} >6</button>
        <button className="btn btn-primary" onClick={() => {oprimirOperando("+")}} >+</button>
        <br />
        <button className="btn btn-primary" onClick={() => {oprimir(7)}} >7</button>
        <button className="btn btn-primary" onClick={() => {oprimir(8)}} >8</button>
        <button className="btn btn-primary" onClick={() => {oprimir(9)}} >9</button>
        <button className="btn btn-primary" onClick={() => {oprimirOperando("-")}} >-</button>
        <br />
        <button className="btn btn-primary" onClick={() => {oprimir(".")}} >.</button>
        <button className="btn btn-primary" onClick={() => {oprimir(0)}} >0</button>
        <button className="btn btn-primary" onClick={getResultado} >=</button>
      





      
      
  </div>
  </div>



);



}


export default App;