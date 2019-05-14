var sec = document.querySelector('.seconds');

var min = document.querySelector('.minutes');

var start = document.querySelector('.buttonStart');

var end = document.querySelector('.buttonEnd');

var secFunction = function() {
  var i = 0;
  setInterval(function() { 
    i += 1;
    sec.textContent = i;
    if ( i > 58) {
      i = i - 60;
    }
  } , 1000);
      
  };

  var minFunction = function() {
    var i = 0;
    setInterval(function() { 
      i += 1;
      min.textContent = i;
      
    } , 60000);
        
    };

start.addEventListener('click', secFunction, {once : true} );
start.addEventListener('click', minFunction, {once : true} );



end.addEventListener('click', function() {

  sec.textContent = 0;
});

for ( var i = 0; i < 61; i++ ) {

}