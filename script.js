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

var wath = document.querySelector('.watch');

var endClickCounter = 0;

var nIntervId;

var nIntervId2;

var nIntervId3;

var msFunction = function() {
  var i = 0;
  nIntervId = setInterval(function() {
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
  nIntervId2 = setInterval(function() { 
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
    nIntervId3 = setInterval(function() { 
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

var hhh = function() {
  console.log( endClickCounter );
  endClickCounter = 1;
  console.log( endClickCounter );
};

start.addEventListener('click', secFunction, {once : true} );
start.addEventListener('click', minFunction, {once : true} );
start.addEventListener('click', msFunction, {once : true} );

end.addEventListener('click', hhh, {once : true});

end.addEventListener('click', function() {
  clearInterval(nIntervId), {once : true}; 
  clearInterval(nIntervId2), {once : true};
  clearInterval(nIntervId3), {once : true};
});



wath.addEventListener('click', function() {
  console.log( endClickCounter );
});
