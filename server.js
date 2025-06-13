import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import fetch from "node-fetch";
import fs from "fs";
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//if you want to hit api in server.js, use node-fetch.Install it using npm i --save node-fetch
const app = express();
const PORT = 3000;
var __PAGE_TITLE__ = "Testando aqui"
var todo = (title) => 
  
  function (req, res) {
    let htmlContent = fs.readFileSync("./dist/index.html", "utf8");
    htmlContent = htmlContent.replace(`__TITLE__`, title);
    htmlContent = htmlContent.replace(`__PAGE_NO_SCRIPT__`, `<p>Javascript doesn't work</p>`);
    res.send(htmlContent);
  };

app.use(express.static(path.join(__dirname, "./dist")));
app.get("/", todo('Pagina 1'));
app.get("/admin", todo('Pagina 2'));
app.get("*", todo('Pagina 4'));
app.listen(PORT, () => {
console.log(`Express app running on port ${PORT}.`);
});