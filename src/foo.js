const QUARTER_SECOND = 250; // 1000 miliseconds = 1 second

/**
 * Dummy "bar" named export which returns the provided number multiplied by two */
export const bar = number =>
   // This creates a promise which will resolve with 2x the provided number,
   // ... in exactly one second from now
   // NOTE: This code demonstrates how, as great as the async/await keywords
   //		are, we sometimes still need to work with promises
   new Promise(resolve =>
   		setTimeout
   			(() => resolve(number * 2),
   			QUARTER_SECOND)
   	);

   export const baz = message => console.log(`${message}!`);

   export default number => -1 * number