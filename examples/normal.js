"use strict";
/**
 * @file normal example
 * @module express-sitemap
 * @package express-sitemap
 * @subpackage examples
 * @version 0.0.1
 * @author hex7c0 <hex7c0@gmail.com>
 * @license GPLv3
 */

/*
 * initialize module
 */
// import
try {
    var sitemap = require('../index.js'); // use require('express-sitemap') instead
    var app = require('express')();
} catch (MODULE_NOT_FOUND) {
    console.error(MODULE_NOT_FOUND);
    process.exit(1);
}

// express routing
app.get('/',function(req,res) {

    res.send('hello /');
});

app.get('/admin',function(req,res) {

    res.send('hello /admin');
});
app.post('/admin',function(req,res) {

    res.send('hello /admin');
});

app.get('/duplicate',function(req,res) {

    res.send('hello /duplicate');
}).get('/duplicate/:id',function(req,res) {

    res.send('hello /duplicate');
});

app.post('/foo',function(req,res) {

    res.send('hello /foo');
});

app.put('/nooo',function(req,res) {

    res.send('hello /nooo');
});

app.all('/all',function(req,res) {

    res.send('hello /all');
});

/*
 * sitemap
 */
sitemap({
    file: 'normal.xml',
    route: {
        '/': {
            lastmod: '2014-06-19',
            changefreq: 'always',
            priority: 1.0,
        },
        '/admin': {
            lastmod: '2014-06-20',
            changefreq: 'never',
        },
    },
    generate: app,
}).toFile();
console.log('file wrote');
