var MongoClient = require("mongodb").MongoClient;
var url =  'mongodb://localhost:27017/' + process.argv[2];
MongoClient.connect(url,function(error,db){
      if(error)throw error
      
      var collection = db.collection(process.argv[3]);
      collection.remove({
          _id: process.argv[4]
           },function(error){
                            if(error) throw error
                            db.close()
                        })
})