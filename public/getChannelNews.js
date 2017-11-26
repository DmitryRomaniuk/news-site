export default id => {
    const urlChannel = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=1013e5c10e394f778a09b8476d2b9570`;
    return fetch(urlChannel, {method: 'GET', mode: 'cors'})
        .then(response => response.json());
}