//a,b,c,e are global scope
let a = 1;
const b = 2;
var c = 3;
// d,e are block scope
// f are no allowed in present version (var)
{
    // local variable in block
  let d = 4;
  const e = 5;
  var f = 6;

  console.log("-- block area--");
  console.log(a);
  console.log(b);
  console.log(c);
}
// h,i,j are function scope and they are local variable in function
function doIt() {
  let h = 7;
  const i = 8;
  var j = 9;

  console.log("-- function area--");
  console.log(a);
  console.log(b);
  console.log(c);

  console.log(f);
  //console.log(e);
  //console.log(d);
}

doIt();
console.log("-- global area--");
console.log(a);
console.log(b);
console.log(c);
// can ref to because it is var 
console.log(f); 
// block scope mot allow out of box is end 
//console.log(d);
//console.log(e);
// function variable cannot ref to it
//console.log(h);
//console.log(i);
//console.log(g);



