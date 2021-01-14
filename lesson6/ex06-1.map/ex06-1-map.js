const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map(item => item[0] + item[1] + item[2] + item[3] + item[4] + item[5] + item[6]);
console.log(sums);

// const sums2 = items.reduce((array, item) => {
//     let sum = 0;
//     item.forEach((result) => {
//         sum += result;
//     })
//     array.push(sum);
//     return array;
// }, [])

// console.log(sums2)


// const sums3 = items.map((item) => {
//     // ここを埋める
//     let sum = 0;
//     item.forEach((val) => {
//         sum += val;
//     })
//     return sum;
// })
// console.log(sums3);

// const sums4 = items.map((item) => {
//     const sum = item.reduce((sum, i) => {
//         return sum + i;
//     }, 0)
//     return sum;
// })

// console.log(sums4);

// const sums5 = items.map((item) => {
//     // ここを埋める
//     let sum = 0;
//     for (let i = 0; i < item.length; i++) {
//         sum += item[i];
//     }
//     return sum;
// })
// console.log(sums5);


// function sums6(items) {
//     let sum = 0;
//     if (sum === 0) {
//         items.forEach((item) => {
//             sum += item;
//         })
//     } else {
//         sum = 0;
//         items.forEach((item) => {
//             sum += item;
//         })
//     }
//     return [sum];
// }

// const result = sums7(items[0]);
// const result2 = sums7(items[1]);
// const result3 = sums7(items[2]);
// const result4 = sums7(items[3]);
// result.push(result2[0], result3[0], result4[0]);
// console.log(result);

