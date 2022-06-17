import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service'

export const checkCart = async(req,res) =>{
    try {
        console.log(req.params._id)
        const dataById = await cartService.checkCart(req.body.UserID);
        res.status(HttpStatus.OK).json({
          code:HttpStatus.OK,
          data: dataById,
          message: "Cart is present"
          })
      } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({
          code: HttpStatus.NOT_FOUND,
          message : `${error}`
        })  
      }
}

export const addToCart = async(req,res)=>{
    try {
      console.log(req.params._id)
      const dataById = await cartService.addToCart(req.params._id, req.body.UserID);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: dataById,
        message: "Successfully added book to cart"
        })
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message : `${error}`
      })  
    }
  };
  


  export const removeBookFromCart = async(req,res)=>{
    try {
      console.log(req.params._id)
      const dataById = await cartService.removeBookFromCart(req.params._id, req.body.UserID);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: dataById,
        message: "Successfully removed from cart"
        })
    } catch (error) {
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message : `${error}`
      })  
    }
};








  