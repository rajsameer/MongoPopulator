const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "CollectionType" : "CDR_Health_Vertica",
    "StartTime" : 1566492061000,
    "MachineIp" : "10.25.16.35",
    "MachineName" : "zrdm6yrsrv01vdb",
    "Immediate" : false,
    "UpTime" : 1271809823,
    "DataUsagePct" : 11,
    "CatalogUsagePct" : 11,
    "DataI_NodesUsagePct" : 1,
    "CatalogI_NodesUsagePct" : 1,
    "QLoader_UsagePct" : 1,
    "QLoader_FilesNum" : 18,
    "SpreadProcess" : 0,
    "VerticaProcess" : 0,
    "VerticaErrors" : 0,
    "DownNodesNum" : 0,
    "SessionsUsagePct" : 0,
    "LicenseCompliance" : 0,
    "TablePartitionsNum" : 0,
    "ROSContainersNum" : 0,
    "RecoveringNodesNum" : 0,
    "BlockedSessionsNum" : 0,
    "QueuedSessionsNum" : 0,
    "LongRunningQueriesNum" : 0,
    "MergeOutErrNum" : 0,
    "PlanErrNum" : 0,
    "CopyErrNum" : 0,
    "ResourceErrNum" : 0,
    "TMErrNum" : 0,
    "RPSIncoming" : 0,
    "RPSPerform" : 0,
    "ProcessedRows" : 0,
    "TimeStamp" : 1566492082216,
    "TimeStampDisplay" : "2019-08-22T16:41:22.216Z",
    "SiteName" : "RDM6a",
    "StartTimeDisplay" : "2019-08-22T16:41:01.000Z",
    "UpTimeDisplay" : "1970-01-15T17:16:49.823Z"
}

const unique = 500
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object({},document);
        const VMdoc = new Object({},CDR_Health_VM);
        Mdoc.MachineIP = 'IP'+i;
        Mdoc.MachineName = Mdoc.MachineName + i;
       // Mdoc.MachineType = 'randomMiddle';
        Mdoc.StartTime = new Date();
        Mdoc.TimeStamp = new Date();
        Mdoc.StartTimeDisplay = Mdoc.StartTime.toUTCString();
        Mdoc.TimeStampDisplay = Mdoc.TimeStamp.toUTCString();
        docs.push(Mdoc);

        VMdoc.MachineIP = 'IP'+i;
        VMdoc.MachineName = Mdoc.MachineName + i;
        VMdoc.MachineType = 'randomVertica';
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