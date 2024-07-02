// let n = 5;
// for (let i = 1; i <= n; i++) {
//   let str ='';
//   for (let j = 0; j < i; j++) {
//   str += (i+j +' ')
//   }
//   console.log(str);
// }
   1
   23
   345
   4567
   56789


   function incrementArray(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] < 9) {
        arr[i]++;
        return arr;
      }
      arr[i] = 0;
    }
    arr.unshift(1);
    return arr;
  }
  console.log(incrementArray([1, 2, 3])); 
  console.log(incrementArray([9, 0]));  
       
