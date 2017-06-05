var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};



function print1337 (html) {
  html = html.
  replace(/you/ig,"j00").
  replace(/er/ig,"0r").
  replace(/ck/ig,"x").
  replace(/a/ig,"4").
  replace(/e/ig,"3").
  replace(/l/ig,"1").
  replace(/t/ig,"7").
  replace(/o/ig,"0").
  replace(/s/ig,"5")
  ;
  console.log(html);
}

getHTML(requestOptions, print1337);
