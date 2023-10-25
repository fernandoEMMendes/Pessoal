import Datepicker from "react-datepicker"
import { useState } from "react";

function App() {

  const [data, setData] = useState(new Date())

  function alerta() {
    console.log(data)
  }

  return (
    <div>
      <Datepicker selected={data} onChange={(e) => { setData(e.target.value) }} />
      <button onClick={alerta}>Botao</button>
    </div>
  );
}

export default App;
