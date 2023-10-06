// SDK initialization

var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey: "public_K2nmvToBNySSWKnnKKOaANW0VqI=",
    privateKey: "private_mbTL3B0UORs+dcxzhb/xVf0BqJg=",
    urlEndpoint: "https://ik.imagekit.io/wrc4m5qrl"
});

module.exports = imagekit;