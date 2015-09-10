(function() {
  "use strict"

  var s = new Set;
  s.add("a");
  s.add("b");
  s.add("c");
  console.log(s.size);
  console.log("whther has a: " + s.has("a"));
})();

