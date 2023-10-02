
fetchquotes=()=>{

    let randomquotes=Math.floor(Math.random(quotes)*10)
    
    fetch('https://type.fit/api/quotes').then((data)=>{
        return data.json()
    }).then((quotes)=>{
        document.getElementById('quotes').innerText=quotes[randomquotes].text
        document.getElementById('author').innerText=quotes[randomquotes].author

    })

}

fetchquotes();

