import mongoose from "mongoose";

async function connectNaDatabase(){ 

mongoose.connect("mongodb+srv://admin:admin123@cluster0.uulw9jv.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
return mongoose.connection
}

export default connectNaDatabase