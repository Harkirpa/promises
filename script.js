function mainFunction(callback) {
    console.log("Performing operation...");
    
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
  }
   
  
  function callbackFunction(result) {
    console.log("Result: " + result);
  }
   
 
  mainFunction(callbackFunction);

  //2
  setTimeout(() => { 
    console.log("1");
       setTimeout(() =>{
        console.log("2");
        setTimeout(() =>{
            console.log("3");
            setTimeout(() =>{
                console.log("4");
    setTimeout(() =>{
        console.log("5");
        setTimeout(() =>{
            console.log("6");
            setTimeout(() =>{
                console.log("7");
             } ,1000);
             } ,2000);
            },3000);
        },4000);
    } ,5000);
},6000);
},7000);
//7
let promise = new Promise(function (resolve, reject) {
    resolve('Messages');
})
 
promise
    .then(function (successMessage) {
        //success handler function is invoked
        console.log(successMessage);
    }, function (errorMessage) {
        console.log(errorMessage);
    });
//8
    async function myDisplay() {
        let myPromise = new Promise(function(resolve, reject) {
          resolve("Hello Prepbytes");
        });
        document.getElementById("demo").innerHTML  = await myPromise;
      }
      
      myDisplay();

//9
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// 3//
for(let i=1;i<=7;i++)
{
    setTimeout(()=>
    {
        console.log(i);
    },1000*i)
}
//4
let p="yes";
function promiseFun(p){
return new Promise ((res,rej)=>{
if(p==="yes"){
    res("Promise resolved...");
}else{
    rej("Promise rejected...");
}
})
}
// handel the promise
promiseFun(p)
.then((item)=>{console.log(item)})
.catch((err)=>{console.log(err)});
//5
function myDisplayer(something) {
    document.getElementById("hii").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 20, myDisplayer);
  //6
  function print(i){
    console.log("This is call number "+i);
}

function fun1(callback){
    setTimeout(()=>{
    
        let i = 1 ;
        callback(i); i++ ;
        setTimeout(()=>{
     
      	    callback(i); i++;
      	    setTimeout(()=>{
        
        	    callback(i); i++ ;
        	    setTimeout(()=>{
          
          		    callback(i); i++ ;
          		    setTimeout(()=>{
            
            		    callback(i); i++ ;
            		    // .... and so on
            		    
          		    }, 800)
        	    }, 700)
      	    }, 500)
        }, 300)
    }, 100)
}

// Calling fun1 with print function as parameter
fun1(print);
    