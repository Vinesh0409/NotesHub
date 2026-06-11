import mongoose from 'mongoose';

const dbconnect = async (url)=>{
   await mongoose.connect(url);
   console.log("database connected");
}

export default dbconnect