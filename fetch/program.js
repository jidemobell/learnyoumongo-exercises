var mongodb = require("mongodb");
var url = 'mongodb://localhost:27017/learnyoumongo';
var mongo = mongodb.MongoClient;
mongo.connect(url,(error,db)=>{
    if(error) console.error;
    var parrots = db.collection('parrots')
    var age = parseInt(process.argv[2])
    parrots.find({
        age:{$gt:+age}
        
    },{ name: 1
    , age: 1, _id: 0}).toArray(function(error,document){
                 if(error) console.error;
                 console.log(document);
                 db.close();
             
    })
   // db.close();
   
})