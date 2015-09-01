// Write your package code here!

if (Meteor.isServer) {
    Packager = Npm.require('electron-packager');
}

PackageApp = {
    getMongo: function() {
        exec('which mongo')
    },
    run: function() {

        Packager({
            dir: "/Users/watson/Development/Meteor/packagingTest/.dist/meteor-build",
            name: "Testing",
            platform: "darwin",
            arch: "x64",
            version: "0.30.4",
            out: "/Users/watson/Development/Meteor/packagingTest/.dist/",
            overwrite: true
        }, function(err, appPath) {
            if (err) {
                console.log("ERROR PACKAGING APP: ", err)
            }

            console.log("APP PATH!!!: ", appPath);
        })

    }

}
