Package.describe({
  name: 'build-desktop',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "shelljs": "0.5.3",
  "electron-rebuild": "0.2.5"
})

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('build-desktop.js', "server");
  api.addFiles(['index.js', 'package.json'], 'server', {isAsset: true});
  api.export("Electrometeor", "server");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('build-desktop');
  api.addFiles('build-desktop-tests.js');
});
