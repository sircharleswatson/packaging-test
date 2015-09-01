// Write your package code here!
Npm.require('shelljs/global');
Npm.require('electron-rebuild');

var fs = Npm.require('fs');
var os = Npm.require('os');

Electrometeor = {
    buildApp: function() {
        console.log(pwd(), ls());
        console.log("ASSETS", ls('assets/packages/quark_electron'))
        buildMeteorBundle()
        addAssets();
    }
}

function buildMeteorBundle() {

    var buildCommand = 'meteor build '
                     + '../../../../../'
                     + '.dist/meteor-build --directory'

    exec(buildCommand)

    mkdir('../../../../../.dist/meteor-build/resources');
    cd('../../../../../.dist/meteor-build/bundle/programs/server')
    pwd()
    exec('npm install');

    cd('../../../')
    pwd()
    exec('npm install');

    cd('./bundle/programs/server')


    // This code here is supposed to copy the 'mongod' and 'node' binaries to the
    // resources directory in the meteor bundle
    // it doesn't work on my comp because "which('mongod')" returns the path to
    // a symlink and I can't figure out how to reslove it.

    // cd('../../../../../.dist/meteor-build/bundle/programs/server')
    // var mongod = fs.realpathSync(which('mongod'));
    // console.log("MONGOD: ", mongod);
    // var bundleResourcesPath = path.join('../../../../../.dist/meteor-build/resources/');
    // cat(mongod).to(bundleResourcesPath + "mongod");

    // var node = fs.realpathSync(which('node'));
    // console.log("NODE: ", node);
    // var bundleResourcesPath = path.join('../../../../../.dist/meteor-build/resources/');
    // cat(node).to(bundleResourcesPath + "node");

}

function addAssets() {

    console.log("ADD ASSETS STARTING IN DIR: ", pwd())
    var indexJS = Assets.getText('index.js');
    var scriptPath = path.join('../../../../../.dist/meteor-build', "index.js");

    fs.writeFile(scriptPath, indexJS, function(err){
      if (err){
        console.error("ERROR WRITING ATOM CONTROL FILE", err);
      }

      console.log("wrote file: index.js")
    });

    var packageJSON = Assets.getText('package.json');
    var scriptPath = path.join('../../../../../.dist/meteor-build', "package.json");

    fs.writeFile(scriptPath, packageJSON, function(err){
      if (err){
        console.error("ERROR WRITING ATOM CONTROL FILE", err);
      }

      console.log("wrote file")
    });


}
