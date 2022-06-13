import { useEffect, useState } from "react";
import { ColorFulMessage } from "./components/ColorFulMessage";

const Greeting = () => {
  console.log('さいしょ')
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1)
  };

  const onClickSwitchAShowFlag = () => {
    setFaceShowFlag(!faceShowFlag)
  };

  useEffect(() => {
    console.log('useEffect');
    if(num > 0){
      if(num % 3 === 0){
        faceShowFlag || setFaceShowFlag(true);
      }else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line
  }, [num]);





  // 一つ目の要素: 変数名(任意の名前を使用することができる)
  // 二つ目の要素: stateの変数を更新していく関数名
  // useStateの引数で初期値の設定
  const contentStyle = {
    color: 'red',
    fontSize: '20px'
  }
  return (
    <>
      <h1 style={contentStyle}>こんにちは！</h1>
      <ColorFulMessage color="blue">元気ですか</ColorFulMessage>
      <ColorFulMessage color="pink">元気です</ColorFulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchAShowFlag}>on/off</button>
      <p>{ num }</p>
      {faceShowFlag && <p>✌︎('ω'✌︎ )</p>}
    </>
  );
}

export default Greeting;