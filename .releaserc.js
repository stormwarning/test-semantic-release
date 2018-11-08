const releaseRules = require('@zazen/conventional-changelog/lib/release-rules')
const changelogTitle = require('@zazen/conventional-changelog/lib/changelog-title')

module.exports = {
  config: '@zazen/conventional-changelog',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: releaseRules,
      },
    ],
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogTitle: changelogTitle,
      },
    ],
    '@semantic-release/github',
  ],
}
