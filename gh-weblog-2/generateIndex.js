var fs = require('fs');
var path = require('path');
var dir = process.cwd();
if (!dir.match('gh-weblog.gh-weblog')) {
  dir = dir + "/gh-weblog-2";
}
dir += "/content/posts";
var md = dir + "/markdown";
var meta = dir + "/metadata";

var index = require(dir + "/index.json");
if (index.index) {
  var ids = index.index;
  delete index.index;
  ids.forEach(function(id) {
    var metadata = require(meta + '/' + id + '.json');
    index[id] = metadata;
  });
}

fs.writeFileSync(dir + "/toc.json", JSON.stringify(index,false,2));
