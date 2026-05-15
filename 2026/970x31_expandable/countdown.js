var getTimeRemaining = function(endTime){
  var t = Date.parse(endTime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );

  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };

};

var initializeClock = function(id, endTime){
  var clock = document.getElementById(id);

  var days = $('.days');
  var hours = $('.hours');
  var minutes = $('.minutes');

  var updateClock = function(){
    var t = getTimeRemaining(endTime);

    //Leading number with zero
    var newDay = leadingZero(t.days);
    var newHours = leadingZero(t.hours);
    var newMinute = leadingZero(t.minutes);

    //Update the html
    days.children().eq(0).children().eq(0).html( newDay.toString().charAt(0) );
    days.children().eq(1).children().eq(0).html( newDay.toString().charAt(1) );
    hours.children().eq(0).children().eq(0).html( newHours.toString().charAt(0) );
    hours.children().eq(1).children().eq(0).html( newHours.toString().charAt(1) );
    minutes.children().eq(0).children().eq(0).html( newMinute.toString().charAt(0) );
    minutes.children().eq(1).children().eq(0).html( newMinute.toString().charAt(1) );

    if(t.total<=0){
      clearInterval(timeinterval);
    }
  };

  updateClock();

  var timeinterval = setInterval(updateClock, 1000);

};

var leadingZero = function(num){
  if(num < 10){
    num = '0' + num;
  }
  return num;
};
var countdown = function(deadline){
  initializeClock('countdown', deadline);
};

countdown($('.countdown').data('deadline'));

//countDownTimer($('.countdown').data('deadline'), $('.countdown').data('timeline-show'), $('.countdown').data('timeline-hide'), false);
