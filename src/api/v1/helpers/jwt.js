const jwt = require('jsonwebtoken');
const jwtCf = require('../../config/jwt-config')


const createSortToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,

        }
        const secret = jwtCf.sortKey;
        const option = {
            expiresIn: jwtCf.sortTime
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}
const createLongToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        }
        const secret = jwtCf.sortKey;
        const option = {
            expiresIn: jwtCf.sortTime
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}
const createEmailToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        }
        const secret = jwtCf.sortKey;
        const option = {
            expiresIn: jwtCf.sortTime
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })
    })
}
const generateVerificationToken = async (userId, dType) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId,
            dType,  //biến chứa mã veryfile code (đặt tên hại não xíu để có giải mã cũng không biết là gì)
        }
        const secret = jwtCf.sortKey;
        const option = {
            expiresIn: '1h'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}

const sigAuthToken = async (userId) => {
    return new Promise((resolve, reject) => {
        const payload = {
            userId
        }
        const secret = process.env.ACCESS_TOKEN_SECRET;
        const option = {
            expiresIn: '1h'
        }
        jwt.sign(payload, secret, option, (err, token) => {
            if (err) reject(err)
            resolve(token)
        })

    })
}

module.exports = {
    sigAuthToken,
    createSortToken,
    createLongToken,
    generateVerificationToken,
    createEmailToken
}