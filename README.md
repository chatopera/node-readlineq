# readlineq
read or write file by lines with promise.

```
var readlineq = require('readlineq');
# read lines
var lines = await readlineq('./tmp/stopwords.txt');
// console.log(lines);

# write lines
await readlineq('./tmp/test.txt', ["foo\n", "bar\n"]);
// console.log(lines);
```

# LICENSE
MIT