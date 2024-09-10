import express from "express";
import taskRoutes from "./routes/taskRoutes";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const corsOptions = {
  origin: "http://localhost:3000", // Allow only this origin
  methods: ["GET", "POST", "PATCH", "DELETE"], // Allow only these methods
};

const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
