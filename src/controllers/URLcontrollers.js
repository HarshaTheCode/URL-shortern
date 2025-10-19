

function generateShortcode() {
    /*  Math.randome gives an random number it return an flot number then after 
        we are parsing it to the string and slicing the floting point 
        then we get an unique code of 6 digit Alphnumaric 
     */

    const code = Math.random().toString(36).slice(2, 8)
    return code;
}

let urldatabase={ 
    "u5b1q3": "https://www.google.com",
};

export function shortenurl(req,res){
    const shortcode=generateShortcode();
    urldatabase[shortcode]= req.body.originalUrl;
    const url=`localhost:5000/api/${shortcode}`;

res.send(url);
}

export function redirecturl (req,res){
    const {code}=req.params;
    const originalurl=urldatabase[code];
    console.log(code)
    res.redirect(originalurl);


}