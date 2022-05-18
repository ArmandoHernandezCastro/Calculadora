import { useState } from "react";

function App() {

const [num1, setNum1] = useState("");

const [num2, setNum2] = useState("");

const [resulFinal, setResultadoFinal] = useState("");

const [resultado, setResultado] = useState(0);

const nuevoArreglo = [resulFinal]

const [operando, setOperando] = useState("");

const [calc, setCalc] = useState(resulFinal);

const handleClickNota = (index) => {
  setCalc({...notas[index]});
}

function limpiar(){
  setNum1("");
  setNum2("");
  setOperando("");
  setResultado("");
}

const initialState = JSON.parse (localStorage.getItem("notas")) || [];
const [notas, setNotas] = useState(initialState);

function oprimir (n){
  if (operando === ""){
    setNum1(num1+n);
  }else{
    setNum2(num2+n);
  }
}

window.localStorage.setItem(
  "resul", JSON.stringify(nuevoArreglo)
)

function oprimirOperando(n){
  setOperando(n);
}
 
function getResultado (){
  switch(operando){
    case "+":
      setNum1(Number(num1) + Number(num2));
      setResultadoFinal(Number(num1) + Number(num2));
      setOperando("");
      setNum2("");
      break;
      case "-":
        setResultado(Number(num1)- Number(num2));
        setResultadoFinal(Number(num1) - Number(num2));
        setOperando("");
        setNum2("");
        break;
        case "*":
      setNum1(Number(num1) * Number(num2));
      setResultadoFinal(Number(num1) * Number(num2));
      setOperando("");
      setNum2("");
      break;
      case "/":
      setNum1(Number(num1) / Number(num2));
      setResultadoFinal(Number(num1) / Number(num2));
      setOperando("");
      setNum2("");
      break;
        default:
  }
  setCalc(eval(resulFinal));

  setNotas([...notas,{resulFinal}]);
  localStorage.setItem("notas",JSON.stringify(notas));

  setCalc(eval(resulFinal));

  setNotas([...notas,{resulFinal}]);
  localStorage.setItem("notas",JSON.stringify(notas));
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
      
      <div id='history'>
    <h3>Historial de resultados</h3>
    {notas.length===0 ?(
          "No hay ninguna operacion realizada"
        ) : (
          <ol>
            {notas.map((item, index) => {
              return(
                <li key={index} onClick={() => handleClickNota(index)}>
                  {item.resulFinal}
                  
                </li>
              );
            })}
          </ol>
        )}
    </div>





      
      
  </div>
  </div>



);



}


export default App;