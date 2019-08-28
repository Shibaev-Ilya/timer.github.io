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

var res = document.querySelector('.buttonReset');

var add = document.querySelector('.addCalc');

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
  start.removeEventListener('click', msFunction);
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
  start.removeEventListener('click', secFunction); 
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
    start.removeEventListener('click', minFunction);  
    };

var hhh = function() {
  if (endClickCounter == 1) {
    endClickCounter = 0;
  }
  if (endClickCounter == 0) {
    endClickCounter = 1;
  }
  
  console.log( endClickCounter );
};

start.addEventListener('click', secFunction);
start.addEventListener('click', minFunction);
start.addEventListener('click', msFunction);

end.addEventListener('click', hhh);
end.addEventListener('click', function() {
  clearInterval(nIntervId), {once : true}; 
  clearInterval(nIntervId2), {once : true};
  clearInterval(nIntervId3), {once : true};
  
});

res.addEventListener('click', function() { if (endClickCounter == 1) { start.addEventListener('click', secFunction);} });
res.addEventListener('click', function() { if (endClickCounter == 1) { start.addEventListener('click', minFunction);} });
res.addEventListener('click', function() { if (endClickCounter == 1) { start.addEventListener('click', msFunction);} });

res.addEventListener('click', function() { 
  
  if (endClickCounter == 1) {
    min.textContent = '00';
    sec.textContent = '00';
    ms.textContent = '00';
    endClickCounter = 0 ;
  }
  console.log( endClickCounter );
  });


  add.addEventListener('click', function() {});

