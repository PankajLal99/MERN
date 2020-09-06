//////// Double Comment are the notes and the sigle are the codes :

// //Video 3  https://www.youtube.com/watch?v=OrE3JtL0gak&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=3
// // How to make pkg wiht terminal (cmd : npm init )
// console.log("Hello World")
// const a=10;
// const b=20;
// c=a+b;
// console.log("Adition of two values : "+c)

// //Video 4 https://www.youtube.com/watch?v=zPUsoxvMwac&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=4
// //How to make objects and Anonymous and Arrow Fucntions 
// //Objects
// var users={name:"Pankaj Lal",age:"21"}
// // . is used to print seprately
// // objects in node js are like the dictionaries in python but not the properties
// console.log(users.name)
// console.log(users.age)
// //Anonymous Funtion / Lambda functions
// var person=function(a,b){
//     var c=a+b;
//     console.log("Adition of a and b : "+c);
// }
// person(10,20);
// // Arrow Fucntions
// // Anonymus Fucnction 
// var users=function(){
//     console.log("This is a Anonymus fucntion ");
// }
// // Arrow Function
// var users=(a)=> console.log("This is arrow Function : "+a);
// var users=(a,b)=>{
//     var c=a+b;
//     console.log("Addition of "+a+"and "+b+" is : ",c);
// }
// users(100,200);

// // Video 5 https://www.youtube.com/watch?v=dCC_SBoewVg&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=5
// // Global Objects 
// // __dirname,
// // __filename,
// // require (ek file ko dusre file ko ek  dusre me use krne ke liye)
// // buffer (strore temprory values)
// // modules(used to access data in while require and acquire)
// // exports (same is above )
// console.log(__dirname);
// console.log(__filename);
// // always we have to exports the var if we have to get it in requres files 
//  // syntax  : module.exports.<name_by_which_have_to_export>=<variable name>
// // example  : module.exports.name_value=name; refer file require_file_example.js
// var main = require('./require_file_example')
// console.log(main.name_value);

// // Video 6 https://www.youtube.com/watch?v=vR-svD-VxDI&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=6
// //  What is ECMAScript 2015 or ES 6;
// // let , const, templating string, class
// var a = 30;
// var b = 40;
// console.log(a);
// // Note : nno error instead values are over written : now lets see let it will genrate error and let is a scope variable 
// // example :  below
// let a=200;
// user=()=>{
//     let a=100;
//     console.log(a);
// }
// user();//printted first let of scope
// console.log(a);//let a printed of let outside

// // const : whose value remain constant over the file example below
// const a=100;
// const a=12;//SyntaxError: Identifier 'a' has already been declared
// const a={
//     name:"PKMB",
// }
// a.email = "lalpankaj@gmail.com"; // we can change the value of constant while declaring it as object 
// console.log(a);

// // Template String  (%s like we use in c and c++) 
// var name ="Pankaj Lal";
// var age = 21;

// console.log("\nHiii %s your age is  : %s\n",name,age);
// console.log(`hii ${name} your age with tild sign is : ${age}\n`); //use tild sign below the escape key ;

// // Class is Node js or ES6
// // class name are captilaized Example below 

// class Users{
//     constructor(){
//         this.name="Pankaj ";
//         this.age = 21;
//     }
//     getname(){
//         return this.name;
//     }
//     getage(){
//         return this.age;
//     }
// }

// var obj = new Users();
// console.log(obj.getage());
// console.log(obj.getname());

// // Video 6 Prototype https://www.youtube.com/watch?v=nLvdEe2uSq4&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=8&t=0s
// // Prototype is like class (Resuability)

// // stud = () =>{ object can't be made ;
// function stud() {
//     this.name="Pankaj";
//     this.age=21;
// }
// // //  if we wANT TO add a new functionality in above class/function
// // // we'll do is prototyping 
// stud.prototype={
//     dept:"CSE",getdept:function(){
//         return this.dept;
//     }
// }
// // prototype me dic type se value dalte hai
// var s1= new stud();
// console.log(s1.getdept());
// console.log(s1)

