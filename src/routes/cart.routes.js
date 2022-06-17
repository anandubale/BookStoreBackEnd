import express from 'express'
import * as cartController from '../controllers/cart.controller';
import { bookAuth } from '../middlewares/auth.middleware';


const cartRouter = express.Router()
cartRouter.post('', bookAuth,cartController.checkCart)

cartRouter.post('/addtocart/:_id', bookAuth,cartController.addToCart)

cartRouter.put('/remove/:_id', bookAuth,cartController.removeBookFromCart)




export default cartRouter