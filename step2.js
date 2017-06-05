var https = require("https");
function getAndPrintHTML (callback) {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    var dataStr = "";

    response.setEncoding('utf8');

    response.on('data', function (data) {
      dataStr += data;
    });

    response.on('end', function() {
      callback(dataStr);
    });


  });
}

function printHTML(html){
  console.log(html);
}


getAndPrintHTML(printHTML);
