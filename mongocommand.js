// mongod -version --> To check version 
//mongodb compas is a gui tool , jiski help se we use mongodb
//IN MONGODB DATA IS STORED IN COLLECTION
//DATA IS STORED IN FORM OF OBJECTS

//COMMANDS ON MONGOSH 

//1- show dbs -         to check databases
//2- db -               current database
//3- use databasename-  to go on any database
//4- db.createCollection('abc') - to create collection
//5- show collections
//6- db.collectionname.drop()  - to delete collection
//7- db.dropDatabase()  - to delete current database


//crud operation in mongodb
// - write on mongosh
// use databasename ex- use shop  and collection name is product
// db.product.insertOne({name:"fruit",brand:"mango",weight:10})  --to insert

//db.product.find()   --to read

//db.product.updateOne({name:"fruit"},{$set:{brand:"apple"}})    --to update

//db.product.deleteOne({brand:"apple"})                          --to delete

//2nd way is by using add data > insert document

