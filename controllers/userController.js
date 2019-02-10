import Joi from 'joi';
import uuid from 'uuid-v4';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path';
import User from '../models/userSchema';
import { tokenSign } from '../middleware/token';

const saltRounds = 10;
let basicuuid = '';
let basicext = '';
let basicoriname = '';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload')
  },
  filename: (req, file, cb) => {
    const __uuid = uuid();
    basicuuid = __uuid;
    basicext = path.extname(file.originalname);
    basicoriname = file.originalname;

    cb(null, `${__uuid}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage }).single('file');

const validateCourse = (course) => {
  const schema = {
    email: Joi.string(),
    password: Joi.string().min(3).required(),
  };
  return Joi.validate(course, schema);
};

export const userInfo = (req, res) => {
  const email = req.app.get('email');
};

export const userSignup = (req, res) => {

  upload(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      res.status(404).send(err);
      // A Multer error occurred when uploading.
    } else if (err) {
      res.status(404).send(err);
      // An unknown error occurred when uploading.
    } else {
      const { username, email, password } = req.body;
      User.create({
        businessName: username,
        businessEmail: email,
        password,
        image: {
          oriname: basicoriname,
          savedname: `${basicuuid}${basicext}`
        },
      })
        .then((data) => {
          const token = tokenSign(email);      
          res.status(200).send(token);
        });      
    }
    // Everything went fine.
  });
};

export const userLogin = (req, res) => {
  const { error} = validateCourse(req.body);
  const { email, password } = req.body;
  const token = tokenSign(email);
  res.status(200).send(token);
};

export const userInfoUpdate = (req, res) => {
  const { udata } = req.body;
  const email = req.app.get('email');
  const { username, password, newpassword } = udata;

};

export const userRemove = (req, res) => {
  const { remail } = req.body;
};
