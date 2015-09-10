(function() {
  "use strict"
  
  function *naturalNumbers(){
    var n = 0
    while (true){
      yield n++
    }
  }

  var gen = naturalNumbers()
  console.log(gen.next());
  console.log(gen.next());
})();

