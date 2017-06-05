var https = require("https");
function getHTML (options,callback) {

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


}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions,printHTML);

