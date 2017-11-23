const url = 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=1013e5c10e394f778a09b8476d2b9570';
fetch(url, {method: 'GET', mode: 'cors'})
    .then(response => response.json())
    .then(response => console.log(response));