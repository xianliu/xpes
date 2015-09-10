(function() {
  "use strict"
  
  function LLNode(value){
    this.value = value
    this.next = null
  }

  LLNode.prototype[Symbol.iterator] = function(){
    var iterator = {
      next: next
    }
    var current = this
    function next(){
      if (current){
        var value = current.value
        var done = current == null
        current = current.next
        return {
          done: done,
          value: value
        }
      }else{
        return {
          done: true
        }
      }
    }
    return iterator
  }

  var one = new LLNode(1)
  var two = new LLNode(2)
  var three = new LLNode(3)
  one.next = two
  two.next = three

  for (var i of one){
     console.log(i)
  }

})();

