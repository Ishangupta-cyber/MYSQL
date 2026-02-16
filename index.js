import dotenv from 'dotenv';
dotenv.config();

import app from "./src/app.js";
import { initDatabase } from "./src/database/init.js";

const PORT = process.env.PORT || 3000;

await initDatabase();

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});