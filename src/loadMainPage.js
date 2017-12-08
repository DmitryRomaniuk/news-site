import getChannelNews from './getChannelNews';

export default () => {
    console.log(1);
    document.querySelector('.list-news').addEventListener('click', event => {
        $('.list-news').hide();
        $('#back-to-list').show();
        const getArticles = async () => {
            const {articles} = await getChannelNews(event.target.parentNode.id);
            const wrapper = document.createElement( "div" );
            articles.forEach(({ description, title, author, url, urlToImage }) => {
                const article = document.createElement( "article" );
                article.classList.add('col-12', 'col-md-6', 'one-article');
                const titleDiv = document.createElement( "div" );
                const image = document.createElement( "img" );
                image.setAttribute('src', urlToImage);
                const link = document.createElement( "a" );
                link.setAttribute('href', url);
                link.innerText = title;
                titleDiv.appendChild(link);
                const descriptionDiv = document.createElement( "div" );
                descriptionDiv.innerText = description;
                const authorDiv = document.createElement( "div" );
                authorDiv.innerText = (!!author)? `Author: ${author}`: null;
                article.appendChild(image);
                article.appendChild(authorDiv);
                article.appendChild(titleDiv);
                article.appendChild(descriptionDiv);
                wrapper.appendChild(article);
            });
            wrapper.classList.add('row');
            document.querySelector('.channel-show-news').appendChild(wrapper);
            $('.channel-news').show();
        }
        getArticles();
    });
    
    document.querySelector('#back-to-list').addEventListener('click', () => {
        $('#back-to-list').hide();
        $('.channel-show-news').children().remove();
        $('.list-news').show();
    });

    const urlChannel = `https://newsapi.org/v2/sources?language=en&apiKey=1013e5c10e394f778a09b8476d2b9570`;
    var myHeaders = new Headers();

    const getDataForMain = async () => {
        const response = await fetch(urlChannel, {method: 'GET', mode: 'cors', headers: myHeaders,})
        const {sources} = await response.json();
        const wrapper = document.createElement( "div" );
        sources.forEach(({ id, name, description, url }) => {
            const link = document.createElement( "a" );
            link.setAttribute('href', '#');
            link.setAttribute('title', name);
            link.setAttribute('id', id);
            const img = document.createElement( "img" );
            img.setAttribute('alt', id);
            const createUrl = `https://icons.better-idea.org/icon?url=${url}&amp;size=70..120..200`
            img.setAttribute('src', createUrl);
            img.classList.add('icon', 'logo');
            link.appendChild(img);
            const divTitle = document.createElement( "div" );
            divTitle.setAttribute('title', name);
            divTitle.classList.add('title');
            divTitle.innerText = name;
            link.appendChild(divTitle);
            const divDescription = document.createElement( "div" );
            divDescription.setAttribute('title', name);
            divDescription.classList.add('description');
            divDescription.innerText = description;
            link.appendChild(divDescription);
            const divKbd = document.createElement( "div" );
            const kbd = document.createElement( "kbd" );
            kbd.innerText = id;
            divKbd.appendChild(kbd);
            link.appendChild(divKbd);
            const article = document.createElement( "article" );
            article.classList.add('col-12', 'col-md-6');
            article.appendChild(link);
                wrapper.appendChild(article);
            wrapper.classList.add('row');
            document.querySelector('.list-news').appendChild(wrapper);
        });
    }

    return getDataForMain();
}