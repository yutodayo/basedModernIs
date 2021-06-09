// /**
//  * const、let等の変数宣言
//  */
// var val1 = "var変数"; //jsで一般的に使われていたvar変数
// console.log(val1);

// val1 = "var変数を上書き"; //var変数は上書き可能
// console.log(val1);

// var val1 = "var変数の再宣言"; //var変数は再宣言可能
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き"; //let変数は上書きのみ可能
// console.log(val2);

// const val3 = "const変数"; //const変数は上書きも再宣言も不可能
// console.log(val3);

// const val4 = {
//   name: "yuto",
//   age: 23
// };
// val4.name = "sarry"; // constはオブジェクト、プロパティは変更可能
// val4.age = 18;
// val4.addres = "Shiga";
// console.log(val4);

// const val5 = ["dog", "cat"]; //配列も
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);
// /**
//  * テンプレート文字列
//  */
// const name = "yuto"; //「私の名前はyutoです。年齢は23歳です。」
// const age = 23;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"; //従来の方法
// console.log(message1);

// const message2 = `私の名前は${name}です。年齢は${age}です。`; //テンプレート文字列を用いた方法
// console.log(message2);
// /**
//  * アロー関数
//  */
// function func1(str) {//従来の方法
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {//アロー関数
//   return str;
// };
// console.log(func2("func12す"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));
// /**
//  * 分割代入
//  */
// const myProfile = {
//   name: "yuto",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, age } = myProfile;//分割代入
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["yuto", 23];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);
// /**
//  * デフォルト値
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();//未入力の時の初期値を設定
// /**
//  * スプレッド構文
//  */
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列の中身を順番に展開して表示[1, 2]->1 2

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// const arr2 = [1, 2, 3, 4, 5];//まとめる
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4]; //配列のコピー・結合
// console.log(arr4);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"]; //従来
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {//map関数
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));//中に順番に要素が引数に設定される

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1; //filter関数ではreturnの中に条件式を書いて満たすものだけを返す
// });
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "じゃけえ") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);
