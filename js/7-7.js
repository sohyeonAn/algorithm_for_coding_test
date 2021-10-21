/**
 * <부품 찾기> - 집합(set)
 * 동빈이네 전자 매장에는 부품이 N개 있다. 
 * 각 부품은 정수 형태의 고유한 번호가 있다.
 * 어느 날 손님이 M개 종류의 부품을 대량으로 구매하겠다고 했다.
 * 가게 안에 부품이 모두 있는지 확인해보자.
 * 
 * 예를 들어 가게의 부품이 총 5개일 때 부품 번호가 다음과 같다고 하자.
 * N=5, [8, 3, 7, 9, 2]
 * 손님은 총 3개의 부품이 있는지 확인 요청했다.
 * m=3, [5, 7, 9]
 * 
 * 이때 손님이 요청한 부품 번호의 순서대로 부품을 확인해 부품이 있으면 yes,
 * 없으면 no를 출력한다. 
 * 
 * 첫째 줄에 정수 n(1 <= n <= 1,000,000)
 * 둘째 줄에 공백으로 구분하여 n개의 정수. (1 <= 정수 <= 1,000,000)
 * 셋째 줄에 정수 m(1 <= m <= 100,000)
 * 넷째 줄에 공백으로 구분하여 m개의 정수.
 * 
 */

 const readline = require("readline");
 const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
 
 let count = 0;
 let n, m;
 let array = new Set(); // 가게에 있는 부품 번호
 let x = []; // 손님이 요청한 부품 번호
 
 rl.on("line", (line) => {
   if (count === 0) {
     n = parseInt(line.trim());
   } else if (count === 1) {
     line.trim().split(' ').forEach((el) => array.add(parseInt(el)));
   } else if (count === 2) {
     m = parseInt(line.trim());
   } else {
     x = line.trim().split(' ').map((el) => parseInt(el));
     rl.close();
   }
   count++;
 });
 
 rl.on("close", () => {
   console.log(array);
   // 손님이 확인 요청한 부품 번호를 하나씩 확인
   x.forEach(el => {
     if (array.has(el)) {
       console.log("yes");
     } else {
       console.log("no");
     }
   })
 });