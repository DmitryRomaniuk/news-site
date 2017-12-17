export let counter = (function() {
    let instance;
    let initialCount = 0;
    const increaseCounter = () => initialCount++;
    const decreaseCounter = () => initialCount--;
    const getCounter = () => initialCount;
    const createInstance = () => { return { getCounter, increaseCounter, decreaseCounter }};
    return instance || (instance = createInstance());
})()
