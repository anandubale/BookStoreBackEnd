import express from 'express';
import * as bookController from '../controllers/book.controller';
import { bookAuth } from '../middlewares/auth.middleware';

const bookRouter = express.Router();

//get all notes 
bookRouter.get('',  bookController.AllBooks);

//get note by id
bookRouter.get('/:_id', bookController.getBookById);


export default bookRouter;










// //route to get all users
// router.get('', userController.getAllUsers);

// //route to create a new user
// router.post('', newUserValidator, userController.newUser);

// //route to get a single user by their user id
// router.get('/:_id', userAuth, userController.getUser);

// //route to update a single user by their user id
// router.put('/:_id', userController.updateUser);

// //route to delete a single user by their user id
// router.delete('/:_id', userController.deleteUser);

// export default router;
