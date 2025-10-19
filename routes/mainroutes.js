import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const welcome = (req, res) => {
    const filePath = path.join(__dirname, "../public/index.html");
   res.sendFile(filePath)
};

export const about = (req, res) => {
    res.send("URL shorten web app about page is  runnning ");
};