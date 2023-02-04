module.exports = (x, y, callBack) =>{
    if (x==0 || y==0) {
        callBack(new Error("Any of the x, y are zeros\n", 
        null));
    }
    else{
        callBack(null, {
            add: () => (x+y),
            sub: () => (x-y)
        })
    }
}