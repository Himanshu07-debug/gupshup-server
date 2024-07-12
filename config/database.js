import mongoose from 'mongoose';

const Connection = async () => {
    const URL = "mongodb://127.0.0.1:27017/Chatapp"
    try {
        await mongoose.connect(URL,{ useNewUrlParser: true})
        console.log("connected") ;
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;