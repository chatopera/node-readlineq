# readlineq
read or write file by lines with promise.

```
var readlineq = require('readlineq');
# read lines with Promise
var lines = await readlineq('./tmp/stopwords.txt');
// console.log(lines);

# write lines which is sync by default
readlineq('./tmp/test.txt', ["foo\n", "bar\n"]);
// console.log(lines);
```

# LICENSE
MIT

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/135558449-9739c98c-30aa-4b49-916b-87182520c0c6.png
[co-url]: https://www.chatopera.com