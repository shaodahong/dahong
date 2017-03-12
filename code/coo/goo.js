// var express = require('express');
// var app = express();
// var request = require('request');
// var cheerio = require('cheerio');
// var phantom = require('phantom');
// phantom.create().then(function(ph) {
//     ph.createPage().then(function(page) {
//         page.setting('javascriptEnabled', true);
//         page.open('http://weibo.com/p/1005052569522534/photos?from=page_100505&mod=TAB#place').then(function(status) {
//             page.evaluate(function() {
//                 return document.getElementsById('pl_common_top');
//             }).then(function(document) {
//                 // console.log('arguments', arguments);
//                 console.log('document', document);
//             })
//             ph.exit();
//         })
//     });
// });
//
var phantom = require('phantom');

var sitepage = null;
var phInstance = null;
phantom.create()
    .then(instance => {
        phInstance = instance;
        return instance.createPage();
    })
    .then(page => {
        sitepage = page;
        return page.open('http://weibo.com/p/1005052569522534/photos?from=page_100505&mod=TAB#place');
    })
    .then(status => {
        console.log(status);
        return sitepage.property('content');
    })
    .then(content => {
        console.log(content);
        sitepage.close();
        phInstance.exit();
    })
    .catch(error => {
        console.log(error);
        phInstance.exit();
    });
