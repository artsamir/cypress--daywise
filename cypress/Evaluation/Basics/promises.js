
/// <reference types="@cypress/xpath" />
let promise = new Promise((resolve, reject)=>{
let a = 5;
if(a==5){
    resolve('Promise is Resolved')
}
else
reject('Promise is Rejected')

})
promise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
})
