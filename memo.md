## 分割代入
配列やオブジェクトの要素を直接、変数として取り出して使用する記法
オブジェクトから特定のプロパティを抽出して宣言を行う

## 再レンダリング
まず関数コンポーネント内の実行コンテキスト(関数コンテキスト)を上から実行していく
この時点でおそらくホイスティングが働いている

コンポーネントの状態が変化したらもう一度上から実行する

*特定の条件の場合にコンポーネントを再レンダリングして差分を反映して画面遷移を実現していく*
特定の条件とは
1. stateの変更があった時
2. propsの中身が変わった場合
3. 親のコンポーネントが再レンダリングされた場合 
4. => 子のコンポーネントを読み込んでいるコンポーネントを親とするとこのコンポーネントも追従して再レンダリングされる


# Too many re-renders
stateの変更周りを注意する

## 関心の分離 useEffect
さまざまなstateの値が入り組んでくると互いに邪魔しあう

*useEffect*
useEffect(() => {}, []);
第1引数: コールバック関数
第2引数: 
        [] 配列なら,最初の一回だけ実行したいときに渡す createdみたいな感じ
        stateの値: 当該stateが変更されたときに発火