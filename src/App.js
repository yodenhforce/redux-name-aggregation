import { useEffect, useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';

function OutputComp(props) {
  const {display, flag} = props;
  if(flag) {
    return(
      <div>
        {display}
      </div>
    )
  }
}
function App() {
  const nameList = useSelector((state) => state.names.value);
  const [displayFlag, setDisplayFlag] = useState(false);
  const [display, setDisplay] = useState();
  const handleClick = () => {
    setDisplayFlag(true);
  }

  useEffect(() => {
    let res =
    <div>
      <table>
        <thead>
          <tr>
          <th>店番号</th>
          <th>顧客番号</th>
          <th>カナ氏名</th>
          <th>生年月日</th>
          </tr>
        </thead>
        <tbody>
          {nameList.map((e) => 
          <tr key={e.customerId}>
            <td>{e.branch}</td>
            <td>{e.customerId}</td>
            <td>{e.kanaName}</td>
            <td>{e.birthDay}</td>
            <hr/>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    setDisplay(res);
  })

  return (
    <div className="App">
      <div>
        <h1>同一名義人照会</h1>
      </div>
      <div>
        <input type="text" value="ﾖｺﾊﾏ ﾀﾛｳ" readonly/>
        <input type="number" value="19971015" readonly/>
        <button onClick={handleClick}>送信</button>
      </div>
      <OutputComp display={display} flag={displayFlag}/>
    </div>
  );
}

export default App;
