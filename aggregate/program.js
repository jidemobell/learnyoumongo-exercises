var MongoClient = require("mongodb").MongoClient;
var url =  'mongodb://localhost:27017/learnyoumongo'; 
MongoClient.connect(url,function(error,db){
      if(error)throw error
      
      var collection = db.collection('prices');
      collection.aggregate([
          {$match:{size: process.argv[2]}},
          {$group : {_id :'total',
              total: {
                  $avg:'$price'
              }
          } }
          ]).toArray(function(error,results){
                            if(error) throw error
                            console.log(results[0].total.toFixed(2));
                            db.close()
                        })
})