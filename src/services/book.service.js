import { boolean } from '@hapi/joi';
import Book from '../models/book.model';
import cartModel from '../models/cart.model';

export const AllBooks = async (UserID) => {
    const AllBookdata = await Book.find({UserID}); 

    if(AllBookdata.length == 0){
        throw new Error("user dont have any notes")
    }
    else
    {
        // await client.set('allnotes',JSON.stringify(AllBookdata))  //assigning to redis server
        return AllBookdata;
    }    
};



//Using tow Parameters
export const getBookById = async(_id,UserID)=>{
    const dataById = await Book.findById({_id, UserID});
    if(  dataById == null )
    {
        throw new Error("There is no note with this ID")
    } 
    else
    {   
        return dataById;  
    }
}






