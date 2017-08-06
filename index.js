/**
 * read lines by file path
 */
const debug = require('debug')('readlineq');

 exports = module.exports = function(file_path) {
    var lines = []
    return new Promise((resolve, reject) => {
        var lineReader = require('readline').createInterface({
            input: require('fs').createReadStream(file_path)
        });

        lineReader.on('line', function (line) {
            debug('Line from file: %s', line);
            lines.push(line);
        });

        lineReader.on('close', function (err) {
            debug('all lines are read, line size %d', lines.length);
            resolve(lines);
        })

        lineReader.on('error', function (err) {
            debug('error happens', err);
            reject(err)
        })
    });
}