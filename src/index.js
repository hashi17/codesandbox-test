/**
 * const, let
 */
// var val1 = "var変数";
// console.log(val1);

// // var 変数は上書き可能
// val1 = "var overwrite";
// console.log(val1);

// // var 変数は再宣言可能
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let2変数２";
// console.log(val2);

// // 再宣言できない
// let val2 = "overwrite";

// const val3 = "aaaa";
// console.log(val3);

// //val3 = "bbb";

// const val3 = "ccc";

// const val4 = {
//   name: "hashi",
//   age: 65
// };
// val4.address = "kanagawa";
// val4.name = "hashi-m";
// val4.tel = "045";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bard";
// val5.push("monkey");
// console.log(val5);

// const name = "hashi";
// const age = 56;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message1);
// //テンプレート文字列を用いる
// const message2 = `私の名前は${name}です。年齢は${age}だす`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// // アロー関数 処理が1行の場合
// const func2 = (str) => str;
// console.log(func2("func2です"));

// // const func3 = (num1, num2) => {
// //   return num1 + num2;
// // };
// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

// 分割代入
// const myProf = {
//   name: "hashi",
//   age: 56
// };
// const message1 = `名前は${myProf.name}です。年齢は${myProf.age}です`;
// console.log(message1);

// const {name, age} = myProf;
// const message2 = `名前は${name}です。年齢は${age}だす`;
// console.log(message2);

// const myProf = ["hashi", 56];
// // const message3 = `名前は${myProf[0]}です。年齢は${myProf[1]}だす`;
// // console.log(message3);
// const { name, age } = myProf;
// const message4 = `名前は${name}です。年齢は${age}だす`;

// デフォルト値
// const sayHello = (name = "mabo") => console.log(`こんにちは${name}さん`);
// sayHello("hashi");

/**
 * スプレット構文
 */
//
// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**
 * map, filter
 */
const nameArr = ["田中", "山田", "hashi"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);
// nameArr.map((name) => console.log(`${name}さん`));
// index が必要な場合
//nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さん`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "hashi") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がTrue : 条件がFalse
// const val1 = 1 > 0 ? "true" : "false";

// const num = "1300";
// const formatNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
//   console.log(formatNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };
// console.log(checkSum(40, 60));

/**
 * 論理演算子の本当の意味を知る
 */
// const flag1 = true
// const flag2 = false

// if (flag1 || flag2) {
//   console.log("1or2 true");
// }
// if (flag1 && flag2) {
//   console.log("1or2 true");
// }

// || は左側がfalseなら右を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

const num2 = 100;
const fee2 = num2 || "金額未設定です";
console.log(fee2);

// && は左側がtrueなら右を返す
const num3 = 100;
const fee3 = num3 && "何か設定されました";
console.log(fee3);

const num4 = null;
const fee4 = num4 && "何か設定されました";
console.log(fee4);
