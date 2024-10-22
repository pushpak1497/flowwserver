import dotenv from "dotenv";

import { app } from "./app.js";
import connectDB from "./src/db/index.js";

dotenv.config({ path: "./.env.local" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`server is running at http://localhost:${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("mongodb connection error:", error);
  });
