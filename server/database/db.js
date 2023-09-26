import mongoose from 'mongoose';

const DBConnection = async ()=>{
    const MONGO_URI =`mongodb+srv://user:sohini@file-sharing.mxewog1.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true })
        console.log('Database is connected successfully')
    }catch(error){
        console.error('Error while connecting with database',error.message)
    }
}
export default DBConnection