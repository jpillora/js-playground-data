

var stream = require('stream');


TestStream.prototype = Object.create(stream.Writable.prototype, {
  constructor: { value: TestStream }
});
function TestStream(options) {
  stream.Writable.call(this, options);
}
TestStream.prototype._write = function(chunk, encoding, callback) {
  console.log("TEST STREAM WRITE", chunk);
  callback();
};
TestStream.prototype.destroy = function() {
  console.log("TEST STREAM DESTROY");
};

module.exports = TestStream;