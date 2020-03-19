# ![General Assembly Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) SOFTWARE ENGINEERING IMMERSIVE

# Jest + Enzyme Homework

For this homework, you're going to be redoing an assignment you already did, this time in a test-driven manner! You're going to be re-writing the [Password Validator lab](https://git.generalassemb.ly/sei-nyc-supernovas/react-password-validator), but with tests.

1. Fork, clone, and `cd` into this repository.

2. Create your new React app.

```bash
$ npx create-react-app password-validator-testing
```

3. Install the dependencies for your Enzyme environment.

```bash
$ npm install enzyme enzyme-adapter-react-16 react-test-renderer
```

Also, add the following code to the top of your `setupTests.js`

```js
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
```

4. Write a test to make sure that when you type in the `username` field, state updates to match what is typed in the field. Then, write React code to pass your test.

5. Write a test to make sure that when you type in the `password` field, state updates to match what is typed in the field. Then, write React code to pass your test.

6. Write a test to make sure that when you type in the `passwordConfirm` field, state updates to match what is typed in the field. Then, write React code to pass your test.

7. Write a test to make sure that when you press a `submit` button, the `valid` field in state updates based on whether `password` and `passwordConfirm` are equal. Then, write React code to pass your test.

8. Write a test to make sure that a message about whether or not `valid` is true shows up on the page. Then, write React code to pass your test.

Your React code **should** match your code for the original Password Validator lab. Just this time, you are writing the code incrementally, following TDD best practices.

## Hungry for more?

Do the bonuses for [Password Validator](https://git.generalassemb.ly/sei-nyc-supernovas/react-password-validator) with testing!
