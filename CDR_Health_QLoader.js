const CDR_Health_VM = require('./CDR_Health_VM.js').document;
const document = {
    "UpTime" : 1270461665,
    "CollectionType" : "CDR_Health_QLoader",
    "StartTime" : 1566492405865,
    "AvgCpuPerCpu" : [ 
        0.0, 
        2.0, 
        0.0, 
        0.0, 
        2.0, 
        0.0, 
        0.0, 
        0.0
    ],
    "AvgCpuTotal" : 0.5,
    "BootTimeDateTime" : "2019-07-16 09:21:34",
    "BootTimeEpoch" : 1563268894,
    "CPUCount" : 8,
    "DiskIOCountersPerDisk" : {
        "dm-0" : [ 
            11897, 
            1277794, 
            154121216, 
            5233844224, 
            23013, 
            2382092, 
            0, 
            0, 
            388807
        ],
        "dm-1" : [ 
            456, 
            0, 
            1867776, 
            0, 
            137, 
            0, 
            0, 
            0, 
            106
        ],
        "dm-2" : [ 
            8808, 
            4846239, 
            98059264, 
            19850194944, 
            7358, 
            4373443, 
            0, 
            0, 
            529868
        ],
        "dm-3" : [ 
            378, 
            1728, 
            1545216, 
            7077888, 
            285, 
            12797, 
            0, 
            0, 
            828
        ],
        "dm-4" : [ 
            504, 
            1298984, 
            2061312, 
            5320638464, 
            166, 
            1167683, 
            0, 
            0, 
            427014
        ],
        "dm-5" : [ 
            1065, 
            7595637, 
            74257408, 
            31111729152, 
            2325, 
            8583531, 
            0, 
            0, 
            1327414
        ],
        "vda1" : [ 
            552, 
            64, 
            2161664, 
            149504, 
            190, 
            128, 
            37, 
            76, 
            305
        ],
        "vda2" : [ 
            20309, 
            7283379, 
            333788160, 
            61523484672, 
            20681, 
            4221816, 
            3073, 
            7736861, 
            2645475
        ],
        "vdb" : [ 
            331, 
            1462820, 
            1414144, 
            20725645312, 
            79, 
            2355786, 
            15, 
            3597147, 
            1437420
        ],
        "vdc" : [ 
            302, 
            53, 
            1278976, 
            286720, 
            47, 
            107, 
            11, 
            17, 
            154
        ]
    },
    "LoadAverage" : [ 
        0.14, 
        0.1, 
        0.09
    ],
    "MachineIP" : "10.25.16.48",
    "MachineName" : "zrdm6yrsrv01ldr",
    "NICIOCounters" : {
        "eth0" : [ 
            21094536172, 
            20719213828, 
            127191373, 
            121165627, 
            0, 
            0, 
            0, 
            0
        ],
        "eth1" : [ 
            8714093593, 
            8798577711, 
            60552741, 
            90093388, 
            0, 
            0, 
            0, 
            0
        ],
        "lo" : [ 
            4136790269, 
            4136790269, 
            12295025, 
            12295025, 
            0, 
            0, 
            0, 
            0
        ]
    },
    "NICNumberOfINetConnections" : 53,
    "PartitionsDiskInodeUsagePercent" : [ 
        {
            "inodes_percent" : 10.0577094474153,
            "mount_point" : "/"
        }, 
        {
            "inodes_percent" : 0.099609375,
            "mount_point" : "/boot"
        }, 
        {
            "inodes_percent" : 0.021875,
            "mount_point" : "/home"
        }, 
        {
            "inodes_percent" : 0.1312255859375,
            "mount_point" : "/tmp"
        }, 
        {
            "inodes_percent" : 1.1246875,
            "mount_point" : "/var"
        }, 
        {
            "inodes_percent" : 0.1375,
            "mount_point" : "/var/log"
        }, 
        {
            "inodes_percent" : 0.02044677734375,
            "mount_point" : "/log"
        }, 
        {
            "inodes_percent" : 0.00335693359375,
            "mount_point" : "/conf"
        }
    ],
    "PartitionsDiskUsagePercent" : {
        "/" : 26.2,
        "/boot" : 39.4,
        "/conf" : 0.2,
        "/home" : 0.4,
        "/log" : 1.8,
        "/tmp" : 0.7,
        "/var" : 29.9,
        "/var/log" : 7.2
    },
    "RAMAvailable" : 29861212160,
    "RAMCacheUsageBytes" : 1278431232,
    "RAMUsageBytes" : 3945095168,
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
            "open_files" : 70,
            "pid" : 9324
        }, 
        {
            "name" : "rsyslogd",
            "open_files" : 5,
            "pid" : 1657
        }, 
        {
            "name" : "java",
            "open_files" : 5,
            "pid" : 16986
        }, 
        {
            "name" : "health_vm.py",
            "open_files" : 3,
            "pid" : 19208
        }, 
        {
            "name" : "corosync",
            "open_files" : 2,
            "pid" : 1755
        }, 
        {
            "name" : "hald",
            "open_files" : 2,
            "pid" : 1803
        }, 
        {
            "name" : "filebeat",
            "open_files" : 2,
            "pid" : 10377
        }, 
        {
            "name" : "udevd",
            "open_files" : 1,
            "pid" : 612
        }, 
        {
            "name" : "dhclient",
            "open_files" : 1,
            "pid" : 1444
        }, 
        {
            "name" : "dhclient",
            "open_files" : 1,
            "pid" : 1549
        }
    ],
    "Top10ProcessOpenNetConnectionsDesc" : [ 
        {
            "connections" : 28,
            "name" : "java",
            "pid" : 9324
        }, 
        {
            "connections" : 6,
            "name" : "ntpd",
            "pid" : 1994
        }, 
        {
            "connections" : 3,
            "name" : "rpcbind",
            "pid" : 1690
        }, 
        {
            "connections" : 3,
            "name" : "rpc.statd",
            "pid" : 1714
        }, 
        {
            "connections" : 3,
            "name" : "corosync",
            "pid" : 1755
        }, 
        {
            "connections" : 2,
            "name" : "java",
            "pid" : 16986
        }, 
        {
            "connections" : 1,
            "name" : "dhclient",
            "pid" : 1444
        }, 
        {
            "connections" : 1,
            "name" : "dhclient",
            "pid" : 1549
        }, 
        {
            "connections" : 1,
            "name" : "sshd",
            "pid" : 1981
        }, 
        {
            "connections" : 1,
            "name" : "filebeat",
            "pid" : 10377
        }
    ],
    "Top10RAMUsagePerProcess" : [ 
        {
            "memory_percent" : 2.38685608626554,
            "name" : "java",
            "pid" : 9324
        }, 
        {
            "memory_percent" : 2.26086094699541,
            "name" : "java",
            "pid" : 16986
        }, 
        {
            "memory_percent" : 0.137784087294919,
            "name" : "filebeat",
            "pid" : 10377
        }, 
        {
            "memory_percent" : 0.0453626119268533,
            "name" : "cib",
            "pid" : 2081
        }, 
        {
            "memory_percent" : 0.0432059492871685,
            "name" : "health_vm.py",
            "pid" : 19208
        }, 
        {
            "memory_percent" : 0.0413279565391283,
            "name" : "crmd",
            "pid" : 2086
        }, 
        {
            "memory_percent" : 0.0386624184451359,
            "name" : "pengine",
            "pid" : 2085
        }, 
        {
            "memory_percent" : 0.0371963724934401,
            "name" : "corosync",
            "pid" : 1755
        }, 
        {
            "memory_percent" : 0.0351972189229457,
            "name" : "health_stats_vm",
            "pid" : 19214
        }, 
        {
            "memory_percent" : 0.032349939595272,
            "name" : "health_stats.py",
            "pid" : 19715
        }
    ],
    "TopCpuProcess" : 60.8,
    "TopProcessOpenFilesDesc" : {
        "name" : "java",
        "open_files" : 70,
        "pid" : 9324
    },
    "TopProcessOpenNetConnectionsDesc" : "java",
    "TotalNICDrops" : 0,
    "TotalNICErrors" : 0,
    "TotalRAMBytes" : 33806307328,
    "TotalRAMUsagePercent" : 6.2,
    "TotalSwapUsagePercent" : 0.0,
    "SuccessfulFiles" : 110.0,
    "OpenDBConnections" : 10.0,
    "PushedCDRFiles" : {
        "TOTAL" : 2509676.0,
        "MSRP" : 312.0,
        "CDR_MASTER_SESSION_COMPOSITE" : 204305.0,
        "Gi" : 111633.0,
        "Userplane_Capture_WL" : 373.0,
        "LDAP" : 202039.0,
        "SIP_CDR" : 234815.0,
        "PFCP" : 152945.0,
        "AGG_SIP_5_MIN" : 21923.0,
        "Gn" : 96693.0,
        "DNS" : 274785.0,
        "H248_CDR" : 78027.0,
        "RTP_CDR" : 120054.0,
        "S1AP" : 165879.0,
        "Userplane_Capture" : 124801.0,
        "CDR_MASTER_REG_COMPOSITE" : 59472.0,
        "GTP_PRIME_CDR" : 135.0,
        "Diameter_CDR" : 157632.0,
        "RTCP_CDR" : 82235.0,
        "PFCP_Session" : 69542.0,
        "SGs" : 37154.0,
        "LCSAP_CDR" : 46494.0,
        "AGG_QROAM_DATA_5_MIN" : 8179.0,
        "SIP_Registration" : 87364.0,
        "SBCAP_CDR" : 98.0,
        "CDR_MASTER_DATA" : 139566.0,
        "AGG_GI_NE_NAME_5_MIN" : 11390.0,
        "CDR_MASTER_MOBILITY" : 1925.0,
        "XCAP" : 107.0,
        "AGG_CONTROL_PLANE_5_MIN" : 19799.0
    },
    "HwmEventsCount" : 0.0,
    "BadFiles" : 0.0,
    "UNAvailableDBNodes" : 0.0,
    "TotalCopyCommands" : 330869.0,
    "AvailableDBNodes" : 10.0,
    "FailedCopyCommands" : 10.0,
    "FailedLoginRequests" : {
        "TOTAL" : 0.0
    },
    "HwmCrossedHosts" : {
        "TOTAL" : 0.0
    },
    "QloaderDirecotryDiskUsage" : {
        "TOTAL" : 0.0
    },
    "TotalLoginRequests" : {
        "TOTAL" : 0.0
    },
    "TimeStamp" : 1566492405931,
    "TimeStampDisplay" : "2019-08-22T16:46:45.931Z",
    "SiteName" : "RDM6a",
    "StartTimeDisplay" : "2019-08-22T16:46:45.865Z",
    "UpTimeDisplay" : "1970-01-15T16:54:21.665Z",
    "TotalBadFiles" : {
        "TOTAL" : 108.0,
        "CDR_MASTER_SESSION_COMPOSITE" : {
            "TOTAL" : 48.0,
            "v_vdb_node0010" : 5.0,
            "v_vdb_node0001" : 2.0,
            "v_vdb_node0006" : 9.0,
            "v_vdb_node0007" : 6.0,
            "v_vdb_node0008" : 4.0,
            "v_vdb_node0009" : 5.0,
            "v_vdb_node0002" : 5.0,
            "v_vdb_node0003" : 3.0,
            "v_vdb_node0004" : 3.0,
            "v_vdb_node0005" : 6.0
        },
        "CDR_MASTER_REG_COMPOSITE" : {
            "TOTAL" : 2.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0006" : 1.0
        },
        "LDAP" : {
            "TOTAL" : 23.0,
            "v_vdb_node0010" : 2.0,
            "v_vdb_node0001" : 3.0,
            "v_vdb_node0006" : 3.0,
            "v_vdb_node0007" : 2.0,
            "v_vdb_node0008" : 2.0,
            "v_vdb_node0009" : 1.0,
            "v_vdb_node0002" : 3.0,
            "v_vdb_node0003" : 2.0,
            "v_vdb_node0004" : 2.0,
            "v_vdb_node0005" : 3.0
        },
        "Diameter_CDR" : {
            "TOTAL" : 13.0,
            "v_vdb_node0010" : 1.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0006" : 1.0,
            "v_vdb_node0007" : 1.0,
            "v_vdb_node0008" : 1.0,
            "v_vdb_node0009" : 1.0,
            "v_vdb_node0002" : 1.0,
            "v_vdb_node0003" : 3.0,
            "v_vdb_node0004" : 1.0,
            "v_vdb_node0005" : 2.0
        },
        "SIP_CDR" : {
            "TOTAL" : 8.0,
            "v_vdb_node0010" : 1.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0007" : 2.0,
            "v_vdb_node0008" : 1.0,
            "v_vdb_node0009" : 1.0,
            "v_vdb_node0003" : 1.0,
            "v_vdb_node0005" : 1.0
        },
        "SIP_Registration" : {
            "TOTAL" : 5.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0007" : 1.0,
            "v_vdb_node0003" : 2.0,
            "v_vdb_node0004" : 1.0
        },
        "H248_CDR" : {
            "TOTAL" : 2.0,
            "v_vdb_node0007" : 1.0,
            "v_vdb_node0005" : 1.0
        },
        "Userplane_Capture" : {
            "TOTAL" : 3.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0007" : 1.0,
            "v_vdb_node0005" : 1.0
        },
        "SGs" : {
            "TOTAL" : 4.0,
            "v_vdb_node0010" : 1.0,
            "v_vdb_node0001" : 1.0,
            "v_vdb_node0002" : 1.0,
            "v_vdb_node0003" : 1.0
        }
    },
    "TotalSuccessfulFiles" : {
        "TOTAL" : 2509494.0,
        "MSRP" : {
            "TOTAL" : 312.0,
            "v_vdb_node0010" : 34.0,
            "v_vdb_node0001" : 31.0,
            "v_vdb_node0006" : 33.0,
            "v_vdb_node0007" : 29.0,
            "v_vdb_node0008" : 32.0,
            "v_vdb_node0009" : 30.0,
            "v_vdb_node0002" : 30.0,
            "v_vdb_node0003" : 32.0,
            "v_vdb_node0004" : 30.0,
            "v_vdb_node0005" : 31.0
        },
        "CDR_MASTER_SESSION_COMPOSITE" : {
            "TOTAL" : 204246.0,
            "v_vdb_node0010" : 20433.0,
            "v_vdb_node0001" : 20339.0,
            "v_vdb_node0006" : 20430.0,
            "v_vdb_node0007" : 20432.0,
            "v_vdb_node0008" : 20435.0,
            "v_vdb_node0009" : 20437.0,
            "v_vdb_node0002" : 20432.0,
            "v_vdb_node0003" : 20437.0,
            "v_vdb_node0004" : 20441.0,
            "v_vdb_node0005" : 20430.0
        },
        "Gi" : {
            "TOTAL" : 111630.0,
            "v_vdb_node0010" : 11163.0,
            "v_vdb_node0001" : 11157.0,
            "v_vdb_node0006" : 11163.0,
            "v_vdb_node0007" : 11166.0,
            "v_vdb_node0008" : 11164.0,
            "v_vdb_node0009" : 11163.0,
            "v_vdb_node0002" : 11166.0,
            "v_vdb_node0003" : 11162.0,
            "v_vdb_node0004" : 11164.0,
            "v_vdb_node0005" : 11162.0
        },
        "Userplane_Capture_WL" : {
            "TOTAL" : 373.0,
            "v_vdb_node0010" : 38.0,
            "v_vdb_node0001" : 35.0,
            "v_vdb_node0006" : 39.0,
            "v_vdb_node0007" : 39.0,
            "v_vdb_node0008" : 36.0,
            "v_vdb_node0009" : 36.0,
            "v_vdb_node0002" : 37.0,
            "v_vdb_node0003" : 38.0,
            "v_vdb_node0004" : 39.0,
            "v_vdb_node0005" : 36.0
        },
        "LDAP" : {
            "TOTAL" : 202014.0,
            "v_vdb_node0010" : 20210.0,
            "v_vdb_node0001" : 20135.0,
            "v_vdb_node0006" : 20203.0,
            "v_vdb_node0007" : 20207.0,
            "v_vdb_node0008" : 20214.0,
            "v_vdb_node0009" : 20213.0,
            "v_vdb_node0002" : 20213.0,
            "v_vdb_node0003" : 20204.0,
            "v_vdb_node0004" : 20209.0,
            "v_vdb_node0005" : 20206.0
        },
        "AGG_SIP_5_MIN" : {
            "TOTAL" : 21923.0,
            "v_vdb_node0010" : 2192.0,
            "v_vdb_node0001" : 2194.0,
            "v_vdb_node0006" : 2191.0,
            "v_vdb_node0007" : 2193.0,
            "v_vdb_node0008" : 2192.0,
            "v_vdb_node0009" : 2192.0,
            "v_vdb_node0002" : 2191.0,
            "v_vdb_node0003" : 2195.0,
            "v_vdb_node0004" : 2188.0,
            "v_vdb_node0005" : 2195.0
        },
        "PFCP" : {
            "TOTAL" : 152944.0,
            "v_vdb_node0010" : 15299.0,
            "v_vdb_node0001" : 15242.0,
            "v_vdb_node0006" : 15298.0,
            "v_vdb_node0007" : 15300.0,
            "v_vdb_node0008" : 15303.0,
            "v_vdb_node0009" : 15302.0,
            "v_vdb_node0002" : 15303.0,
            "v_vdb_node0003" : 15292.0,
            "v_vdb_node0004" : 15303.0,
            "v_vdb_node0005" : 15302.0
        },
        "SIP_CDR" : {
            "TOTAL" : 234797.0,
            "v_vdb_node0010" : 23484.0,
            "v_vdb_node0001" : 23423.0,
            "v_vdb_node0006" : 23496.0,
            "v_vdb_node0007" : 23483.0,
            "v_vdb_node0008" : 23487.0,
            "v_vdb_node0009" : 23479.0,
            "v_vdb_node0002" : 23490.0,
            "v_vdb_node0003" : 23481.0,
            "v_vdb_node0004" : 23485.0,
            "v_vdb_node0005" : 23489.0
        },
        "Gn" : {
            "TOTAL" : 96693.0,
            "v_vdb_node0010" : 9674.0,
            "v_vdb_node0001" : 9608.0,
            "v_vdb_node0006" : 9673.0,
            "v_vdb_node0007" : 9680.0,
            "v_vdb_node0008" : 9682.0,
            "v_vdb_node0009" : 9676.0,
            "v_vdb_node0002" : 9675.0,
            "v_vdb_node0003" : 9673.0,
            "v_vdb_node0004" : 9673.0,
            "v_vdb_node0005" : 9679.0
        },
        "DNS" : {
            "TOTAL" : 274783.0,
            "v_vdb_node0010" : 27484.0,
            "v_vdb_node0001" : 27411.0,
            "v_vdb_node0006" : 27485.0,
            "v_vdb_node0007" : 27486.0,
            "v_vdb_node0008" : 27489.0,
            "v_vdb_node0009" : 27485.0,
            "v_vdb_node0002" : 27487.0,
            "v_vdb_node0003" : 27485.0,
            "v_vdb_node0004" : 27483.0,
            "v_vdb_node0005" : 27488.0
        },
        "RTP_CDR" : {
            "TOTAL" : 120052.0,
            "v_vdb_node0010" : 12008.0,
            "v_vdb_node0001" : 11984.0,
            "v_vdb_node0006" : 12012.0,
            "v_vdb_node0007" : 12007.0,
            "v_vdb_node0008" : 12005.0,
            "v_vdb_node0009" : 12009.0,
            "v_vdb_node0002" : 12010.0,
            "v_vdb_node0003" : 12005.0,
            "v_vdb_node0004" : 12004.0,
            "v_vdb_node0005" : 12008.0
        },
        "H248_CDR" : {
            "TOTAL" : 78022.0,
            "v_vdb_node0010" : 7802.0,
            "v_vdb_node0001" : 7787.0,
            "v_vdb_node0006" : 7807.0,
            "v_vdb_node0007" : 7803.0,
            "v_vdb_node0008" : 7806.0,
            "v_vdb_node0009" : 7806.0,
            "v_vdb_node0002" : 7806.0,
            "v_vdb_node0003" : 7802.0,
            "v_vdb_node0004" : 7803.0,
            "v_vdb_node0005" : 7800.0
        },
        "S1AP" : {
            "TOTAL" : 165868.0,
            "v_vdb_node0010" : 16595.0,
            "v_vdb_node0001" : 16530.0,
            "v_vdb_node0006" : 16589.0,
            "v_vdb_node0007" : 16594.0,
            "v_vdb_node0008" : 16599.0,
            "v_vdb_node0009" : 16589.0,
            "v_vdb_node0002" : 16593.0,
            "v_vdb_node0003" : 16593.0,
            "v_vdb_node0004" : 16597.0,
            "v_vdb_node0005" : 16589.0
        },
        "Userplane_Capture" : {
            "TOTAL" : 124796.0,
            "v_vdb_node0010" : 12486.0,
            "v_vdb_node0001" : 12422.0,
            "v_vdb_node0006" : 12480.0,
            "v_vdb_node0007" : 12486.0,
            "v_vdb_node0008" : 12490.0,
            "v_vdb_node0009" : 12486.0,
            "v_vdb_node0002" : 12489.0,
            "v_vdb_node0003" : 12482.0,
            "v_vdb_node0004" : 12489.0,
            "v_vdb_node0005" : 12486.0
        },
        "CDR_MASTER_REG_COMPOSITE" : {
            "TOTAL" : 59466.0,
            "v_vdb_node0010" : 5947.0,
            "v_vdb_node0001" : 5930.0,
            "v_vdb_node0006" : 5948.0,
            "v_vdb_node0007" : 5948.0,
            "v_vdb_node0008" : 5948.0,
            "v_vdb_node0009" : 5952.0,
            "v_vdb_node0002" : 5949.0,
            "v_vdb_node0003" : 5947.0,
            "v_vdb_node0004" : 5952.0,
            "v_vdb_node0005" : 5945.0
        },
        "GTP_PRIME_CDR" : {
            "TOTAL" : 135.0,
            "v_vdb_node0010" : 13.0,
            "v_vdb_node0001" : 12.0,
            "v_vdb_node0006" : 13.0,
            "v_vdb_node0007" : 13.0,
            "v_vdb_node0008" : 13.0,
            "v_vdb_node0009" : 13.0,
            "v_vdb_node0002" : 14.0,
            "v_vdb_node0003" : 15.0,
            "v_vdb_node0004" : 14.0,
            "v_vdb_node0005" : 15.0
        },
        "Diameter_CDR" : {
            "TOTAL" : 157610.0,
            "v_vdb_node0010" : 15765.0,
            "v_vdb_node0001" : 15690.0,
            "v_vdb_node0006" : 15768.0,
            "v_vdb_node0007" : 15769.0,
            "v_vdb_node0008" : 15772.0,
            "v_vdb_node0009" : 15773.0,
            "v_vdb_node0002" : 15771.0,
            "v_vdb_node0003" : 15767.0,
            "v_vdb_node0004" : 15763.0,
            "v_vdb_node0005" : 15772.0
        },
        "RTCP_CDR" : {
            "TOTAL" : 82234.0,
            "v_vdb_node0010" : 8223.0,
            "v_vdb_node0001" : 8213.0,
            "v_vdb_node0006" : 8222.0,
            "v_vdb_node0007" : 8221.0,
            "v_vdb_node0008" : 8224.0,
            "v_vdb_node0009" : 8226.0,
            "v_vdb_node0002" : 8228.0,
            "v_vdb_node0003" : 8223.0,
            "v_vdb_node0004" : 8228.0,
            "v_vdb_node0005" : 8226.0
        },
        "PFCP_Session" : {
            "TOTAL" : 69538.0,
            "v_vdb_node0010" : 6958.0,
            "v_vdb_node0001" : 6891.0,
            "v_vdb_node0006" : 6957.0,
            "v_vdb_node0007" : 6963.0,
            "v_vdb_node0008" : 6964.0,
            "v_vdb_node0009" : 6959.0,
            "v_vdb_node0002" : 6963.0,
            "v_vdb_node0003" : 6959.0,
            "v_vdb_node0004" : 6963.0,
            "v_vdb_node0005" : 6961.0
        },
        "SGs" : {
            "TOTAL" : 37150.0,
            "v_vdb_node0010" : 3716.0,
            "v_vdb_node0001" : 3689.0,
            "v_vdb_node0006" : 3717.0,
            "v_vdb_node0007" : 3719.0,
            "v_vdb_node0008" : 3716.0,
            "v_vdb_node0009" : 3718.0,
            "v_vdb_node0002" : 3722.0,
            "v_vdb_node0003" : 3717.0,
            "v_vdb_node0004" : 3721.0,
            "v_vdb_node0005" : 3715.0
        },
        "LCSAP_CDR" : {
            "TOTAL" : 46492.0,
            "v_vdb_node0010" : 4655.0,
            "v_vdb_node0001" : 4603.0,
            "v_vdb_node0006" : 4651.0,
            "v_vdb_node0007" : 4652.0,
            "v_vdb_node0008" : 4656.0,
            "v_vdb_node0009" : 4659.0,
            "v_vdb_node0002" : 4655.0,
            "v_vdb_node0003" : 4654.0,
            "v_vdb_node0004" : 4652.0,
            "v_vdb_node0005" : 4655.0
        },
        "AGG_QROAM_DATA_5_MIN" : {
            "TOTAL" : 8179.0,
            "v_vdb_node0010" : 816.0,
            "v_vdb_node0001" : 813.0,
            "v_vdb_node0006" : 818.0,
            "v_vdb_node0007" : 820.0,
            "v_vdb_node0008" : 818.0,
            "v_vdb_node0009" : 819.0,
            "v_vdb_node0002" : 819.0,
            "v_vdb_node0003" : 818.0,
            "v_vdb_node0004" : 818.0,
            "v_vdb_node0005" : 820.0
        },
        "SIP_Registration" : {
            "TOTAL" : 87356.0,
            "v_vdb_node0010" : 8736.0,
            "v_vdb_node0001" : 8719.0,
            "v_vdb_node0006" : 8740.0,
            "v_vdb_node0007" : 8736.0,
            "v_vdb_node0008" : 8740.0,
            "v_vdb_node0009" : 8735.0,
            "v_vdb_node0002" : 8744.0,
            "v_vdb_node0003" : 8734.0,
            "v_vdb_node0004" : 8738.0,
            "v_vdb_node0005" : 8734.0
        },
        "SBCAP_CDR" : {
            "TOTAL" : 98.0,
            "v_vdb_node0010" : 10.0,
            "v_vdb_node0001" : 9.0,
            "v_vdb_node0006" : 8.0,
            "v_vdb_node0007" : 10.0,
            "v_vdb_node0008" : 11.0,
            "v_vdb_node0009" : 12.0,
            "v_vdb_node0002" : 8.0,
            "v_vdb_node0003" : 9.0,
            "v_vdb_node0004" : 11.0,
            "v_vdb_node0005" : 10.0
        },
        "CDR_MASTER_DATA" : {
            "TOTAL" : 139562.0,
            "v_vdb_node0010" : 13958.0,
            "v_vdb_node0001" : 13894.0,
            "v_vdb_node0006" : 13958.0,
            "v_vdb_node0007" : 13966.0,
            "v_vdb_node0008" : 13963.0,
            "v_vdb_node0009" : 13964.0,
            "v_vdb_node0002" : 13964.0,
            "v_vdb_node0003" : 13967.0,
            "v_vdb_node0004" : 13964.0,
            "v_vdb_node0005" : 13964.0
        },
        "AGG_GI_NE_NAME_5_MIN" : {
            "TOTAL" : 11390.0,
            "v_vdb_node0010" : 1139.0,
            "v_vdb_node0001" : 1139.0,
            "v_vdb_node0006" : 1139.0,
            "v_vdb_node0007" : 1137.0,
            "v_vdb_node0008" : 1139.0,
            "v_vdb_node0009" : 1137.0,
            "v_vdb_node0002" : 1139.0,
            "v_vdb_node0003" : 1142.0,
            "v_vdb_node0004" : 1139.0,
            "v_vdb_node0005" : 1140.0
        },
        "CDR_MASTER_MOBILITY" : {
            "TOTAL" : 1925.0,
            "v_vdb_node0010" : 192.0,
            "v_vdb_node0001" : 194.0,
            "v_vdb_node0006" : 193.0,
            "v_vdb_node0007" : 191.0,
            "v_vdb_node0008" : 193.0,
            "v_vdb_node0009" : 193.0,
            "v_vdb_node0002" : 193.0,
            "v_vdb_node0003" : 192.0,
            "v_vdb_node0004" : 191.0,
            "v_vdb_node0005" : 193.0
        },
        "XCAP" : {
            "TOTAL" : 107.0,
            "v_vdb_node0010" : 10.0,
            "v_vdb_node0001" : 9.0,
            "v_vdb_node0006" : 11.0,
            "v_vdb_node0007" : 12.0,
            "v_vdb_node0008" : 10.0,
            "v_vdb_node0009" : 11.0,
            "v_vdb_node0002" : 12.0,
            "v_vdb_node0003" : 10.0,
            "v_vdb_node0004" : 12.0,
            "v_vdb_node0005" : 10.0
        },
        "AGG_CONTROL_PLANE_5_MIN" : {
            "TOTAL" : 19799.0,
            "v_vdb_node0010" : 1981.0,
            "v_vdb_node0001" : 1975.0,
            "v_vdb_node0006" : 1980.0,
            "v_vdb_node0007" : 1982.0,
            "v_vdb_node0008" : 1977.0,
            "v_vdb_node0009" : 1979.0,
            "v_vdb_node0002" : 1981.0,
            "v_vdb_node0003" : 1982.0,
            "v_vdb_node0004" : 1980.0,
            "v_vdb_node0005" : 1982.0
        }
    }
}
const unique = 100
module.exports.getDocs = () => {
    const docs = [];
    const VMdocs = [];
    for(let i = 0; i < unique; i++){
        const Mdoc = new Object({},document);
        const VMdoc = new Object({},CDR_Health_VM);
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
        VMdoc.MachineType = 'randomQLoader';
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