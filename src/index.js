import '../src/style.less';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('load-main').addEventListener('click', () => {
        $('#load-main').hide();
        return import(/* webpackChunkName: "./loadMainPage" */ './loadMainPage').then(loadMainPage => {
                return loadMainPage.default();
            }).catch(error => 'An error occurred while loading the component');
    });
});