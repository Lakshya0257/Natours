// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://lakshyabhati24:ME4EBRKgR54kkF8q@cluster0.hzxzmm6.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
const mongoose=require("mongoose");
const tourModel=require('./database/model/tour_model');


exports.databaseConnection=()=>{
  const DB=process.env.DATABASE.replace('<password>',process.env.PASSWORD);
  mongoose.connect(DB,{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
}).then(()=>{
  console.log('Connection Established');
});





const testTour=new tourModel.NewTour({
  name:'Australia',
  rating:5.0,
  price:497
});



testTour.save().then(doc=>{
  console.log(doc);
}).catch(err=>{
  console.log(err);
})

};


