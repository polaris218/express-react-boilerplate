import { decode, sign } from "jsonwebtoken";

export const tokenSign = email => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: email,
    }, 'secret');
};

export const tokenCheck = (req, res, next) => {
    const { authorization } = req.headers || req.body;
    if (authorization !== undefined) {
        req.app.set('email', decode(authorization).data);
        next();
    } else {
        next();
    }
};