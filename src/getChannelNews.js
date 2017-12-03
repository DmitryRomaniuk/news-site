export default async id => {
    const urlChannel = `https://newsapi.org/v2/top-headlines?sources=${id}&apiKey=1013e5c10e394f778a09b8476d2b9570`;
    const response = await fetch(urlChannel, {method: 'GET', mode: 'cors'});
    return await response.json();
}