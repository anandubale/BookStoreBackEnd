import User from '../models/user.model';
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


//create new user
export const userRegistration = async (body) => {
  const saltRounds = 10;
  const hasedPassword = bcrypt.hashSync(body.password,saltRounds); 
  body.password = hasedPassword;
  const previous_check = await User.findOne({emailID : body.emailID})
  if(previous_check != null){
      throw new Error("User Already registered");
  }
  else
  {
    const data = await User.create(body);  
    return data;   
  }
}; 





// login user;

               
export const login = async (body) => {
console.log("service")
  const user = await User.findOne({emailID: body.emailID})
  const validPassword = bcrypt.compareSync(body.password, user.password);
  if(validPassword)
  { 
    const token = jwt.sign({"emailID": user.emailID,"id":user._id}, process.env.LOGIN_SECRET_CODE);
    return token;
  }
  else
  {
    throw new Error('password does not match');
  }
}
 






















// //get all users
// export const getAllUsers = async () => {
//   const data = await User.find();
//   return data;
// };

// //create new user
// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

// //update single user
// export const updateUser = async (_id, body) => {
//   const data = await User.findByIdAndUpdate(
//     {
//       _id
//     },
//     body,
//     {
//       new: true
//     }
//   );
//   return data;
// };

// //delete single user
// export const deleteUser = async (id) => {
//   await User.findByIdAndDelete(id);
//   return '';
// };

// //get single user
// export const getUser = async (id) => {
//   const data = await User.findById(id);
//   return data;
// };
