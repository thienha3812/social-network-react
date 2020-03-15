var hello = function(){
    return new Promise((resolve,reject)=>{
        if( 1== 1){
            resolve(1)
        }
    })
}

var h = hello()

h.then(value=>{
    console.log(value)
})