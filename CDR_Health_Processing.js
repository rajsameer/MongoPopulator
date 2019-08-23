const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "ActionsInnerQueueSize" : 0,
    "CollectionType" : "CDR_Health_Processing",
    "Counters" : {
        "CDR Redirects" : {
            "Total" : {
                "Receive Rate (CDRs/sec)" : 0,
                "Sent Rate (CDRs/sec)" : 0,
                "probe_incorrect_routed_cdrs" : 17249
            }
        },
        "CdrsLocalHandling due to NoConnection" : {
            "Total" : 5462
        },
        "ReceiveMsg" : {
            "Total" : {
                "CrIPCAggResultsContainerMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 651809
                },
                "CrIPCAggsToExecuteMsg" : {
                    "Average Rate (Msg/Sec)" : 5,
                    "Counter" : 3204676289
                },
                "CrIPCCorrelatedCallEndedMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 117
                },
                "CrIPCCorrelationIdMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 0
                },
                "CrIPCEventAnalyzerMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 4614609
                },
                "CrIPCPersistentRawMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 0
                },
                "CrIPCRawMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 218761925
                },
                "CrIPCRedirectedCDRMsg" : {
                    "Average Rate (Msg/Sec)" : 1,
                    "Counter" : 2233054480
                },
                "CrIPCRefCountCDRMsg" : {
                    "Average Rate (Msg/Sec)" : 1,
                    "Counter" : 1772537085
                },
                "CrIPCResolverMsg" : {
                    "Average Rate (Msg/Sec)" : 0,
                    "Counter" : 0
                }
            }
        },
        "Resolver" : {
            "Total" : {
                "Received" : 122116412,
                "Unhandled" : 0
            }
        },
        "TimesTen_Disconnect_Alarm" : 0
    },
    "CrashCounter" : 0,
    "IPC" : {
        "ByteDrops" : {
            "Per-Interval" : 0,
            "Total" : 0
        },
        "Disconnections" : 0,
        "Latency" : 20,
        "MsgDrops" : {
            "Inter-Process" : {
                "Per-Interval" : 0,
                "Total" : 0
            },
            "Inter-Thread" : {
                "Per-Interval" : 0,
                "Total" : 0
            }
        },
        "TotalInterThreadQueueDrops" : 0,
        "TotalUnknownDestinationDrops" : 0
    },
    "IPCByteDropsPerInterval" : 0,
    "IPCDisconnections" : 0,
    "IPCInterThreadQueueDrops" : 0,
    "IPCMsgDropsInterProcessPerInterval" : 0,
    "IPCMsgDropsInterThreadPerInterval" : 0,
    "IPCUnknownDestinationDrops" : 0,
    "ImsiResolverAllProtocolsSentCdrsWithImsiPercentage" : 0,
    "KeepAlive" : 0,
    "MachineIP" : "10.25.16.57",
    "MachineName" : "zrdm6yrsrv01mbm",
    "MemoryOverflowRestartFlag" : 0,
    "NumberOfFiles" : {
        "/data/AGGCSV/GI_RC_KPI_5MIN/" : 0,
        "/data/AGGCSV/GN_KPI_5MIN/" : 0,
        "/data/AGGCSV/S11GTP_KPI_SET1_5MIN/" : 0,
        "/data/AGGCSV/S11GTP_KPI_SET1_HOURLY/" : 0,
        "/data/AGGCSV/S11GTP_KPI_SET2_5MIN/" : 0,
        "/data/AGGCSV/S11GTP_KPI_SET2_HOURLY/" : 0,
        "/data/AGGCSV/S1MME_KPI_SET1_5MIN/" : 0,
        "/data/AGGCSV/S1MME_KPI_SET1_HOURLY/" : 0,
        "/data/AGGCSV/S1MME_KPI_SET2_5MIN/" : 1,
        "/data/AGGCSV/S1MME_KPI_SET2_HOURLY/" : 0,
        "/data/AGGCSV/S1MME_KPI_SET3_5MIN/" : 0,
        "/data/AGGCSV/S1MME_KPI_SET3_HOURLY/" : 0,
        "/data/AGGCSV/S6A_KPI_SET1_5MIN/" : 0,
        "/data/AGGCSV/S6A_KPI_SET2_5MIN/" : 0,
        "/data/AGGCSV/VOIP_MEDIA_KPI_SET1_5MIN/" : 0,
        "/data/CDRCSV/WPR_AR/" : 0,
        "/data/CDRCSV/WPR_RTP/" : 0,
        "/data/CDRCSV/WPR_TCP_UDP/" : 0,
        "/data/QLoaders/" : 38,
        "/omniqdir/RESTclient_export/" : 8
    },
    "ODBC_oracle_FailedConnectionAttempts" : 0,
    "ODBC_vertica_FailedConnectionAttempts" : 0,
    "ProbeIncorrectRoutedCdrs" : 0,
    "ReceiveCdrRate" : 0,
    "ReorderInnerQueueSize" : 0,
    "SentT10CDRsDropsCounter" : 0,
    "SentT10CDRsSentRateCounter" : 0,
    "StartTime" : 1566492070124,
    "SystemTime" : "2019/08/22 16:41:10.124",
    "TotalDropToQloader" : 0,
    "UpTime" : 2318621270,
    "TimeStamp" : 1566492070426,
    "TimeStampDisplay" : "2019-08-22T16:41:10.426Z",
    "SiteName" : "RDM6a",
    "StartTimeDisplay" : "2019-08-22T16:41:10.124Z",
    "UpTimeDisplay" : "1970-01-27T20:03:41.270Z"
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
        //Mdoc.MachineType = 'randomMiddle';
        Mdoc.StartTime = new Date();
        Mdoc.TimeStamp = new Date();
        Mdoc.StartTimeDisplay = Mdoc.StartTime.toUTCString();
        Mdoc.TimeStampDisplay = Mdoc.TimeStamp.toUTCString();
        docs.push(Mdoc);

        VMdoc.MachineIP = 'IP'+i;
        VMdoc.MachineName = Mdoc.MachineName + i;
        VMdoc.MachineType = 'randomProcessing';
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