const getMongoIP = require('./mongoDiscovery.js');
const CDR_Health_Middleware = require('./CDR_Health_Middleware.js');
const CDR_Health_MongoDB = require('./CDR_Health_MongoDB.js');
const CDR_Health_Processing = require('./CDR_Health_Processing.js');
const CDR_Health_QRouter = require('./CDR_Health_QRouter.js');
const CDR_Health_Vertica = require('./CDR_Health_Vertica.js');
const CDR_Health_VM = require('./CDR_Health_VM.js');
const CDR_Health_vProbe = require('./CDR_Health_vProbe.js');
const CDR_Health_vLBAgent = require('./CDR_Health_vLBAgent.js');
const CDR_Health_vLB = require('./CDR_Health_vLB.js');
const CDR_Health_QLoader = require('./CDR_Health_QLoader.js');
const CDR_Health_Daemon = require('./CDR_Health_Daemon.js');
const mongoDb = require('mongodb').MongoClient;
const mongoUser = "root";
const mongoPassword = "2108a185c5b4969394c9cc18308c72a9";


const collections = ['CDR_Health_Middleware','CDR_Health_MongoDB','CDR_Health_Processing','CDR_Health_QRouter','CDR_Health_Vertica','CDR_Health_VM','CDR_Health_vProbe','CDR_Health_vLBAgent','CDR_Health_vLB','CDR_Health_QLoader','CDR_Health_Daemon'];


const main = async () => {
   // const mongoIP = await getMongoIP();
   const mongoIP = '127.0.0.1:27017';
    mongoIP.indexOf("undefined")> -1? MongoEvents.emit('error',`Conductor returned an invalid IP:${mongoIP}. Its seems there are no healthy secondaries in system`): true;
    const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@`+mongoIP+`/admin?authMechanism=SCRAM-SHA-1`;
    const mongoClient = await mongoDb.connect(mongoURI, { useNewUrlParser: true, poolSize: collections.length ,useUnifiedTopology: true});
    console.log("Application : " + mongoIP+'\n');
    
    const healthDB = mongoClient.db('MavriQHealthDb');
    
    const allCollections = await healthDB.collections();
    const targetColletion = allCollections.filter(collection => collections.indexOf(collection.collectionName) > -1);
    
    const generateDocs =  () => {

        collections.forEach((collection) => {
            let docs;
            switch(collection){
                case "CDR_Health_Middleware":
                     docs  = CDR_Health_Middleware.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_Middleware").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_Middleware"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_MongoDB":
                     docs  = CDR_Health_MongoDB.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_MongoDB").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_MongoDB"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_Processing":
                     docs  = CDR_Health_Processing.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_Processing").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_Processing"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_QRouter":
                     docs  = CDR_Health_QRouter.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_QRouter").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_QRouter"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_Vertica":
                     docs  = CDR_Health_Vertica.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_Vertica").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_Vertica"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true}).
                    then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_vProbe":
                     docs  = CDR_Health_vProbe.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_vProbe").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_vProbe"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_vLBAgent":
                     docs  = CDR_Health_vLBAgent.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_vLBAgent").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_vLBAgent"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_vLB":
                     docs  = CDR_Health_vLB.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_vLB").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_vLB"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_QLoader":
                     docs  = CDR_Health_QLoader.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_QLoader").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_QLoader"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                case "CDR_Health_Daemon":
                     docs  = CDR_Health_Daemon.getDocs();
                    targetColletion.find(t => t.collectionName == "CDR_Health_Daemon").insertMany(docs.Mdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_Daemon"+" Lines:" +error.insertedCount): console.log(result));
                    targetColletion.find(t => t.collectionName == "CDR_Health_VM").insertMany(docs.VMdocs,{forceServerObjectId: true})
                    .then((error,result) => error? console.log(new Date().toUTCString() + "CDR_Health_VM"+" Lines:" +error.insertedCount): console.log(result));
                break;
                

                    
            }
        })
        
        
    }
    
    setInterval(generateDocs,1000);
}

main();