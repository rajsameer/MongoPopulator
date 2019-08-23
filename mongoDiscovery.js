//In most of the maveriq system we can not have the mongo IPs in the system.
//Since the code required self restart abilities. We had to add ways to fetch all the existing mongos of the system.
//We do this by conductor each time whe the code is restarted due to programatic errors the mongo IPs will be fetched from the counductor.
// the code will randomly select a secondary mongo.


const http = require('http');
const mongoDb = require('mongodb').MongoClient;
const randomInt = require('./customLib.js').randomIntInc;
const mongoUser = "root";
const mongoPassword = "2108a185c5b4969394c9cc18308c72a9";
//const requestUrl = `http://${config.conductorVIP}:8084/MaveriQConductor/api/v1/machinePropertiesBySiteAssociation?resourceType=mongodb`;
const getMongoMachines = () => {
    return new Promise((resolve, reject) => {
        http.get(requestUrl,(res) => {
            let data = '';
            res.on('data',d => {
                data = data + d.toString();
            });

            res.on('end', () => {
                resolve(JSON.parse(data));
            })

        }).on('error',(err) => {
            console.log('Connection to conductor failed.');
            reject(err);
        })
    })

}
const mongoConnectTest = (mongoIP) => {
    return new Promise((resolve,reject) => {
        const mongoURI =`mongodb://${mongoUser}:${mongoPassword}@`+mongoIP+`/admin?authMechanism=SCRAM-SHA-1`;
        mongoDb.connect(mongoURI,{useNewUrlParser: true}).then(async (client) => {
            const status = await client.db().admin().replSetGetStatus();
            debugger;
            //mongoDb.close();
            resolve(status.members.filter(m => m.stateStr == "PRIMARY").map(m => m.name));
        }).catch((err) => {
            resolve([]);
        });

    })
}

const getMongoPrimary = async () => {
   // const mongoMachines = await getMongoMachines();
    //const mongoBeIPs = mongoMachines.map(machine => {
      //  let bekeyName = Object.keys(machine.attributes).find(key => /beinterconnect/g.test(key));
        //return machine.attributes[bekeyName]
    //});
    //replica connection test
    const mongoBeIPs = ['10.20.4.24:27017', '10.20.4.23:27017', '10.20.4.22:27017'];
    //const mongoBeIPs = ['127.0.0.1:27017'];
    const connectPromises = [];
    mongoBeIPs.forEach((ip) => {
        connectPromises.push(mongoConnectTest(ip));
    })
    

    const mongoIP = await Promise.all(connectPromises).then((values) => {
                        const MongoIPs = [...new Set(values.flatMap(a => [...a]))];
                        return MongoIPs[randomInt(0,MongoIPs.length-1)];
                    });
    return mongoIP;

}

//getMongoPrimary();
module.exports = getMongoPrimary;
