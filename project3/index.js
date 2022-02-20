console.log("Index.js File!!!");

// Initializing the URL parameters:
let country = 'us'; 
let apiKey = 'c3deea4efcb344ba8621a2eb32304ea7';

// Grab the news container.
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request:
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function() {
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index){
            // console.log(articles[news]);
            let news = `
                        <p>
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                            aria-expanded="false" aria-controls="collapse${index}">
                            <b>News ${index+1}:</b> ${element["title"]}
                        </button>
                        </p>
                        <div style="min-height: 120px;">
                        <div class="collapse collapse-horizontal" id="collapse${index}">
                            <div class="card card-body" style="width: 300px;">
                                ${element["content"]}. <a href="${element["url"]}" target="_blank">Read more here</a>
                            </div>
                        </div>
                        </div>
                        `; 
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else{
        console.log('Error occured!!!');
    }
}

xhr.send();


