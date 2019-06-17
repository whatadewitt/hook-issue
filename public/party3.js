(function(window) {
  var PartyThree = function() {
    // constructor
    this.options = {};
  };

  PartyThree.prototype.setup = function(options) {
    console.log(options);
    if (this instanceof PartyThree) {
      this.options = options;

      // if ("onSubmit" in options) {
      //   addDepEvent(document.body, "partySubmit", options.onSubmit);
      // }

      if ("onResize" in options) {
        window.onresize = options.onResize;
      }
    }
  };

  // function addDepEvent(obj, type, fn) {
  //   // cross browser add event listener
  //   if (obj.addEventListener) {
  //     obj.addEventListener(type, fn, false);
  //     vindiciaEventCache.add(obj, type, fn);
  //   } else if (obj.attachEvent) {
  //     obj["e" + type + fn] = fn;
  //     obj[type + fn] = function() {
  //       obj["e" + type + fn](window.event);
  //     };
  //     obj.attachEvent("on" + type, obj[type + fn]);
  //     vindiciaEventCache.add(obj, type, fn);
  //   } else {
  //     obj["on" + type] = obj["e" + type + fn];
  //   }
  // }

  window.PartyThree = PartyThree;
})(window);
var p3 = new PartyThree();
