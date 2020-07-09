
// 1. Create an empty array and assign it to a variable
var a = new Array();
var b = new Array();

// 2. Add 5 numbers to the array using push or unshift
a.push(1); b.unshift(1);
a.push(2); b.unshift(2);
a.push(3); b.unshift(3);
a.push(4); b.unshift(4);
a.push(5); b.unshift(5);


// 3. Display the length of the array
console.log(a,b);
console.log("a.length = "+a.length)
console.log("b.length = "+b.length)

// 4. Take the value associated with index 3, multiply it by 10 
// and then place it back into index 3.
a[3] = a[3]*10;
b[3] = b[3]*10;
console.log(a,b);

// 5. Create a function addItem that will add the value 
// passed in to the end of the array you created in step 1

function addItem(val){
  a.push(val);
  b.push(val);
}

// 6. Create a function getItem that will remove a value 
// from the start of the array you created in step 1

const getItem = function(){
  a.shift(0)
  b.shift(0)
}

// 7. Test both functions. 

addItem(120);
console.log(a,b);
getItem();
console.log(a,b);










