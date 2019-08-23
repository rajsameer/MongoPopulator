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
const Middleware = 20;
const MongoDB = 7;
const Processing = 200;
const QRouter = 100;
const Vertica = 400;
const vProbe = 2000;
const vLBAgent = 1000;
const vLB = 1000;
const QLoader = 100;
const Daemon = 100;

const collections = ['CDR_Health_Middleware','CDR_Health_MongoDB','CDR_Health_Processing','CDR_Health_QRouter','CDR_Health_Vertica','CDR_Health_VM','CDR_Health_vProbe','CDR_Health_vLBAgent','CDR_Health_vLB','CDR_Health_QLoader','CDR_Health_Daemon'];


const main = async () => {
    const mongoIP = await getMongoIP();
    mongoIP.indexOf("undefined")> -1? MongoEvents.emit('error',`Conductor returned an invalid IP:${mongoIP}. Its seems there are no healthy secondaries in system`): true;
    const mongoURI = `mongodb://${mongoUser}:${mongoPassword}@`+mongoIP+`/admin?authMechanism=SCRAM-SHA-1`;
    const mongoClient = await mongoDb.connect(mongoURI, { useNewUrlParser: true, poolSize: config.collections.length });
    process.stdout.write("Application : " + mongoIP+'\n');
    
    const healthDB = mongoClient.db('MavriQHealthDb');
    
    const allCollections = await healthDB.collections();
    const targetColletion = allCollections.filter(collection => collections.indexOf(collection.collectionName) > -1);
    
    const generateDocs = async (collectionName,numberofUniqueInserts,collectionObject) => {
        targetColletion
        debugger;
    }
    
    setInterval(generateDocs,1000*60);
}

main();