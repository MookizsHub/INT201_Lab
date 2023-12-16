const sum = (n1,n2) => {
    return n1+n2
}

const section ='Group 2'
//common js module
//module.exports = {sum:sum,section:section}
//module.exports = {sum,section}


// es module have to use {}
export{sum} //name export
