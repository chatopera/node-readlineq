var test = require('ava')

test('Readlines # read', async (t)=>{
    var readlineq = require('../index.js');
    var lines = await readlineq('./tmp/stopwords.txt');
    // console.log(lines);
    t.pass()
})