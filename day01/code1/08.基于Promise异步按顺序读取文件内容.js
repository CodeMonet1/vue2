import thenFs from "then-fs";

thenFs
  .readFile('./files/11.txt', 'utf8')
  //catch方法放最后捕获错误，前面有错误，后面的then方法全部不会执行
  //catch放前面，捕获到错误后面的then方法依然会执行
  .catch(err => {
    console.log(err.message);
  })
  .then(r1 => {
    console.log(r1)
    return thenFs.readFile('./files/2.txt', 'utf8')
  })
  .then(r2 => {
    console.log(r2)
    return thenFs.readFile('./files/3.txt','utf8')
  })
  .then(r3 => {
    console.log(r3)
  })
