var AriadnesThread = [];

(function() {

  this.AriadneJS = function() {

    var defaults = {
      delay: 600
    }

    this.options = extendDefaults(defaults, arguments[0]);

  }

  // Public Methods
  AriadneJS.prototype.init = function() {


    var eventDoc, doc, body, pageX, pageY;

    document.onmousemove = handleMouseMove;

    function handleMouseMove(event) {

      event = event || window.event; // IE

      // Calculate pageX/Y if missing and clientX/Y available
      if (event.pageX == null && event.clientX != null) {
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc      = eventDoc.documentElement;
        body     = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      pageX = event.pageX
      pageY = event.pageY

    }

    document.onmousedown = handleMouseDown;

    function handleMouseDown(event) {
      AriadnesThread.push(event.toElement + ':' + event.x + ':' + event.y);
      updateObj( '/api/ariadnes_threads', { thread: AriadnesThread });
    }

    window.onbeforeunload = handleBeforeUnload;

    var logger = setInterval(function() { AriadnesThread.push(document.documentElement.clientWidth + ':' + document.documentElement.clientHeight + ':' + pageX + ':' + pageY) }, this.options.delay);

    function handleBeforeUnload(event) { clearInterval(logger); }
  }

  // Private Methods
  function extendDefaults(source, properties) {

    var property;

    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }

    return source;

  }

  updateObj = function(url, params) {
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'script',
      data: params,
      error: function(jqXHR, testStatus, errorThrown) { },
      success: function(data) { }
    });
  }

  log = new AriadneJS();
  log.init();

}());