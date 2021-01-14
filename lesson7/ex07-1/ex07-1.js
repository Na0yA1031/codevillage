// concat()メソッド
const concat1 = 'Code';
const concat2 = 'Village';
const concat3 = '49期生';
console.log(concat1.concat(concat2, concat3));//=>CodeVillage49期生



// include()メソッド
const name1 = '私の名前はN.Fです';
const name2 = 'N.F';
console.log(`私の名前は${name2}${name1.includes(name2) ? 'です' : 'ではありません'}`)
// name1の値にname2の値と同じものがあればtrueを返す
// コンソールの結果はname1とname2に同じ値が入っている(true)なら'です'、
// 入っていない(false)なら'です'という文字列が三項演算子により返される


// split()メソッド
const hobby = '私の趣味は ゲーム, アニメ, 動画鑑賞です';

const hobbyS = hobby.split('');// ''の間に空白を入れない場合一文字ずつにインデックス番号が割り振られた配列を返す

console.log(hobbyS)//=>["私", "の", "趣", "味", "は", " ", "ゲ", "ー", "ム", ",", " ", "ア", "ニ", "メ", ",", " ", "動", "画", "鑑", "賞", "で", "す"]

console.log(hobbyS[6])//=> ゲ


const hobbyS2 = hobby.split(' ')// ' 'の中に空白を一つ入れると文字列の一区切りごとにインデックス番号が割り振られた配列を返す

console.log(hobbyS2)//=>["私の趣味は", "ゲーム,", "アニメ,", "動画鑑賞です"]

console.log(hobbyS2[3]);//=>動画鑑賞です

const hobbyS3 = hobby.split();// 引数なしの場合文字列全体をインデックス番号０の配列で返す
console.log(hobbyS3);//=>["私の趣味は ゲーム, アニメ, 動画鑑賞です"]

