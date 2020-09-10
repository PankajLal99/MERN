// // Video 14 Express JS https://www.youtube.com/watch?v=g1aE9u6sXWk&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=15
// // What is Express JS 
// // Framework for node js
// // npm install express


// const express = require("express");
// const app = express();
// // console.log(app);
// app.get("/",(req,res)=>{
//     res.send("Hello World");
// });
// app.get("/users",(req,res)=>{
//     res.send("Users data accessed");
// });
// app.listen(3000,()=>console.log("Server running @ 3000"));

// // Video 15 Express Template Engine Intro https://www.youtube.com/watch?v=rNcKArJzsWo&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=16
// // Template Engine is used to display frontend 
// // pug and ejs are used 
// // Dynamic Code 
// // https://stackshare.io/stackups/ejs-vs-pug

// // Video 16 Express Application Genrator 
// // Used to Create Dummy Application (Skleton for an app)
// // refer root directory in Express JS
// // Commands : 1. npm install express-generator -g (-g for global )
// // 2. express -h (cmd for all available features)
// // 3. express --view=ejs <appname> // express --view=pug <appname>
// // npm insall in every new project folder
// // set environment before running app.js
// // cmd : set DEBUG=<appname>:* & npm start
// // powershell : $env:DEBUG='myapp:*'; npm start


// // Video 17 basic Routing in Express https://www.youtube.com/watch?v=OI3TuTPtIrA&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=18
// // Routing refers to determining how an application responds to a 
// // client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

const express = require("express");
const app = express();
// console.log(app);
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/users",(req,res)=>{
    res.send("Users data accessed");
});
app.post("/users/profile",(req,res)=>{
    res.send("Profile data Sended");
});
app.listen(3000,()=>console.log("Server running @ 3000"));

// // Video 18 Static files https://www.youtube.com/watch?v=a26XARTbUkg&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=20&t=0s
// // make a folder named :-> public ->CSS -> images
// // make a html file
// //  Now write a new line after line 59
// const express = require('express');
// const app = express();
// app.use(express.static('public'));
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+'/index.html');
// });
// // Using index.html file
// app.listen(3000,()=>{
//     console.log("Server Running @ port 3000");
// });
// // To create a virtual path (to decive the user (Dhokha dene ke liye))
// app.use('/static',express.static('public'));

// // Video 19 Create Route with Parameters https://www.youtube.com/watch?v=XqswNrL-StI&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=20
// // use : for parameters and for multi parameters :ID/:Name 
// // we use ? for optional parameters 
// const express = require('express');
// const app = express();
// app.get('/',(req,res)=>{
//     res.send("Home Page");
// });
// app.get('/user/:Id?/:Name?',(req,res)=>{
//     if (req.params.Id != undefined || req.params.Name != undefined){
//         res.send("<h1>User Page</h1>" + "<h2>"+req.params.Id+
//         "</h2>"+"<h2>"+req.params.Name+"</h2>");
//     }
//     else{
//         res.send("<h1>All User Data Accessed </h1>");
//     }
// });
// app.get('/flight/:From?.:To?',(req,res)=>{
//     console.log(req.params);
//     res.send("<h1>Flight Page</h1>" + "<h4>Search Flights in url</h4>");
//     // res.send();
// });
// app.listen('3000',()=>console.log("@ 3000 Port"));

// // Video 20 Pass REG-ex or Slash Character 
// // Continuation of video 19
// // * anything we can write
// // + vahi repeat hoga jiske bad plus hai
// // ? ka smajh nahi aaya 
// // $ last word / letter
// // "/.*fly$/"

// // Video 21 Middleware https://www.youtube.com/watch?v=_km_9k8tCpY&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=22
// // MIddleware work for us as security manager 
// // mainly use in authentication / Login
// // Example

// const express = require('express');
// const app = express();

