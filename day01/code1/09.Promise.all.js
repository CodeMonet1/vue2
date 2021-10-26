import thenFs from "then-fs";

const promiseArr = [
  thenFs.readFile('./files/3.txt','utf8'),
  thenFs.readFile('./files/2.txt','utf8'),
  thenFs.readFile('./files/1.txt','utf8')
]

Promise.all(promiseArr).then(([s1,s2,s3]) => {
  console.log([s1, s2, s3]);
})
Promise.race(promiseArr).then(ox => {
  console.log(ox)
})