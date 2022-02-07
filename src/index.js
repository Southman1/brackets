module.exports = function check(str, bracketsConfig) {
  // let getArray = [...str];
  // console.log(getArray);

  let res = [];
  let checkArr = ['(','[','{','|',')',']','}'];
  let getArray = Array.from(str)  
  console.log(getArray)

  
  for (let i = 0; i < getArray.length; i++){
 
      res.push(getArray[i])
      console.log(res)

      for (let j = res.length; j >= 0; j--){

        // console.log(res)

          if(checkArr[4] == res[j] && checkArr[0] == res[j-1]){
            res.pop() 
            res.pop() 
          }

          if(checkArr[5] == res[j] && checkArr[1] == res[j-1]){
            res.pop() 
            res.pop() 
          }

          if(checkArr[6] == res[j] && checkArr[2] == res[j-1]){
            res.pop() 
            res.pop() 
          }

          if(checkArr[3] == res[j] && checkArr[3] == res[j-1]){ 
            res.pop() 
            res.pop() 
          } 
         
          if('2' == res[j] && '1' == res[j-1]) {  
            res.pop() 
            res.pop() 
          }

          if('4' == res[j] && '3' == res[j-1]) {
            res.pop() 
            res.pop() 
          }

          if('6' == res[j] && '5' == res[j-1]) {
            res.pop() 
            res.pop() 
          }

          if('7' == res[j] && '7' == res[j-1]) {
            res.pop() 
            res.pop() 
          }
      
          if('8' == res[j] && '8' == res[j-1]){
            res.pop() 
            res.pop() 
          }
      }
  } 
  
  if (res.length == 0){
    return true;
  } else {
    return false;
  }
}
