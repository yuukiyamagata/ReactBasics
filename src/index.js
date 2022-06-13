import React from 'react';
import ReactDOM  from 'react-dom';
import Greeting from './App';


const App = () => {
  return (
    <>
      <Greeting />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// 第一引数 関数コンポーネント
// 第二引数 どこに反映するか