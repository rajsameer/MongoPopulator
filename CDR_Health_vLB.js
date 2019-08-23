const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "AverageCpuUsage" : 77,
    "CaptureDropsPps" : 0,
    "CollectionType" : "CDR_Health_vLB",
    "ConnectivityDropsPps" : 0,
    "CorrelatedGtpcFrameRate" : 0.0,
    "DiskUsed" : 41086976,
    "FailedToSendXDRsPerSecond" : 0.0,
    "Immediate" : false,
    "LBRingUtilization" : 0,
    "LastProcessUpTime" : 1566320160515,
    "MachineIp" : "10.70.0.41",
    "MachineName" : "zdpa2arvlbsb01dia",
    "MemoryUsage" : 16,
    "PacketPoolUtilization" : 0,
    "ProbeID" : "1072",
    "ProcessRestart" : 0,
    "ProcessingRingUtilization" : 0,
    "RxPacketCountPerProtocol" : {
        "ARP" : 56,
        "DIAMETER" : 0,
        "MEGACO" : 0,
        "SCTP_WITHOUT_L5-L7" : 0,
        "SIP" : 0,
        "UNDEFINED" : 0
    },
    "RxXDRsPerSecond" : 0.0,
    "SignalingCurrentDaysRetention" : 0.0,
    "SiteName" : "DPA2A",
    "StartTime" : 1566492360097,
    "SwRestart" : 0,
    "TotalFailedTxPps" : 0,
    "TotalRxBps" : 0,
    "TotalRxPps" : 0,
    "TotalTxBps" : 0,
    "TotalTxPps" : 0,
    "TxPacketCountPerProtocol" : {
        "ARP" : 0,
        "DIAMETER" : 0,
        "MEGACO" : 0,
        "SCTP_WITHOUT_L5-L7" : 0,
        "SIP" : 0,
        "UNDEFINED" : 0
    },
    "TxRingUtilization" : 0,
    "TxXDRsPerSecond" : 0.0,
    "UpTime" : 1566320115540,
    "UserPlaneCurrentDaysRetention" : 0.0,
    "WhiteListCurrentDaysRetention" : 0.0,
    "internalvNIC1Connectivity" : 1,
    "internalvNIC1TotalRxBps" : 0,
    "internalvNIC1TotalRxPps" : 0,
    "internalvNIC1TotalTxBps" : 0,
    "internalvNIC1TotalTxPps" : 0,
    "TimeStamp" : 1566492360865,
    "TimeStampDisplay" : "2019-08-22T16:46:00.865Z",
    "StartTimeDisplay" : "2019-08-22T16:46:00.097Z",
    "UpTimeDisplay" : "2019-08-20T16:55:15.540Z"
}
const unique = 1000
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object(document);
        const VMdoc = new Object(CDR_Health_VM);
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
        VMdoc.MachineType = 'randomVlb';
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