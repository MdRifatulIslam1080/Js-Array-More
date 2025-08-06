const exam_mark = [
  [43, 34, 67, 86, 97, 32, 76, 99],
  [34, 46, 56, 75, 54, 75, 32, 66],
  [53, 56, 67, 89, 90, 86, 90, 62],
];
console.log(exam_mark);
console.log(exam_mark[0][4]);
exam_mark[1][0] = 55;
console.log(exam_mark);
console.log(exam_mark[1][0]);
exam_mark[2].pop();
console.log(exam_mark);
exam_mark[2].push(44);
console.log(exam_mark);
