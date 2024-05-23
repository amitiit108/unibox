// tests/setup.js
const { beforeEach, afterEach } = require('@jest/globals');

beforeEach(() => {
  jest.resetModules();
});

afterEach(() => {
  jest.clearAllMocks();
});
