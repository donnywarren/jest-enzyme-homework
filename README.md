[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Jest + Enzyme Homework

For this homework, you're going to be redoing an assignment you already did, this time in a test-driven manner! You're going to be re-writing the Password Validator lab, but with tests.

1. Clone this repository down and `cd` into it.

1. Run Create React App

```
$ npx create-react-app password-validator-testing
```

1. Configure your Enzyme environment

```
$ enzyme enzyme-adapter-react-16 react-test-renderer
```

Also, add the following code to your `setupTests.js`

```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```

1. Write a test to make sure that when you type in the `username` field, state updates to match what is typed in the field. Then, write React code to pass your test.

1. Write a test to make sure that when you type in the `password` field, state updates to match what is typed in the field. Then, write React code to pass your test.

1. Write a test to make sure that when you type in the `passwordConfirm` field, state updates to match what is typed in the field. Then, write React code to pass your test.

1. Write a test to make sure that when you press a `submit` button, the `valid` field in state updates based on whether `password` and `passwordConfirm` are equal. Then, write React code to pass your test.

1. Write a test to make sure that a message about whether or not `valid` is true shows up on the page. Then, write React code to pass your test.

Your React code should match your code for the original Password Validator lab. Just this time, you are writing the code incrementally based on your tests.
