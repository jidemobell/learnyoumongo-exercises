var MongoClient = require("mongodb").MongoClient;
var url =  'mongodb://localhost:27017/learnyoumongo'; 
MongoClient.connect(url,function(error,db){
      if(error)throw error
      
      var collection = db.collection('parrots');
      collection.count({
          age: {$gt:+process.argv[2]}
           },function(error,value){
                            if(error) throw error
                            console.log(value);
                            db.close()
                        })
})