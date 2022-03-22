# cli-alert-msg

<h4 align="center">
  

Let you Alert with colors &amp; colored symbols for success, info, warning, error in CLI
<br>
Work on macOS, Linux, and Windows.


<br>


## Installation

### npm

```sh
npm install cli-alert-msg
```

### Yarn

```sh
yarn add cli-alert-msg
```

<br>


## Usage

```js
import alert = from 'cli-alert-msg';

// Provide the type, msg, and name options.
alert({type: `success`, msg: `Who doesn't like to be a successfull!`});
// Prints: ✔ SUCCESS Who doesn't like to be a successfull!

alert({type: `success`, msg: `Compiled Successfully!`, name: `FINISHED`});
// Prints: ✔ FINISHED Compiled Successfully!

alert({type: `warning`, msg: `I dont like wanings!`});
// Prints: ⚠ WARNING I dont like wanings!

alert({type: `info`, msg: `It's Raining here!`});
// Prints: ℹ INFO It's Raining here!

alert({type: `error`, msg: `No I cant be wrong!`});
// Prints: ✖ ERROR No I cant be wrong!
```

<br />


## API

### alert(options)

#### ❯ options

Type: `object`<br>
Default: `{}`

You can specify the options below.

##### ❯ type

Type: `string`<br>
Default: `error`

##### ❯ msg

Type: `string`<br>
Default: `I forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>


## License

- MIT © [cslam07](https://twitter.com/CSALam12/)
