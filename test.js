import alert from "./index.js";

console.clear();

alert({ type: `info`, msg: `It's Raining here!` });
alert({ type: `error`, msg: `No I cant be wrong!` });
alert({ type: `warning`, msg: `I dont like wanings!` });
alert({ type: `success`, msg: `Who doesn't like to be a successfull!` });
alert({ type: `success`, msg: `Compiled Successfully!`, name: `DONE` });
alert();
