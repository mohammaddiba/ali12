function sumasync(n,m) {
  function promisf(resolve,reject) {
    let a=sum(n,m);
    if (a>0) {
        resolve(a);
    } else {
        reject('error')
    }
  }
  return new Promise(promisf);
}
function sum(n,m) {
    let s=0;
    for (let i = n; i <=m; i++) {
        if (i%2===0) {
            s+=i;
        }
        
    }
    return s;
}
sumasync(1,10000000000).then((data)=>
{
    console.log(data);
    
}
);
console.log("hello");
