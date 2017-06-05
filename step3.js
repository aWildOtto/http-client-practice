var https = require("https");
function getAndPrintHTML (options) {

  https.get(options, function (response) {
    var dataStr = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function() {
      console.log(dataStr);
    });
  });


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
