const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "CollectionType" : "CDR_Health_MongoDB",
    "StorageDiskUsage" : 53.46,
    "MachineName" : "zrdm6yrsrv01shd",
    "OpenConnections" : 67,
    "UpTime" : 803933,
    "State" : "SECONDARY",
    "StartTime" : 1566492002012,
    "OpenConnectionsByOrigin" : [ 
        {
            "interface" : "10.20.4.18",
            "origins" : [ 
                {
                    "origin" : "10.20.4.44",
                    "connections" : 4
                }, 
                {
                    "origin" : "10.20.4.18",
                    "connections" : 2
                }, 
                {
                    "origin" : "10.20.4.19",
                    "connections" : 3
                }, 
                {
                    "origin" : "10.20.4.41",
                    "connections" : 23
                }, 
                {
                    "origin" : "10.20.4.22",
                    "connections" : 2
                }, 
                {
                    "origin" : "10.20.4.82",
                    "connections" : 1
                }, 
                {
                    "origin" : "10.20.4.46",
                    "connections" : 5
                }, 
                {
                    "origin" : "10.20.4.17",
                    "connections" : 7
                }, 
                {
                    "origin" : "10.20.4.83",
                    "connections" : 2
                }, 
                {
                    "origin" : "10.20.4.20",
                    "connections" : 15
                }, 
                {
                    "origin" : "10.20.4.86",
                    "connections" : 1
                }
            ]
        }, 
        {
            "interface" : "10.25.16.18",
            "origins" : [ 
                {
                    "origin" : "10.25.16.40",
                    "connections" : 2
                }
            ]
        }
    ],
    "MongodIsAlive" : 0,
    "LogSizeKB" : 7265,
    "MachineIP" : "10.25.16.18",
    "StorageSizeKB" : 10919832,
    "TimeStamp" : 1566492006002,
    "TimeStampDisplay" : "2019-08-22T16:40:06.002Z",
    "SiteName" : "RDM6a",
    "StartTimeDisplay" : "2019-08-22T16:40:02.012Z",
    "UpTimeDisplay" : "1970-01-01T00:13:23.933Z"
}

const unique = 7
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object(document);
        const VMdoc = new Object(CDR_Health_VM);
        Mdoc.MachineIP = 'IP'+i;
        Mdoc.MachineName = Mdoc.MachineName + i;
        //Mdoc.MachineType = 'randomMiddle';
        Mdoc.StartTime = new Date();
        Mdoc.TimeStamp = new Date();
        Mdoc.StartTimeDisplay = Mdoc.StartTime.toUTCString();
        Mdoc.TimeStampDisplay = Mdoc.TimeStamp.toUTCString();
        docs.push(Mdoc);

        VMdoc.MachineIP = 'IP'+i;
        VMdoc.MachineName = Mdoc.MachineName + i;
        VMdoc.MachineType = 'randomMongo';
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