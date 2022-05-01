// const express = require("express")

// const app = express()

// const PORT = 5000

//  app.use(express.static("public"))

// app.get("/",(req, res) => {
//    console.log("We Got A Request!")

    //  res.send(`
    //  <h1 style= "color: red; background-color: black;">
    //  Hello, Welcome To Express Js Tutorials!
    //  </h1>
    //  `)
//  })

//  access query parameter
//    const name = req.query.name;

//    res.send(`
//    <h1 style='color:red; background-color:black;'>
//         Hello ${name}, Welcome To Express JS Tutorial! 
//         </h1> 
//         `)
// })

// app.get("/products/:pId/:userId",(req, res) => {

// //      //access parameter
//     const productId = req.params.pId;
//     const userId = req.params.userId;

//     res.send(`
//     <h1 style='color:red; background-color:black;'>
//      Product id is : ${productId} 
//      User id is : ${userId} 
//      </h1>
//      `)
// })


//  app.get("/contact",(req, res) => {
//     //  res.sendFile("/contact.html")
//      res.sendFile(__dirname + "/contact.html")
// })

// app.post("/about",(req, res) => {
//     res.send("<h1>Welcome to About Page!</h1>")
// })

//   app.get("*",(req, res) =>{
//      res.send(`
//         <h1> ERROR 404 : NOT FOUND [INVALID PATH]</h1>
//         <a href = "/">Go TO Home!</a>
//      `)
// })






//  -----------------------------------------------------------------------------
// app.listen(PORT, () => {
//     console.log("Server Is Running On Port" + " " + PORT)
// })

// =======================================================================================

// const { name } = require("ejs")

// const express = require("express")

// const app = express()

// app.set("view-engine", "ejs")

// const PORT = 4000

// app.listen(PORT, () => {
//     console.log("Server Started!!")
// })
// =========================================[APPLICATION LEVEL MIDDLEWARE]======================================================
//  middleware to check age

// const verifyAge = (req, res, next) => {

// const age = req.query.age

// if (age > 18){
//     // allow the user to access the api
//     next()
// }else{     
//     res.send("<h1>You're Not Eligible To Visit The Website!</h1>")
    
// }
// }

// // // set middleware for entire application

// app.use(verifyAge)

// ----------------------------------------[APPLICATIN LEVEL MIDDLEWARE END]------------------------------------

// ------------------------------------------[ROUTE LEVEL MIDDLEWARE]----------------------------------------------------------
// middleware to check the age for specific route

// const verifyAge1 = (req, res, next) => {

//     const age = req.query.age
    
//     if (age > 50){
//         // allow the user to access the api
//         next()
//     }else{     
//         res.send("<h1>You're Below 50, So We Can't Allow You To See This Page!</h1>")
        
//     }
//     }
    
   
//      app.get("/route-level1", verifyAge1, (req, res) => {
//          res.send("<h1>You're Able To See This Message Because You're Above 50</h1>")
//      })

//      app.get("/route-level2", verifyAge1, (req, res) => {
//         res.send("<h1>You're Able To See This Message Because You're Above 50</h1>")
//     })
// // --------------------------------------[ROUTE LEVEL MIDDLEWARE END]---------------------------------

//     // https://addvic.com/

// app.get("/support", (req, res) => {

//     const data = {
//         "name": req.query.name
//     }
    
//     res.render("support", {data})
// })

 
// app.get("/signup", (req, res) => {

//     res.send("<h1>Welcome to Signup Page!</h1>")
// })


// app.get("/", (req, res) => {

//     // const age = req.query.age

//     // if(age > 18){
//         res.send("<h1>Welcome To Home Page!</h1>")
//     // }else{
//         // res.send("<h1>You're Not Eligible To Visit The Website!</h1>")
// // }

//    })
