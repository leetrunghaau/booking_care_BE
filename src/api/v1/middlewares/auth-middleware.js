// jwtMiddleware.js
const jwt = require('jsonwebtoken');
const createError = require('http-errors');
const UserSV = require('../services/user');
const jwtConfig = require('../../config/jwt-config');

const noAuthMiddleware = (req, res, next) => {

    if (!req.headers.authorization) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
};




const authorization = permission => {
    return async (req, res, next) => {
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized());
        }
        const authHeader = req.headers['authorization'];
        const bearerToken = authHeader.split(' ');
        const token = bearerToken[1];
        console.log(bearerToken[0]);
        if (bearerToken[0] != 'Bearer') {
            return next(createError[401]('Lỗi axios'));
        }

        try {
            const payload = jwt.verify(token, jwtConfig.sortKey);
            console.log(payload);

            const user = await UserSV.oneId(payload.userId);
            
            console.log(user.role);
            console.log(permission);


            if (!user) {
                return next(createError[401]('Đang giả danh hả, cutsttttt :))))'));
            }

            if (!permission.includes(user.role)) {
                return next(createError[401]('you dont have permission'));
            }
            req.user = user

            next();
        } catch (err) {
            return next(createError.Unauthorized(err.message));
        }
    };
};

module.exports = {
    noAuthMiddleware,
    authorization,
}