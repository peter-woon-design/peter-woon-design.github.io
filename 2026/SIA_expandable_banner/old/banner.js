
var Banner = {} || Banner;


if (Enabler.isInitialized()) {
  init();
} else {
  Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
}

// Runs when Enabler is ready.
function init() {
  if (Enabler.isPageLoaded()) {
    politeInit();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, politeInit);
  }
};

// Runs when the page is completely loaded.
function politeInit(){
  
  Banner.load();
  Banner.animate();
  Banner.slider();

};

Banner.animate = function(){

  var flower1 = document.getElementById('flower-1');
  var flower2 = document.getElementById('flower-2');

  var tween =  new TimelineLite({});

  tween.addLabel('flower')
    .to(flower1, 18, { x: 798, y: 30, rotation: 360, transformOrigin:"left top"}, 'flower')
    .to(flower2, 23, { x: 828, y: 380, delay: 3, rotation: 260, transformOrigin:"left top" }, 'flower');

    setInterval(function(){
      tween.restart();
    }, 10000);

};

Banner.load = function(){
  var isExpanded = false;
  var mainPanel = document.getElementById('main-panel');
  var expandedPanel = document.getElementById('expanded-panel');
  var collapsedPanel = document.getElementById('collapsed-panel');
  var expandedButton = document.getElementById('expand-button');
  var collapseButton = document.getElementById('collapse-button');
  var slider = document.getElementById('slider');
  var tween = new TimelineLite();
  var exitBtn = document.getElementById('bg-exit');
  var flower3 = document.getElementById('flower-3');

  mainPanel.style.display = 'block';
  expandedButton.addEventListener('click', actionClickHandler, false);
  collapseButton.addEventListener('click', actionClickHandler, false);

  function expandStartHandler() {
    // Perform expand animation.
    // Optionally, should you want the direction to expand in call:
    // Enabler.getExpandDirection(); //
    // When animation finished must call
    var tween = new TimelineLite();
    tween.to(collapsedPanel, 0, { display: 'none' });

    tween.addLabel('expand')
      .to(expandedPanel, 1, { display: 'block', height: 270 }, 'expand')
      .to(mainPanel, 1, { height: 270 }, 'expand');

    tween.to(slider, 1, { opacity: 1, delay: 0.1 });
    tween.to(collapseButton, 1, { opacity: 1, delay: 0.1 });

    tween.to(flower3, 23, { x: 828, y: -20, delay: 0.7, rotation: 260, transformOrigin:"left top" });

    Enabler.finishExpand();
  }

  function expandFinishHandler() {
    // Convenience callback for setting
    // final state when expanded.
    isExpanded = true;
  }

  function collapseStartHandler() {
    // Perform collapse animation.
    // When animation finished must call

    
      //.to(expandedPanel, 0, { display: 'none' });
    //tween.to(collapsedPanel, 0, { display: 'block' });

    // tween.addLabel('expand')
    //   .to(expandedPanel, 1, { display: 'block', height: 270 }, 'expand')
    //   .to(mainPanel, 1, { height: 270 }, 'expand');

    // tween.to(slider, 1, { opacity: 1, delay: 0.1 });
    // tween.to(collapseButton, 1, { opacity: 1, delay: 0.1 });

    Enabler.finishCollapse();
  }

  function collapseFinishHandler() {
    // Convenience callback for setting
    // final state when collapsed.
    var tween = new TimelineLite();
    isExpanded = false;

    tween.addLabel('collapse')
      .to(expandedPanel, 1, { display: 'none', height: 90 }, 'collapse')
      .to(mainPanel, 1, { height: 90 }, 'collapse')
      .to(slider, 1, { opacity: 0 }, 'collapse')
      .to(collapseButton, 0, { opacity: 0 }, 'collapse');

    tween.to(collapsedPanel, 0, { display: 'block' });
  }

  function actionClickHandler() {
    isExpanded ? Enabler.requestCollapse() : Enabler.requestExpand();
  }

  function bgExitHandler(e) {
    Enabler.exit('Background Exit', 'http://www.singaporeair.com/');
  }

  exitBtn.addEventListener('click', bgExitHandler, false);

  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH,expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START,collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH,collapseFinishHandler);



};

Banner.slider = function(){

  var navPrev = document.getElementById('slider__controls-prev');
  var navNext = document.getElementById('slider__controls-next');
  var sliderList1 = document.getElementById('slider__list-1');
  var sliderList2 = document.getElementById('slider__list-2');
  var pager = document.getElementById('slider__controls-pager');
  var pager1 = document.getElementById('pager-1');
  var pager2 = document.getElementById('pager-2');
  var pager3 = document.getElementById('pager-3');
  var tween = new TimelineLite();

  var currentIdx = 0;


  var moveSlide = function(current){
    tween.addLabel('slide')
      .to(sliderList1.children, 1, { opacity: 0, zIndex: 1, delay: 0.1 }, 'slide')
      .to(sliderList1.children[current], 1, { opacity: 1, zIndex: 2, delay: 0.1 }, 'slide')
      .to(sliderList2.children, 1, { opacity: 0, delay: 0.1, zIndex: 1 }, 'slide')
      .to(sliderList2.children[current], 1, { opacity: 1, delay: 0.1, zIndex: 2}, 'slide');
  };

  pager1.addEventListener('click', function(){
    moveSlide(0);
  });

  pager2.addEventListener('click', function(){
    moveSlide(1);
  });

  pager3.addEventListener('click', function(){
    moveSlide(2);
  });

  navPrev.addEventListener('click', function(){

    switch(currentIdx){
      case 0:
          currentIdx = 2;
          break;
      case 1:
          currentIdx = 0;
          break;
      case 2:
          currentIdx = 1;

          break;
      default:

    }

    moveSlide(currentIdx);
    
  });

  navNext.addEventListener('click', function(){

    switch(currentIdx){
      case 0:
          currentIdx = 1;
          break;
      case 1:
          currentIdx = 2;
          break;
      case 2:
          currentIdx = 0;
          
          break;
      default:

    }

    moveSlide(currentIdx);
    
  });

};

//actionBtn.addEventListener('click',actionClickHandler,false);



