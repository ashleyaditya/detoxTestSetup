import {Given, setDefaultTimeout} from '@cucumber/cucumber';

setDefaultTimeout(60 * 1000);

Given('I start detox', async () => {
  console.log('Test started');
});
