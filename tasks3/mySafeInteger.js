
function mySafeIsInteger (value){
    return Number.isInteger(value) && 
         value >= Number.MIN_SAFE_INTEGER && 
         value <= Number.MAX_SAFE_INTEGER;
}

function isSafeInteger(value) {
  // 1. Ստուգում ենք, որ տիպը հաստատ թիվ է
  if (typeof value !== 'number') {
    return false;
  }
  
  // 2. Ստուգում ենք, որ թիվը ամբողջ է (վերջավոր է և մնացորդը զրո է)
  if (!isFinite(value) || value % 1 !== 0) {
    return false;
  }
  
  // 3. Ստուգում ենք սահմանները. 9007199254740991-ը հավասար է (2^53 - 1)
  return value >= -9007199254740991 && value <= 9007199254740991;
}

console.log(mySafeIsInteger(100));
console.log(mySafeIsInteger(10.2));
console.log(mySafeIsInteger(9007199254740992));
