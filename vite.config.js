
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env, // Make .env variables accessible in the app
  },
})

 // Load environment variables

