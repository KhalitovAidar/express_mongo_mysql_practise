var mongoose = require('mongoose');

var mongoDB = 'mongodb://127.0.0.1:27017';
mongoose.connect(mongoDB);

mongoose.Promise = global.Promise;
const db = mongoose.connection;

const userSchema = mongoose.Schema({

    _id: mongoose.Schema.Types.ObjectId,
    firstname: String,
    lastname: String,
    authorized: Boolean

})

const User = mongoose.model('User', userSchema);


// const userOleg = new User({

//         _id: new mongoose.Types.ObjectId(),
//         firstname: 'Oleg',
//         lastname: 'Olegovich',
//         authorized: true
//     }
// );

// const userAndrey = new User({

//     _id: new mongoose.Types.ObjectId(),
//     firstname: 'Andrey',
//     lastname: 'Andreevich',
//     authorized: true
// }
// );

// userOleg.save();
// userAndrey.save();

// User.find({firstname: 'Andrey'},function (err, res) {
//     const users = res;
//     console.log(users + 'there was Andrees')
// });

// User.updateMany({firstname: 'Andrey'}, {firstname: 'Roma'}, function(err, res){})

User.find({}, function (err, res){
    console.log(res + 'this all users')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'));