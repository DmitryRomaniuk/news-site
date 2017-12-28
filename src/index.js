import './style.less';
import './check.json';
import Observer from './observer';
import FacadeCredit from './facade';
import { counter } from './singleTone';
import createStore from './redux-store';

let counterObserver = new Observer();
console.log(counter.getCounter());
counter.increaseCounter();
counter.increaseCounter();
console.log(counter.getCounter());
counter.decreaseCounter();
console.log(counter.getCounter());
counterObserver.subscribe((data) => {
    console.log('first subscription is invoked with data ', data)
});
counterObserver.subscribe((data) => {
    console.log('second subscription is invoked with data ', data)
});
counterObserver.broadcast(counter.getCounter());

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('load-main').addEventListener('click', () => {
        $('#load-main').hide();
        return import(/* webpackChunkName: "./loadMainPage" */ './loadMainPage').then(loadMainPage => {
                return loadMainPage.default();
            }).catch(error => 'An error occurred while loading the component');
    });
});

const credit = new FacadeCredit('Dmitry');
const creditSmall = credit.applyFor(99);
const creditMedium = credit.applyFor(199);
const creditLarge = credit.applyFor(99999);
console.log('creditSmall', creditSmall);
console.log('creditMedium', creditMedium);
console.log('creditLarge', creditLarge);


const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1;
      case 'DECREMENT':
        return state - 1;
      default:
        return state;
    }
  }

const store = createStore(counterReducer);

store.subscribe(() => {
  document.getElementsByClassName('redux-counter')[0].innerHTML = store.getState();
});

document.addEventListener('click', () => {
    store.dispatch({ type : 'INCREMENT' })
});