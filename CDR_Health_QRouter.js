const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "UpTime" : 1970105965,
    "CollectionType" : "CDR_Health_QRouter",
    "StartTime" : 1566492075787,
    "AvgCpuPerCpu" : [ 
        0.0, 
        2.0, 
        0.0, 
        2.0, 
        8.0, 
        0.0, 
        0.0, 
        10.0
    ],
    "AvgCpuTotal" : 0.0,
    "BootTimeDateTime" : "2019-04-17 22:45:31",
    "BootTimeEpoch" : 1555541131,
    "CPUCount" : 8,
    "DiskIOCountersPerDisk" : {
        "dm-0" : [ 
            10729, 
            3521863, 
            131671040, 
            14425550848, 
            20494, 
            35637113, 
            0, 
            0, 
            1075234
        ],
        "dm-1" : [ 
            684, 
            0, 
            2801664, 
            0, 
            412, 
            0, 
            0, 
            0, 
            412
        ],
        "dm-2" : [ 
            5107, 
            7393273, 
            62202880, 
            30282846208, 
            4886, 
            13152980, 
            0, 
            0, 
            1382451
        ],
        "dm-3" : [ 
            599, 
            1438, 
            2450432, 
            5890048, 
            172, 
            2058, 
            0, 
            0, 
            734
        ],
        "dm-4" : [ 
            622, 
            14655095, 
            2544640, 
            60027269120, 
            433, 
            19775298, 
            0, 
            0, 
            1950061
        ],
        "dm-5" : [ 
            679, 
            10059500, 
            5043200, 
            41203712000, 
            825, 
            3571921, 
            0, 
            0, 
            1838119
        ],
        "vda1" : [ 
            590, 
            152, 
            2239488, 
            403456, 
            514, 
            283, 
            37, 
            236, 
            797
        ],
        "vda2" : [ 
            16679, 
            19028071, 
            210768896, 
            145945268224, 
            19188, 
            10162179, 
            2455, 
            16602978, 
            6118521
        ],
        "vdb" : [ 
            1762, 
            171664, 
            7259136, 
            1224343552, 
            145, 
            342700, 
            11, 
            127247, 
            126799
        ],
        "vdc" : [ 
            1697, 
            855, 
            6992896, 
            221351936, 
            130, 
            118236, 
            11, 
            53186, 
            1450
        ]
    },
    "LoadAverage" : [ 
        0.07, 
        0.15, 
        0.1
    ],
    "MachineIP" : "10.70.2.4",
    "MachineName" : "zdpa2brsrvim01ims",
    "NICIOCounters" : {
        "eth0" : [ 
            1944333004, 
            1150975925, 
            5919837, 
            5294775, 
            0, 
            0, 
            0, 
            0
        ],
        "eth1" : [ 
            37187617682, 
            37102916564, 
            597579384, 
            597521193, 
            0, 
            0, 
            0, 
            0
        ],
        "lo" : [ 
            126616, 
            126616, 
            645, 
            645, 
            0, 
            0, 
            0, 
            0
        ]
    },
    "NICNumberOfINetConnections" : 96,
    "PartitionsDiskInodeUsagePercent" : [ 
        {
            "inodes_percent" : 9.05459001782531,
            "mount_point" : "/"
        }, 
        {
            "inodes_percent" : 0.09765625,
            "mount_point" : "/boot"
        }, 
        {
            "inodes_percent" : 0.0171875,
            "mount_point" : "/home"
        }, 
        {
            "inodes_percent" : 0.019073486328125,
            "mount_point" : "/tmp"
        }, 
        {
            "inodes_percent" : 0.448125,
            "mount_point" : "/var"
        }, 
        {
            "inodes_percent" : 0.116145833333333,
            "mount_point" : "/var/log"
        }, 
        {
            "inodes_percent" : 0.00396728515625,
            "mount_point" : "/config"
        }, 
        {
            "inodes_percent" : 0.01373291015625,
            "mount_point" : "/log"
        }
    ],
    "PartitionsDiskUsagePercent" : {
        "/" : 23.7,
        "/boot" : 39.4,
        "/config" : 0.2,
        "/home" : 0.2,
        "/log" : 0.4,
        "/mnt/config" : 100.0,
        "/tmp" : 0.2,
        "/var" : 16.5,
        "/var/log" : 4.3
    },
    "RAMAvailable" : 30560509952,
    "RAMCacheUsageBytes" : 1589440512,
    "RAMUsageBytes" : 3246116864,
    "SwapUsageBytes" : 1287647232,
    "Top10CPUUsagePerProcess" : [ 
        {
            "cpu_percent" : 0.0,
            "name" : "init",
            "pid" : 1
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "kthreadd",
            "pid" : 2
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "migration/0",
            "pid" : 3
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "ksoftirqd/0",
            "pid" : 4
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "stopper/0",
            "pid" : 5
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "watchdog/0",
            "pid" : 6
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "migration/1",
            "pid" : 7
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "stopper/1",
            "pid" : 8
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "ksoftirqd/1",
            "pid" : 9
        }, 
        {
            "cpu_percent" : 0.0,
            "name" : "watchdog/1",
            "pid" : 10
        }
    ],
    "Top10ProcessOpenFilesDesc" : [ 
        {
            "name" : "java",
            "open_files" : 67,
            "pid" : 28681
        }, 
        {
            "name" : "rsyslogd",
            "open_files" : 4,
            "pid" : 2280
        }, 
        {
            "name" : "health_vm.py",
            "open_files" : 3,
            "pid" : 20353
        }, 
        {
            "name" : "health_vm.py",
            "open_files" : 3,
            "pid" : 21125
        }, 
        {
            "name" : "python2.7",
            "open_files" : 3,
            "pid" : 29257
        }, 
        {
            "name" : "udevd",
            "open_files" : 1,
            "pid" : 618
        }, 
        {
            "name" : "dhclient",
            "open_files" : 1,
            "pid" : 1939
        }, 
        {
            "name" : "dhclient",
            "open_files" : 1,
            "pid" : 2107
        }, 
        {
            "name" : "acpid",
            "open_files" : 1,
            "pid" : 2316
        }, 
        {
            "name" : "crond",
            "open_files" : 1,
            "pid" : 2818
        }
    ],
    "Top10ProcessOpenNetConnectionsDesc" : [ 
        {
            "connections" : 83,
            "name" : "java",
            "pid" : 28681
        }, 
        {
            "connections" : 8,
            "name" : "ntpd",
            "pid" : 7519
        }, 
        {
            "connections" : 2,
            "name" : "sshd",
            "pid" : 2501
        }, 
        {
            "connections" : 1,
            "name" : "dhclient",
            "pid" : 1939
        }, 
        {
            "connections" : 1,
            "name" : "dhclient",
            "pid" : 2107
        }
    ],
    "Top10RAMUsagePerProcess" : [ 
        {
            "memory_percent" : 1.50986766818871,
            "name" : "java",
            "pid" : 28681
        }, 
        {
            "memory_percent" : 0.0890402469428081,
            "name" : "filebeat",
            "pid" : 29465
        }, 
        {
            "memory_percent" : 0.0442232822617022,
            "name" : "python2.7",
            "pid" : 29257
        }, 
        {
            "memory_percent" : 0.0434357443584117,
            "name" : "health_vm.py",
            "pid" : 20353
        }, 
        {
            "memory_percent" : 0.0430843812938666,
            "name" : "health_vm.py",
            "pid" : 21125
        }, 
        {
            "memory_percent" : 0.0346274358093,
            "name" : "health_stats_vm",
            "pid" : 21129
        }, 
        {
            "memory_percent" : 0.0321557783897418,
            "name" : "health_stats.py",
            "pid" : 21266
        }, 
        {
            "memory_percent" : 0.025516228066615,
            "name" : "health_stats_vm",
            "pid" : 21130
        }, 
        {
            "memory_percent" : 0.0180649079047118,
            "name" : "rsyslogd",
            "pid" : 2280
        }, 
        {
            "memory_percent" : 0.0109286029041248,
            "name" : "haveged",
            "pid" : 8099
        }
    ],
    "TopCpuProcess" : 60.4,
    "TopProcessOpenFilesDesc" : {
        "name" : "java",
        "open_files" : 67,
        "pid" : 28681
    },
    "TopProcessOpenNetConnectionsDesc" : "java",
    "TotalNICDrops" : 0,
    "TotalNICErrors" : 0,
    "TotalRAMBytes" : 33806626816,
    "TotalRAMUsagePercent" : 3.2,
    "TotalSwapUsagePercent" : 0.0,
    "RxDisconnectionCounter" : 0.0,
    "TxDropsCounterGeneralCDR" : 0.0,
    "TxDisconnectionCounter" : 0.0,
    "ReceivedCdrsSec" : 0.416666666666667,
    "FallbackState" : 0.0,
    "RxDropsCounterGeneralCDR" : 0.0,
    "TxBytesBufferDrop" : 0.0,
    "PrimaryClusterUnavailability" : 0.0,
    "TimeStamp" : 1566492075941,
    "TimeStampDisplay" : "2019-08-22T16:41:15.941Z",
    "SiteName" : "DPA2b",
    "StartTimeDisplay" : "2019-08-22T16:41:15.787Z",
    "UpTimeDisplay" : "1970-01-23T19:15:05.965Z"
}

const unique = 100
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
        VMdoc.MachineType = 'randomQRouter';
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