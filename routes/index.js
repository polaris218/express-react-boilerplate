import express from 'express'
import {
    userLogin,
    userInfo,
    userSignup,
    userInfoUpdate,
    userRemove,
} from '../controllers/userController';
import {
    fileUpload,
    getOfferData,
    getOfferView,
} from '../controllers/offerController';
import { tokenCheck } from '../middleware/token';

const router = express.Router();

router.get('/userinfo', userInfo);

router.get('/offerdata', getOfferData);

router.get('/viewdata', getOfferView)

// router.get('/filedownload', fileDownload);

router.post('/usersignup', userSignup);

router.post('/login', userLogin);

router.post('/createoffer', tokenCheck, fileUpload);

router.put('/userupdate', userInfoUpdate);

router.delete('/userremove', userRemove);

export default router;