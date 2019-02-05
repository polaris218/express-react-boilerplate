import Joi from 'joi';
import uuid from 'uuid-v4';
import bcrypt from 'bcrypt';
// import { author } from '../models';
// import { tokenSign } from '../middleware/token';

const saltRounds = 10;

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
  const {
    username, email, password,
  } = req.body;

  
};
export const userLogin = (req, res) => {
  const { error } = validateCourse(req.body);
  
};
export const userInfoUpdate = (req, res) => {
  const { udata } = req.body;
  const email = req.app.get('email');
  const { username, password, newpassword } = udata;

  
};
export const userRemove = (req, res) => {
  const { remail } = req.body;
};
