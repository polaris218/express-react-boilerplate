import { decode, sign } from "jsonwebtoken";

export const tokenSign = email => {
    return sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: email,
    }, 'secret');
}