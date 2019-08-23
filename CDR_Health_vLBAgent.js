const CDR_Health_VM = require('./CDR_Health_VM.js').document;
module.exports.document = {
    "AverageCpuUsage" : 65,
    "CaptureDropsPps" : 0,
    "CollectionType" : "CDR_Health_vLBAgent",
    "ConnectivityDropsPps" : 0,
    "DiskUsed" : 73715712,
    "HistoricalPcapCurrentDaysRetention" : 0,
    "HistoricalPcapFailedToSaveBps" : 0,
    "HistoricalPcapSavedBps" : 0,
    "HistoricalWriterDroppedPackets" : 0,
    "HistoricalWriterThreadBufferUtilization" : 0,
    "HistoricalWriterThreadDroppedPackets" : 0,
    "Immediate" : false,
    "LBRingUtilization" : 0,
    "LastProcessUpTime" : 1563496200948,
    "MachineIp" : "10.25.252.13",
    "MachineName" : "zrdm52crlba01utp",
    "MemoryUsage" : 7,
    "PacketPoolUtilization" : 4,
    "ProbeID" : "1306",
    "ProcessRestart" : 0,
    "ProcessingRingUtilization" : 0,
    "QAHistoricalFailedTracesInTheLastMin" : 0,
    "QAHistoricalTraceBitsPassedCapturePerSec" : 0,
    "QAHistoricalTraceBitsPassedFilterPerSec" : 0,
    "QAHistoricalTraceFilterRingUtilization" : 0,
    "QAHistoricalTracePacketPassedCapturePerSec" : 0,
    "QAHistoricalTracePacketPassedFilterPerSec" : 0,
    "QAHistoricalTracesInTheLastMin" : 0,
    "QAOnlineDroppedPacketOnlineRingFull" : 0,
    "QAOnlineFailedTracesInTheLastMin" : 0,
    "QAOnlineInputBitsPerSecond" : 0,
    "QAOnlineInputPacketsPerSecond" : 0,
    "QAOnlineTraceBitsPassedFilterPerSec" : 0,
    "QAOnlineTraceFilterRingUtilization" : 0,
    "QAOnlineTracePacketPassedFilterPerSec" : 0,
    "QAOnlineTracesInTheLastMin" : 0,
    "QATSharkTraceFilterRingUtilization" : 0,
    "QATotalPacketsDroppedPublisherFull" : 0,
    "RxPacketCountPerProtocol" : {
        "DIAMETER" : 0,
        "GI/SGI" : 0,
        "GTP-C" : 0,
        "GTP-U" : 0,
        "GTP_PRIME" : 0,
        "LCSAP" : 0,
        "LDAP" : 0,
        "PFCP" : 0,
        "SBCAP" : 0,
        "UNDEFINED" : 0
    },
    "SignalingCurrentDaysRetention" : 0,
    "SiteName" : null,
    "StartTime" : 1566492300030,
    "SwRestart" : 0,
    "TotalFailedTxPps" : 0,
    "TotalRxBps" : 14136,
    "TotalRxPps" : 25,
    "TotalTxBps" : 1062,
    "TotalTxPps" : 2,
    "TxPacketCountPerProtocol" : {
        "DIAMETER" : 0,
        "GI/SGI" : 0,
        "GTP-C" : 0,
        "GTP-U" : 0,
        "GTP_PRIME" : 0,
        "LCSAP" : 0,
        "LDAP" : 0,
        "PFCP" : 0,
        "SBCAP" : 0,
        "UNDEFINED" : 0
    },
    "TxRingUtilization" : 0,
    "UpTime" : 1563496167074,
    "UserPlaneCurrentDaysRetention" : 0,
    "internalvNIC1Connectivity" : 2,
    "internalvNIC1TotalRxBps" : 14136,
    "internalvNIC1TotalRxPps" : 25,
    "internalvNIC1TotalTxBps" : 1062,
    "internalvNIC1TotalTxPps" : 2,
    "internalvNIC2Connectivity" : 1,
    "internalvNIC2TotalRxBps" : 0,
    "internalvNIC2TotalRxPps" : 0,
    "internalvNIC2TotalTxBps" : 0,
    "internalvNIC2TotalTxPps" : 0,
    "mirrorvNIC1Connectivity" : 1,
    "mirrorvNIC1TotalRxBps" : 0,
    "mirrorvNIC1TotalRxPps" : 0,
    "mirrorvNIC1TotalTxBps" : 0,
    "mirrorvNIC1TotalTxPps" : 0,
    "mirrorvNIC2Connectivity" : 1,
    "mirrorvNIC2TotalRxBps" : 0,
    "mirrorvNIC2TotalRxPps" : 0,
    "mirrorvNIC2TotalTxBps" : 0,
    "mirrorvNIC2TotalTxPps" : 0,
    "TimeStamp" : 1566492300119,
    "TimeStampDisplay" : "2019-08-22T16:45:00.119Z",
    "StartTimeDisplay" : "2019-08-22T16:45:00.030Z",
    "UpTimeDisplay" : "2019-07-19T00:29:27.074Z"
}
const unique = 20
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object(document);
        const VMdoc = new Object(CDR_Health_VM);
        Mdoc.MachineIp = 'IP'+i;
        Mdoc.MachineName = Mdoc.MachineName + i;
        //Mdoc.MachineType = 'randomMiddle';
        Mdoc.StartTime = new Date();
        Mdoc.TimeStamp = new Date();
        Mdoc.StartTimeDisplay = Mdoc.StartTime.toUTCString();
        Mdoc.TimeStampDisplay = Mdoc.TimeStamp.toUTCString();
        docs.push(Mdoc);

        VMdoc.MachineIP = 'IP'+i;
        VMdoc.MachineName = Mdoc.MachineName + i;
        VMdoc.MachineType = 'randomVLBA';
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