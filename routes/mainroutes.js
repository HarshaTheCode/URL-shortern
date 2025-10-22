import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// sending the HTML file using the path and to send the
//  files in the express we need to use the path 
export const welcome = (req, res) => {
    const filePath = path.join(__dirname, "../public/index.html");
   res.sendFile(filePath)
};

// hear we are sending the actual about page we are just sending a plane text as response 
// so  iit will print it on the screen it is like an test page 
export const about = (req, res) => {
    res.send("URL shorten web app about page is  runnning ");
};