/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jsdom',
  rootDir: 'src',
  setupFilesAfterEnv: ['./jest.setup.js'],
}

module.exports = config
