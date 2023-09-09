import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

import cors from "cors";



//configure env
dotenv.config();

//es6 modulefix
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
// app.use(express.static(path.join(__dirname,'./client/build')))

//rest api
app.get('/',function(req,res){
  res.send(path.join('<h1>Welcome to my 99sale<h1>'));
})

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.PORT} mode on port ${PORT}`.bgCyan
      .white
  );
});