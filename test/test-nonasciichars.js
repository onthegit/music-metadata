var fs = require('fs'),
    mm = require('../lib/index'),
    assert = require('./assert-ext'),
    testHelper = require('./testHelper');
    
testHelper.expected = 1;
var sample = require('path').join(__dirname, 'samples/bug-non ascii chars.mp3');
var parser = new mm(fs.createReadStream(sample));

parser.on('metadata', function(result) {
  assert.strictEqual(result.artist[0], 'Janelle Monáe');
});