var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};
function someFunction(str){
  console.log(str);
}
getHTML(requestOptions,someFunction);