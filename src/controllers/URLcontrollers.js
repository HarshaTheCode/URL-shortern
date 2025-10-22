

function generateShortcode() {
    /*  Math.randome gives an random number it return an flot number then after 
        we are parsing it to the string and slicing the floting point 
        then we get an unique code of 6 digit Alphnumaric 
     */

    const code = Math.random().toString(36).slice(2, 8)
    return code;
}
// in this array we are going to store the actuall urls which are pated by the user 
// we save them hear and when the user click on the link we redirect him to the actual link 
// google was an hard coded for testing 
let urldatabase={ 
    "u5b1q3": "https://www.google.com",
};

// in this function we send teh url as the responce to the urser in this function 
// only our larger url will go under prosess and we get short url 

// in this whenever the user pates the link and click on the buttoon
//  we trigger this function so it will take the unique code from the generateShortcode();
// then we paste that at the end poit and this will be the short link of our user

export function shortenurl(req,res){
    const shortcode=generateShortcode();
    urldatabase[shortcode]= req.body.originalUrl;
    const url=`localhost:5000/api/${shortcode}`;

res.send(url);
}

// hear is the acuall magic  and the logica is applied to the web site 
// hear in this coed we are storing the actuall web site url in an array with unique code 
// whene evr the user hit the endpoint with the perfecct mach of the unique code then it will 
// automaticly redirects to the actull web site by using the link saved 
export function redirecturl (req,res){
    const {code}=req.params;
    const originalurl=urldatabase[code];
    console.log(code)
    res.redirect(originalurl);


}