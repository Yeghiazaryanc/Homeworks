
function myIsFinite(value){
 // 1. Ստուգում ենք, որ տիպը 'number' է
  // 2. Ստուգում ենք, որ NaN չէ (value === value)
  // 3. Համոզվում ենք, որ դրական կամ բացասական անվերջություն չէ
  return typeof value === 'number' && 
         value === value && 
         value !== Infinity && 
         value !== -Infinity;
}
console.log(myIsFinite(25));
console.log(myIsFinite(Infinity));
console.log(myIsFinite('25'));
