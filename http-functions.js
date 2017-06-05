var https = require('https');
module.exports = function getHTML (options, callback) {

  https.get(options, function (response) {
    var dataStr = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function() {
      callback(dataStr);
    });
  });

};

