const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    // ここに課題04-2の回答をコピーする
    if (score === 100) {
        return '秀';
    } else if (score >= 60) {
        return '良';
    } else {
        return '不可';
    }
}

// ここにscoresの各要素をループして、それぞれのscoringの結果を表示するプログラムを書く
for (let i = 0; i < scores.length; i++) {
    console.log(scoring(scores[i]));
}

// 別回答
// scores.forEach((score) => {
//     console.log(scoring(score));
// });

// 別回答２
// {
//     let i = 0;
//     while (i < scores.length) {
//         console.log(scoring(scores[i]));
//         i++;
//     }
// }

// 別回答３
// for (score of scores) {
//     console.log(scoring(score));
// }