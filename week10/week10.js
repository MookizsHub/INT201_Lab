//argument
function ops(n1, n2, n3) {
    console.log(arguments) //special objects
    console.log(arguments.length)
    for (const a of arguments) {
      console.log(a)
    }
    arguments[0] = 555 //n1=555
    console.log(n1)
  }
  ops('a', true, 3)

  //defaults
  function ops(n1 = 0, n2 = false, n3 = 'unknown') {
    console.log(n1, n2, n3)
  }
  ops(1, undefined, 'umaporn')
  ops(undefined, undefined, undefined)
  ops(555, true, 'js')

  //rest parameters
  function ops(n1 = 0, n2, ...n3) {
    // console.log(n1, n2, n3)
    console.log('length:', arguments.length)
    for (const ar of arguments) {
      console.log(ar)
    }
    console.log(arguments[2])
  }
  ops(5, 10, 40, 50)
  // ops(5, 10, 40, 50, 100, 200, true)