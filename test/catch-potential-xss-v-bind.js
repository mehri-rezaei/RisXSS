import test from 'ava';
import avaRuleTester from 'eslint-ava-rule-tester';
import rule from '../rules/catch-potential-xss-v-bind';

const ruleTester = avaRuleTester(test, {
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  }
});

function testCase(code) {
  return {
    code,
    errors: [{ ruleId: 'catch-potential-xss-v-bind' }]
  };
}

ruleTester.run('catch-potential-xss-v-bind', rule, {
  valid: [
  ]
	invalid: [
	 testCase(`
     <a v-bind:href="userProvidedUrl">
  click me
</a>
    `),
});
