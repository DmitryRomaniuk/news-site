import '../src/style.less';
import '../src/check.json';

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('load-main').addEventListener('click', () => {
        $('#load-main').hide();
        return import(/* webpackChunkName: "./loadMainPage" */ './loadMainPage').then(loadMainPage => {
                return loadMainPage.default();
            }).catch(error => 'An error occurred while loading the component');
    });
});
