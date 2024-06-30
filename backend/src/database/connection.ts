import {connect,disconnect} from "mongoose";
async function connectDatabase(){
    try{
        await connect(process.env.MONGODB_URL);
    }catch(error){
        console.log(error);
        throw new Error('Database Connection Error');
    }
}

async function disconnectDb(){
    try{
        await disconnect();
    }catch(error){
        console.log(error);
        throw new Error('could not disconnect Database Connection');
    }
}

export {
    disconnectDb,connectDatabase
};