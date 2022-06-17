import res from 'express/lib/response';
import HttpStatus from 'http-status-codes';
import * as BookService from '../services/book.service';



 export const AllBooks = async (req, res) => {
    try {
      console.log("we are in controller of allnotes")
      const AllUserdata = await BookService.AllBooks(req.body.UserID);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: AllUserdata,                
        message: 'All notes fetched successfully'
      });
    } catch (error){ 
      res.status(HttpStatus.NOT_FOUND).json({
        code: HttpStatus.NOT_FOUND,
        message : `${error}`
      })
    
    }
  };



export const getBookById = async(req,res)=>{
  try {

    const dataById = await BookService.getBookById(req.params._id, req.body.UserID);
    res.status(HttpStatus.OK).json({
      code:HttpStatus.OK,
      data: dataById,
      message: "Successfully found the note"
      })
  } catch (error) {
    res.status(HttpStatus.NOT_FOUND).json({
      code: HttpStatus.NOT_FOUND,
      message : `${error}`
    })  
  }
};