// var validation=(req,res,next)=>{
//     console.log("MIddleware Working ");
//     next();
// }
// var Uservalidation=(req,res,next)=>{
//     console.log("User MIddleware Working ");
//     next();
// }
// // this is globally accessed
// // app.use(validation);
// // Defie with get function to avoid global accessibility
// app.get('/',validation,(req,res)=>{
//     res.send("<h1>Login</h1>");
// });
// app.get('/user/:username',Uservalidation,(req,res)=>{
//     if (req.params.username == 'pankaj')
//     res.send("<h1>Authorized User LoggedIn</h1>");
//     else
//     res.send("<h1>UnAuthorised User :"+req.params.username+"</h1>");
// });
// app.listen(3000);


// // Video 22 Express JS Template Engine https://www.youtube.com/watch?v=htwTSYo0lW0&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=23
// // PUG npm install -g pug
// // always we have to set app acc. to template engine
// const express = require('express');
// const app = express();
// app.use('/static',express.static('public'));
// app.set('view engine','twig');
// app.set('views','./public/views');

// app.get('/',(req,res)=>{
//     res.render("index_twig",
//     {
//         title : "PUG Render",
//         message:"Successful"
//     });
// });

// app.listen(3000);

// // Video 23 GET AND POST REQUEST   https://www.youtube.com/watch?v=1lVZi1GQKvI&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=24
// // Every Things are used in express are in jason format

// const express = require('express');
// const parser = require('body-parser');
// const app = express();

// app.use(express.static('public'));
// app.set('view engine','twig');
// app.set('views','./public/views');

// //usning body parser
// app.use(parser.urlencoded({extended:false}));
// app.use(parser.json());

// app.get('/',(req,res)=>{
//     res.render('index_twig',{
//         title:"Login Page ",
//         message:"Enter your Details  ",
//     });
// });

// app.post('/',(req,res)=>{
//     res.render('login',{
//         title:"Display USer details ",
//         message:"Details",
//         username:req.body.username,
//         password:req.body.password,
//     });
// });

// app.get('/about/:x-:y',(req,res)=>{
//     res.render('about',{
//         title:"About Page",
//         message:"About Page",
//         sum:parseInt(req.params.x)+parseInt(req.params.y),
//         sub:parseInt(req.params.x)-parseInt(req.params.y),
//         mul:parseInt(req.params.x)*parseInt(req.params.y),
//     });
// });
// app.listen(3000);

// // Video 24 Performing Validator in Express JS https://www.youtube.com/watch?v=oiuzVGCCWGs&list=PLUVqY59GNZQMcLXlrBo4T557kWjbKHMLS&index=25
// // Remember
// // epxress import
// const express = require('express');
// const app = express();
// // parser for post
// const parser= require('body-parser');
// // To get validator in program
// const {check, validationResult,matchedData, sanitizeBody} = require('express-validator');
// // use above lie
// // static
// app.use(express.static('public'));
// // view engine
// app.set('view engine','twig');
// // path for views
// app.set('views','./public/views');
// // post request
// app.use(parser.urlencoded({extended:false}));
// app.use(parser.json());
// // pages
// app.get('/',(req,res)=>{
//     res.render('index_twig',{
//         title:"Welcome to  Validator",
//         message:"Express JS Validator",
//     });
// });
// // always check in array with field names,err message.function
// // store validationResult in const variable and display it by using .
// app.post('/',[
//     check('username','Invalid Username - Username should be user ID').isEmail(),
//     check('password','Minimum length is 5').isLength({min:5}).trim(),
//     check('cpassword').custom((value,{req})=>{
//        if(value!=req.body.password){
//         throw new Error('Password confirmation does not match password');
//        }
//        return true;
//     }),
//     ],(req,res)=>{
//         const err=validationResult(req);
//         if (err.isEmpty()){
//             // to use the data in clean way we use matcheddata where we pass request
//             const users = matchedData(req);
//             res.render('login',{
//                 title:"User Login Details",
//                 message:"Welcome "+users.username,
//                 user:users,
//             });
//         }else{
//             res.render('index_twig',{
//                 title:"Welcome to  Validator",
//                 message:"Express JS Validator",
//                 error:err.mapped(),
//             });
//         }
// });
// // port
// app.listen(3000);