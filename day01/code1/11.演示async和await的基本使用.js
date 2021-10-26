import thenFs from 'then-fs'
console.log('A');
async function getFile() {
  console.log('B');
  const r1 = await thenFs.readFile('./files/1.txt','utf8')
  const r2 = await thenFs.readFile('./files/2.txt','utf8')
  const r3 = await thenFs.readFile('./files/3.txt','utf8')
  console.log('D');
  console.log(r1,r2,r3);

}
console.log('A2');
getFile()
console.log('C');