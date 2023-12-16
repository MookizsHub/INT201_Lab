
//spread
function sum(n1, n2, n3) {
    console.log(n1) //[ 10, 20, 30 ], 10
    console.log(n2) //undefined, 20
    console.log(n3) //undefined, 30
    return n1 + n2 + n3
  }
  const nums = [10, 20, 30]
  console.log(sum(nums)) //10,20,30undefinedundefined
  console.log(sum(...nums)) //60


  // const a = [5, 8]
// const b = [2, 7]
// const [x1] = a
// const [y1] = b
// console.log(x1 + y1)
function arrayAdd1([x1], [y1]) {
    return x1 + y1
  }
  const a = [5, 8]
  const b = [2, 7]
  console.log(arrayAdd1(a, b)) // 7