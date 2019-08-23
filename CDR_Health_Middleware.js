const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "CollectionType" : "CDR_Health_Middleware",
    "UndeployedFiles" : {
        "TOTAL" : 0
    },
    "MachineType" : "analyst",
    "NumOfOpenFiles" : 10,
    "clusterName" : "Analyst",
    "MachineName" : "zrdm6yrsrv01ana",
    "NumOfActiveThreads" : 3,
    "MemoryConsumption" : 13,
    "WildflyIsAlive" : 1,
    "WildflyAppsAvailability" : {
        "MaveriQManager" : {
            "IsAlive" : 1,
            "isDeployed" : 0
        }
    },
    "StartTime" : 1566491881595,
    "CPUConsumption" : 11,
    "NumOfOpenNetConnections" : 150,
    "DeployedFiles" : {
        "TOTAL" : 1
    },
    "MachineIP" : "10.25.16.23",
    "TimeStamp" : 1566491882970,
    "TimeStampDisplay" : "2019-08-22T16:38:02.970Z",
    "SiteName" : "RDM6a",
    "StartTimeDisplay" : "2019-08-22T16:38:01.595Z"
}
const unique = 20
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object(document);
        const VMdoc = new Object(CDR_Health_VM);
        Mdoc.MachineIP = 'IP'+i;
        Mdoc.MachineName = Mdoc.MachineName + i;
        Mdoc.MachineType = 'randomMiddle';
        Mdoc.StartTime = new Date();
        Mdoc.TimeStamp = new Date();
        Mdoc.StartTimeDisplay = Mdoc.StartTime.toUTCString();
        Mdoc.TimeStampDisplay = Mdoc.TimeStamp.toUTCString();
        docs.push(Mdoc);

        VMdoc.MachineIP = 'IP'+i;
        VMdoc.MachineName = Mdoc.MachineName + i;
        VMdoc.MachineType = 'randomMiddle';
        VMdoc.StartTime = new Date();
        VMdoc.TimeStamp = new Date();
        VMdoc.StartTimeDisplay = VMdoc.StartTime.toUTCString();
        VMdoc.TimeStampDisplay = VMdoc.TimeStamp.toUTCString();
        VMdocs.push(VMdoc);
    }
    return {
        "Mdocs": [...docs],
        "VMdocs": [...VMdocs]
    }
}
