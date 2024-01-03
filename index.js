import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv'

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 5000;
const MONGO_URI = "mongodb+srv://saadshaikh0316:Catdog0316@cluster0.3sjd8e0.mongodb.net/?retryWrites=true&w=majority"


dotenv.config();
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});


// // Connect to MongoDB using Mongoose
// mongoose.connect("mongodb+srv://saadshaikh0316:Catdog0316@cluster0.3sjd8e0.mongodb.net/Axesseq?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => {
//         console.log('MongoDB connected');
//     })
//     .catch((err) => {
//         console.error('MongoDB connection error:', err);
//     });


// Connect to MongoDB
//   "mongodb+srv://saadshaikh0316:Catdog0316@cluster0.pl3tgtp.mongodb.net/Axesseq?retryWrites=true&w=majority",
const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saadshaikh0316:vHDt0ISlIMPj4boQ@cluster0.3sjd8e0.mongodb.net/admin-panel?retryWrites=true&w=majority",
      {}
    );
    console.log("DB is Connected ");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
connectToDatabase();


import authRoutes from "./routes/auth.js";
app.use('/api/auth', authRoutes);


import productForm from './routes/productForms.js'
app.use('/api', productForm)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});