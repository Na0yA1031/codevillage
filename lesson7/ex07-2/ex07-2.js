// every()メソッド

const strCheck = str => typeof str === 'string';//引数strに渡ってきた値が文字列かどうかを判定する関数

const array1 = ['カブトムシ', 'クワガタムシ', 'カナブン'];

console.log(array1.every(strCheck));//array1の値がstrCheck関数の条件にすべて合格すればtrueを返す

// reverse()メソッド

const array2 = ['クミン', 'コリアンダー', 'ターメリック', 'クローブ', 'カルダモン'];

const arrayRevers = array2.reverse();//配列の要素の順番が逆になる

console.log(arrayRevers);//["カルダモン", "クローブ", "ターメリック", "コリアンダー", "クミン"]

// reduce()メソッド

const array3 = [5, 6, 10, 9, 3, 2, 5, 4, 5];

const arrayReduce = array3.reduce((sum, array) => {  //①
    return sum + array;                              //③         
}, 0)                                                //②

console.log(`私はCodeVillage${arrayReduce}期生です`);//=>私はCodeVillage49期生です

// ①reduceの第一引数にコールバック関数(コールバック関数の第一引数に空の変数、第二引数に配列一つ一つの値を格納する変数)
// ②reduceの第二引数にコールバック関数の第一引数である変数に格納する値を設定
// ③入列一つごとの処理結果をコールバック関数の第一引数に返し全ての処理が完了した値を変数の宣言元に返す


// 文字列メソッドと配列メソッドの共通点、相違点

// 共通点:オブジェクトのプロパティを扱う時と同様ドット記法で扱うことができる

// 相違点:prototypeオブジェクトに格納されているプロパティとメソッドが異なる




