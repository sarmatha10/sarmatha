// // var a = 10; //Reniitialize Redeclare
// // let b = 20; //Reniitialize
// // const c = 30;

// // console.log(a);
// // console.log(b);
// // console.log(c);

// // var num = 10;
// // var str = "sarmi";
// // var underfine ;
// // var Null = null;
// // var boolean = true;

// // console.log(typeof num);
// // console.log(typeof str);
// // console.log(typeof underline);
// // console.log(typeof Null);



// // var bigInt = 123n;
// // var symbol = Symbol('l1');

// // console.log(typeof bigHit)
// // console.log(typeof symbol)


// // var arr = [10,20,30,40];
// // console.log(typeof arr, arr);
// // var obj= {
// //     name:"sarmi",
// //     dept:["AI&DS" , "CT"]
// // }
// // console.log(typeof obj,obj)

// // //Arithmetic operator (+,-,*,%,/)

// // var a = 10;
// // var b = 20;

// // console.log(a + b);
// // console.log(a - b);
// // console.log(a * b);
// // console.log(a % b);
// // console.log(a / b);

// // //logical operator(&&,||,|)

// // //              &&       ||
// // // true  true    true     true
// // // true  false   false    true
// // // false true    false    true
// // // false  false   false    false

// // var a = true ;
// // var b = false;

// // console.log(a&&b);
// // console.log(a)

// // // Relational operator()

// // a = 10 ;
// // b = 20 ;

// // console.log(a>b);
// // console.log(a<b);
// // console.log(a>=b);
// // console.log(a<=b);
// // console.log(a==b);
// // console.log(a!=b);
// // console.log(a===b);
// // console.log(a!==b);

// //Assignment operator
// // a = 10;
// // b = 20;

// // a+=b;
// // console.log(a);
// // a-=b;
// // console.log(a);

// //unary operator(--,++)

// // var a = 10 ;

// // console.log(a++);
// // console.log(++a);

// // var a = 10;

// // console.log(a--);
// // console.log(--a);
// // var a = 10;
// // var b = 20;
// // // if conditon
// // if(true){
// //     // Template Literals
// //     console.log(`${a} + ${b} = ${a+b}`)
// // }

//     // var a; //hosting
//     // console.log(a);
//     // var a = 10;

//     // var a = 10;//global scope
//     // let b = 20; //block scope
//     // const c = 20;// block scope
//     // if(true){
//     //     var a = 40;
//     //     console.log(a);
//     //     let b = 20
//     //     const c = 30; 
//     //     console.log(b);
//     // }
//     // console.log(a);
//     // console.log(b);
//     //  var a = 10;
//     //  if(a%2==0){
//     //     console.log(`$(a)is Even`);
//     //  } 
//     //  else{
//     //     console.log(`$(a)is Odd`);
//     //  }


//     //  var mark =90;
//     //  if (mark >=90){
//     //     console.log(" O grade");
//     //  }
//     //  else if (mark >=80){
//     //     console.log(" A grade");
//     //  }
//     //  else if (mark >=35){
//     //     console.log("PASS");
//     //  }
//     //  else {
//     //  console.log("FAIL")
//     //  } 
     
//     // var a = 10;
//     // // condition? true ststement : false statement
//     // var result = a%2==0 ? "Even" : "Odd";
//     // console.log(result)

//     // mark = 10;
//     // var result = (mark>=90) ? "O grade" :
//     //              (mark>=70) ? "A grade" :
//     //              (mark>=35) ? "PASS" :
//     //              "FAIL";
//     //              console.log(result);
                  
//     // var day = 2;
//     // switch(day){
//     //     case 1:{
//     //         console.log("sunday");
//     //         break;
//     //     }
//     //     case 2:{
//     //         console.log("monday");
//     //         break;
//     //     }
//     //     case 3:{
//     //         console.log("tuesday");
//     //         break;
//     //     }
//     //     case 4:{
//     //         console.log("wednesday");
//     //         break;
//     //     }
//     //     case 5:{
//     //         console.log("thursday");
//     //         break;
//     //     }
//     //     case 6:{
//     //         console.log("friay");
//     //         break;
//     //     }
//     //     case 7:{
//     //         console.log("saturday");
//     //         break;
//     //     }
//     //     default:{
//     //         console.log("Invalid Input");
//     //     }
//     // }  

//     // looping statement 
//     // for(var i = 1;i<=10;i++){
//     //     console.log(i);
//     // }

//     // var val = 1026;
//     // var count = 0;
//     // while(val > 0){
//     //     count++;
//     //     val = Math.floor(val/10);
//     // }
//     // console.log(count)

//     //do{
//     console.log("Do....while")
//      }while(false;)

// for(let i=1;i<=10;i++){
//     if(i%2===0){
//     continue;
//     }
//     console.log(i);


// }



// function add(a = 4 , b =5 ){
//     console.log(a+b);
// }

// add();//Hosting

// var demo = ()=>{
//     console.log(20 + 80)
// }
// demo(10,20);
// demo();
// demo(10);



// //spreed operator(...)
// var arr = [10,20,30];
// var arr2 = [...arr,40,50];
// console.log(arr);
// console.log(arr1);

//Destruction operator

// var [m1,m2,m3,m4,m5] = [90,99,98,97,100]
// console.log(m1,m2,m3,m4,m5);

// var {name,mobile,dept,email,isactive} = {
//     name : "sarmatha.s",
//     mobile :"7200132408",
//     dept : "B.sc Computer Technology",
//     email : "sarmathasakthivel@gmail.com",
//     isactive : true 
// }
// console.log(name,mobile,dept,email,isactive);


// var arr = [10,20,30,40,50];
// //for..in
// for(let index in arr){
//     console.log(index)
// }

// //for..of
// for(let value of arr){
//     console.log(value)

// }
// var obj = {
//           name:"shamu",
//           dept:["CT"],
//           mobile:7200132408,

// }
// for(let key in obj){
//          console.log(key,obj[key])
// }

// var arr = [1,2,3,4,5];

// var result = arr.map((val)=>(val*2));
// console.log(result)
// var even = arr.filter((val)=>val%2===0);
// console.log(even);
// var sum = arr.reduce((add,val)=>(add+val),0);
// console.log(sum);

var username = {
     name:"sarmatha",
     dept: "CT",
     skills:{
        programming:["java script,c,c++"],
        database:["SQL"]
     }
    }

var user = {
        ...username,
        password:123456789
     }
console.log(user);