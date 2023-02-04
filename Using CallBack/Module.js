module.exports = (x, y, callBack) =>{
    if (x==0 || y==0) {
        callBack(new Error("Both x and y are zeros", 
        null));
    }
    else{
        callBack(null, {
            add: () => (x+y),
            sub: () => (x-y)
        })
    }
}