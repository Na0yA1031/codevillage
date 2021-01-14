// bodyタグを取得
const body = document.body;

// HTMLタグの生成
const h1 = document.createElement('h1');
const p = document.createElement('p');
const h2 = document.createElement('h2');
const ul = document.createElement('ul');

// HTMLタグにテキストを格納
h1.textContent = 'DOM';
p.textContent = 'JavaScriptからHTMLを扱うための仕組み';
h2.textContent = '印象に残っているトピック';

// liタグに入れるテキストを配列で作る
const listText = ['documentオブジェクト', 'getElementById', 'イベントリスナ'];

// 配列の要素数だけliタグを生成し,liタグにテキストを挿入。その後ulタグに順番にliタグを入れる
listText.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
});

// bodyに生成したHTML要素を入れる
body.appendChild(h1);
body.appendChild(p);
body.appendChild(h2);
body.appendChild(ul);





