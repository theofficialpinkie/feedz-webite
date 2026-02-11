// server.js
import express from "express";
import compression from "compression";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(compression());

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve the Vite build output
const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath, { maxAge: "1d", etag: true }));


// SPA fallback (Express 5 / path-to-regexp safe)
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
