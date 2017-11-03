var MongoClient = require("mongodb").MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var doc = {
        firstname:process.argv[2],
        lastname : process.argv[3]
         }


 MongoClient.connect(url,(error,db)=>{
    if(error) console.error;
    var myCollection = db.collection('docs')
   
    myCollection.insert(doc,function(error,data){
                 if(error) throw error;
               var   myData = JSON.stringify(data)
                 console.log(myData);
                 db.close();
             
    })
   // db.close();
   
})