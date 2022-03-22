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
alert({type: `success`, msg: `Everything finished!`});
// Prints: ✔ SUCCESS Everything finished!

alert({type: `success`, msg: `Everything finished!`, name: `DONE`});
// Prints: ✔ DONE Everything finished!

alert({type: `warning`, msg: `You didn't add something!`});
// Prints: ⚠ WARNING You didn't add something!

alert({type: `info`, msg: `Hello Wrold!`});
// Prints: ℹ INFO Helo World!

alert({type: `error`, msg: `Something went wrong!`});
// Prints: ✖ ERROR Something went wrong!
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
Default: `You forgot to define all options.` (Error message)

##### ❯ name

Type: `string`<br>
Default: `''` (Empty string)

<br>


## License

- MIT © [cslam07](https://twitter.com/CSALam12/)
