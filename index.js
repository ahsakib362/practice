const app = require("./app");

// require to add this two line to call anything from config.env.
const dotenv = require('dotenv')
dotenv.config({ path:'./config.env'})

// app.listen(8000,function(){
//     console.log("Server Run Successfully")
// });
 
// example of using environment variable
app.listen(process.env.RUNNING_PORT,function(){
    console.log("Server Run Successfully for environment variable");
});
