import {BookReqType, BookResType} from "../types";
import axios from "axios";


const BOOK_API_URL = 'https://api.marktube.tv/v1/book';
//API 객체형태..?
export const BookService ={
    async getBook(token:string): Promise<BookResType[]>{
        const response = await axios.get(BOOK_API_URL,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
        return response.data
    },

    async addBook(token: string, book: BookReqType): Promise<BookResType>{
        const response = await axios.post(BOOK_API_URL,book,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
        return response.data
    },

    async deleteBook(token:string, bookId:number) : Promise<void>{
        await axios.delete(`${BOOK_API_URL}/${bookId}`,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
    },

    async editBook(token:string, bookId:number, book:BookReqType) : Promise<BookResType>{
        const response = await axios.patch(`${BOOK_API_URL}/${bookId}`, book,{
            headers:{
                Authorization :`Bearer ${token}`
            }
        })
        return response.data
    }

}