import BrowserFactory from './browser-base';

const desiredCapabilities = {
  browserName: 'chrome',
  chromeOptions: {
    'args': [
      '--headless'
    ]
  }
};
export default BrowserFactory({desiredCapabilities});
