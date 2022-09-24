const mongoose = require('mongoose')

// export async function connectToDB() {
//     const opts = {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     };

//     return mongoose.connect (
//         "mongodb://localhost:27017/Todo-App",
//         opts
//     );
// }

function onConnect() {
    console.log('Connected to database!')
}

mongoose.connect("mongodb://localhost:27017/Todo-App", onConnect)