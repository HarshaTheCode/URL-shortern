

const allurls = document.getElementById('all-urls');
const shortenbtn = document.getElementById('submit-btn')
// we added teh event listern to the button on front end so when ever user click on the 
// buttone thsi function will be trigged 
shortenbtn.addEventListener('click', async () => {
    
    // we are getting the url form the front end and storing it into the "urlinput"
    const urlInput = document.getElementById('url-input').value;
    // hear we are using this shorturl for the displying the generated url 
    const shorturl= document.getElementById('short-url');

    // hear we are making an POST request to the server 
    // we making the post request by using the urlInput 
    const res = await fetch('http://localhost:5000/api/shorten', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            // hear is our original url we are sending the post request to the server with this link 
            originalUrl: urlInput
        })
    })

    console.log('Button was clicked!');
    // in the "data" variable we are storing the responce come form the server and the responce is our 
    // shorten url we are going to desply it using the javascripts inner html 
    const data = await res.text();
    shorturl.innerText= "your short url:  "+data;
    console.log(data);

});

const URLs=document.getElementById('all_urls');
document.addEventListener('DOMContentLoaded', showurls);

async function showurls(){
    const res = await fetch('http://localhost:5000/allurls', {
        method:'GET',
        
    });

    const data= await res.json();
    console.log(data);

     data.forEach(element => {
        const urlslist= document.createElement('a');
        const brake=document.createElement('br');
        // urlslist.innerText="localhost:5000/api/"+element;

         urlslist.target="_blank";//this will make the link in new tab insead of current tab 
         urlslist.href="http://localhost:5000/api/"+element;
         urlslist.textContent="localhost:5000/api/"+element;
        //  urlslist.rel = 'noopener noreferrer';
         
        

        allurls.appendChild(urlslist);
        allurls.appendChild(brake)

    });

}

