var animateButton = function(e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');
  
  e.target.classList.add('animate');
  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

var ms = document.querySelector('.miliseconds');

var sec = document.querySelector('.seconds');

var min = document.querySelector('.minutes');

var start = document.querySelector('.buttonStart');

var end = document.querySelector('.buttonEnd');

var msFunction = function() {
  var i = 0;
  setInterval(function() {
  if ( i <= 8 ) {
    i += 1;
    ms.textContent = '0' + i;
      } else {
        i += 1;
    ms.textContent = i;
      }
    if ( i > 58) {
      i = i - 60;
    }
  } , 16);

  };

var secFunction = function() {
  var i = 0;
  setInterval(function() { 
     if ( i <= 8 ) {
    i += 1;
    sec.textContent = '0' + i;
      } else {
        i += 1;
    sec.textContent = i;
      }
    if ( i > 58) {
      i = i - 60;
    }
  } , 1000);
     
  };

  var minFunction = function() {
    var i = 0;
    setInterval(function() { 
      if ( i <= 8 ) {
    i += 1;
    min.textContent = '0' + i;
      } else {
        i += 1;
    min.textContent = i;
      }
    if ( i > 58) {
      i = i - 60;
    }
      
    } , 60000);
        
    };

start.addEventListener('click', secFunction, {once : true} );
start.addEventListener('click', minFunction, {once : true} );
start.addEventListener('click', msFunction, {once : true} );

end.addEventListener('click', function() {
  clearInterval();
}); 