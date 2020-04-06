/**
 * read lines by file path
 */
const debug = require("debug")("readlineq");
const fs = require("fs");

/**
 * read file into lines
 * @param  {[type]} file_path [description]
 * @return {[type]}           [description]
 */
function _read(file_path) {
  var lines = [];
  return new Promise((resolve, reject) => {
    var lineReader = require("readline").createInterface({
      input: require("fs").createReadStream(file_path),
    });

    lineReader.on("line", function (line) {
      debug("Line from file: %s", line);
      lines.push(line);
    });

    lineReader.on("close", function (err) {
      debug("all lines are read, line size %d", lines.length);
      resolve(lines);
    });

    lineReader.on("error", function (err) {
      debug("error happens", err);
      reject(err);
    });
  });
}

// const JSONStream = require('JSONStream');
/**
 * Dump huge array to file
 * @param {*} to dump obj to file path
 * @param {*} obj JSONObject or JSONArray
 */
// function _write(to, obj) {
//     return new Promise((resolve, reject) => {
//         var records = obj
//         var transformStream = JSONStream.stringify();
//         var outputStream = fs.createWriteStream(to);
//         transformStream.pipe(outputStream);
//         records.forEach(transformStream.write);
//         transformStream.end();

//         outputStream.on(
//             "finish",
//             function handleFinish() {
//                 resolve();
//             }
//         );

//         outputStream.on(
//             "error",
//             function handleFinish(err) {
//                 reject(err);
//             }
//         );
//     });
// }
//
/**
 * Write lines to file
 * @param  {[type]} from_ [description]
 * @param  {[type]} to_   [description]
 * @return {[type]}       [description]
 */
function _write(lines, to_) {
  return new Promise((resolve, reject) => {
    var t = fs.createWriteStream(to_);
    t.on("open", function (fd) {
      for (let x of lines) {
        t.write(x);
      }
      t.end();
      resolve();
    });
  });
}

/**
 * write or read data
 * @param  {[type]} file_path [description]
 * @param  {[type]} obj       [description]
 * @return {[type]}           [description]
 */
exports = module.exports = function (file_path, obj) {
  if (obj) {
    return _write(obj, file_path);
  }
  return _read(file_path);
};
