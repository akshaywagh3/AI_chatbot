import app from './app.js';
import { connectDatabase } from './database/connection.js';

const port = process.env.PORT || 5000;
connectDatabase().then(()=>{
  app.listen(port,()=> console.log("SERVER open"));
}).catch(error=>console.log(error));