// // video 7 Custom Modules https://www.youtube.com/watch?v=uyIWCAnfuzM&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=8
// // when we write program we write a code in a single page 
// // to divide those above program events and then call them in a single file 
// // we use Modules.

//ADDITTION
// SUBSTRACTION
// DIVISION
// MULTIPLICATION
// Refer folder CALCULATOR 

// // video 8 HTTP Module https://www.youtube.com/watch?v=dh8N7PRmoc8&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=9
// // refer file httpmodule.js in the main dir for more ifo @http modules

// // video 9  Nodemon Installinng https://www.youtube.com/watch?v=G26q9_PE60Y&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=10
// // this module is used to automatically refresh the modules when server is running
// // npm -g install nodemon

// // video 10 File System Module in nodejs https://www.youtube.com/watch?v=XzxU2AG3exY&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=11
// // file system module is requried with 'fs'
// // readingthisfilein_main.txt
// const fs = require("fs");

// // console.log(fs) TO READ ALL THE MODULES AVAILABLE
// // // read file is a event 
// fs.readFile(__dirname+"/readingthisfilein_main.txt","utf8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// //we can clean edit and delete the file  
// // fs.unlink()
// fs.readFile(__dirname+"/readingthisfilein_main.txt","utf8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });

// // now lets put all video 10 and 9 together 

// // reading file and then showing it on the server 
// const fs = require("fs");
// const http = require("http");
// // // http module is used to create a local server
// // // two para are passed in create server req and response
// const server=http.createServer(function(req,res){
//     fs.readFile(__dirname+"/readingthisfilein_main.txt","utf8",(err,data)=>{
//         res.writeHead("200",{"content-type":"text/plain"});
//         res.write(data);//use to print default response 
//         res.end();
//     });
// }).listen(3000,()=>console.log("Server started on port 3000"));


// // video 11 Sync and Async https://www.youtube.com/watch?v=mfl9Q9R0Q9U&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=12
// // Asyc data never wait for results it prints which ever is fast
// const fs = require('fs');
// fs.readFile(__dirname+"/readingthisfilein_main.txt","utf8",(err,data)=>{
//     if (err) throw err;
//     console.log(data);
// });
// // console.log(fs);
// // always use try catch for Synchronious method (below is example).
// const fs= require('fs');
// try{
//     const data = fs.readFileSync(__dirname+"/readingthisfilein_main.txt","utf8");
//     console.log(data);
// }
// catch(e){
//     console.log(e);
// }
// console.log("Hey i'll print later");

// // Video 12 Trigger Custom event in Node js https://www.youtube.com/watch?v=xlkjEOfy-WQ&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=13
//// Tradional way in javascript
// // $("#button").on('click',function(){
//     console.log("Event Clicked");
// });
//  // there is a inbuilt module 
// const events = require('events');
// const event = new events.EventEmitter();
// // event.on('yaha_name_koi bhi likh do vahhi same name emit me call hogaa'
// //,yaha function lagaye gye anonymus fir)
// // emit ek caller fucntion hai event ka usme apn para meters bhi pass kr skte hai 
// // fir unko on event me catch krwa kr print bhi
// event.on('click',()=>{
//     console.log("First event created")
// });
// event.emit('click');
// // Parameter passing 
// event.on('show',(n1)=>{
//     console.log(n1);
// });
// event.emit('show',"First event created");

// // Video 13 Trigger Custom event (Part 2) in Node js https://www.youtube.com/watch?v=TX_JhPu6qcI&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=14
// // Multiple event (ek ke ander ek)

// const events=require('events');
// const event = new events.EventEmitter();

// const f_event=function(){
//     console.log("First event Called");
//     event.emit('click2',s_event);
// }
// const s_event = function(){
//     console.log("Second event called");
// }
// event.on('click',f_event);
// event.on('click2',s_event);
// event.emit('click',f_event);

