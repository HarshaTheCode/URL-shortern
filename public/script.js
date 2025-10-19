const shortenbtn = document.getElementById('submit-btn')


shortenbtn.addEventListener('click', async () => {
    
    const urlInput = document.getElementById('url-input').value;
    const shorturl= document.getElementById('short-url');
    const res = await fetch('http://localhost:5000/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            originalUrl: urlInput
        })
    })

    console.log('Button was clicked!');
    const data = await res.text();
    shorturl.innerText= "your short url:  "+data;
    console.log(data);

});