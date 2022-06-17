import Book from '../models/book.model'
import cartModel from '../models/cart.model'

export const checkCart = async(UserID) => {
    const CheckCart = await cartModel.findOne({UserID})
    if(CheckCart != null){
        return CheckCart
    }
    else{
        throw new Error("This user dont have cart")
    }

}

export const addToCart = async(_id,UserID)=>{

   
    const ExistingBook = await Book.findById({_id,UserID})
    if(ExistingBook != null)
    {
        const CheckCart = await cartModel.findOne({UserID})
        const newBook = {
            bookImage: ExistingBook.bookImage,
            bookName: ExistingBook.bookName,
            author:ExistingBook.author,
            price:ExistingBook.price,
            quantity: 1 
        }
        console.log("this is to check cart",CheckCart)
        if(CheckCart){
            CheckCart.book.push(newBook)
            const UpdateCheckCart = await cartModel.findOneAndUpdate({UserID},
                { 
                $set:{ book: CheckCart.book},
                },
                {new: true}
                )
            return UpdateCheckCart
        }
        else{

            console.log("we are creation of cart")
            const newCart = {
                UserID: UserID,
                book: [newBook],
                cart_total: ExistingBook.price,
                isPurchased : false
            }
            const CreateCart = cartModel.create(newCart)
            const UpdateCart = checkCart(UserID)
            return UpdateCart;
        } 
    }
    else{
         throw new Error('Selected book is not present')
    }
}

export const removeBookFromCart = async  (_id,UserID)=>{
    const ExistingBook = Book.findById({_id})
    console.log(ExistingBook)
    if(ExistingBook){
        const CheckCart = await cartModel.findOne({UserID})
        console.log("this is to check cart",CheckCart)
        if(CheckCart){
            console.log("this is cart",CheckCart.book)
            const findIndex = CheckCart.book.findIndex(a => a._id === CheckCart.book.productId)
            console.log("index of book ",findIndex)
            CheckCart.book.splice(findIndex , 1)
            console.log("this is updatedcart",CheckCart.book)
            const UpdateCheckCart = await cartModel.findOneAndUpdate({UserID},
                { 
                $set:{ book: CheckCart.book},
                },
                {new: true}
                )
            return UpdateCheckCart
        }
    }else
    {
        throw new Error("book is not present to remove")
    }
}


export default updateBookInCart = async (_id,UserID)=>{
    const ExistingBook = Book.findById({_id})



} 