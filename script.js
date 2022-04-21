/**
 * Reference:
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises#async_and_await
 *  
 * This code returns 'baked beans' in the console
 */


async function fetchProducts() {
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error(`Could not get products: ${error}`);
    }
}

const jsonPromise = fetchProducts();
jsonPromise.then((json) => {
    console.log(json[0].name)
});