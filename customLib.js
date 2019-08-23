const toNumber = (value) => {
    return isNaN(Number(value)) ? Number(0.0) : Number(value)
}

module.exports.toNumber = toNumber;

const isNormal = (obj) => {
    let normal = true;
    Object.keys(obj).forEach((k,i) => {
        if(typeof obj[k] == 'object'){
            normal = false;
        }
    })
    return normal;
}

const basicFlat = (obj, parentK) => {
    const newObj = new Object();
    Object.keys(obj).forEach((k,i) => {
        newObj[parentK.replace(/[!@#$%^&*(),.?":{}|<>/\s]/g,'_')+k.replace(/[!@#$%^&*(),.?":{}|<>/\s]/g,'_')] = obj[k]
    })
    if(typeof obj != "object"){
        newObj[parentK] = obj;
    }
    return newObj;
}

const flatten = (obj) => {
    const newObject = new Object();
    Object.keys(obj).forEach((k,i) => {
        if(isNormal(obj[k])){
            Object.assign(newObject,basicFlat(obj[k],k));
        } else {
            Object.assign(newObject,basicFlat(flatten(obj[k]),k));
        }
    })
    return newObject;
}
//console.log(flatten2(JSON.parse(test)));

module.exports.flatten = flatten;

const randomIntInc = (low, high) => {
    return Math.floor(Math.random() * (high - low + 1) + low)
  }
  module.exports.randomIntInc = randomIntInc;