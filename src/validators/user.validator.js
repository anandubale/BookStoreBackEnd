import Joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';


export const newUserValidator = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().min(4).required(),
    lastName: Joi.string().min(4).required(),
    emailID: Joi.string().min(5).required(),
    password: Joi.string().min(10).required(),

  });

  const { error, value } = schema.validate(req.body); //validate value using Schema and Options                                                
  if (error) 
  {  
    res.status(HttpStatus.BAD_REQUEST).json({
      code : HttpStatus.BAD_REQUEST,
      message : error
    });
  } 
  else { 
    req.validatedBody = value;                 //true or false
    next();
  }
};
