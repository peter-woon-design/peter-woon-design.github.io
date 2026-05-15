
var creative = {};
var tl;

/**
 * Window onload handler.
 */
function preInit() {
  setupDom();

  if (Enabler.isInitialized()) {
    init();
  } else {
    Enabler.addEventListener(
      studio.events.StudioEvent.INIT,
      init
    );
  }
}

/**
 * Initializes the ad components
 */
function setupDom() {
  creative.dom = {};
  creative.dom.mainContainer = document.getElementById('main-container');
  creative.dom.expandedExit = document.getElementById('expanded-exit');
  creative.dom.expandedContent = document.getElementById('expanded-state');
  creative.dom.collapsedExit = document.getElementById('collapsed-exit');
  creative.dom.collapsedContent = document.getElementById('collapsed-state');
  creative.dom.collapseButton = document.getElementById('collapse-button');
  creative.dom.expandButton = document.getElementById('expand-button');
  creative.dom.image0 = document.getElementById('main-img-0');
  creative.dom.hl = document.getElementById('hl');
  creative.dom.line = document.getElementById('line');
  creative.dom.pp = document.getElementById('pp');
  creative.dom.pp1 = document.getElementById('pp1');
  creative.dom.pp2 = document.getElementById('pp2');
  creative.dom.pp3 = document.getElementById('pp3');
  creative.dom.countdown = document.getElementById('countdown');
  creative.dom.cta = document.getElementById('cta');
  creative.dom.terms = document.getElementById('terms');
}

/**
 * Ad initialisation.
 */
function init() {
  Enabler.setStartExpanded(true);

  addListeners();

  // Polite loading
  if (Enabler.isVisible()) {
    show();
  }
  else {
    Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
  }
}

/**
 * Adds appropriate listeners at initialization time
 */
function addListeners() {
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
  Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
  creative.dom.expandButton.addEventListener('click', onExpandHandler, false);
  creative.dom.collapseButton.addEventListener('click', onCollapseClickHandler, false);
  creative.dom.expandedExit.addEventListener('click', exitClickHandler);
  creative.dom.collapsedExit.addEventListener('click', collapsedExitClickHandler);
}

/**
 *  Shows the ad.
 */
function show() {
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';

  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';
  creative.dom.image0.style.visibility  = 'visible';

  onExpandHandler();
}

// ---------------------------------------------------------------------------------
// MAIN
// ---------------------------------------------------------------------------------


function expandStartHandler() {
  // Show expanded content.
  creative.dom.expandedContent.style.display = 'block';
  creative.dom.expandedExit.style.display = 'block';
  creative.dom.collapseButton.style.display = 'block';
  creative.dom.collapsedContent.style.display = 'none';
  creative.dom.collapsedExit.style.display = 'none';
  creative.dom.expandButton.style.display = 'none';

  console.log('expand start');

  Enabler.finishExpand();
}

function expandFinishHandler() {
  creative.isExpanded = true;
  console.log('expand finish');
}

function collapseStartHandler() {
  // Perform collapse animation.
  creative.dom.expandedContent.style.display = 'none';
  creative.dom.expandedExit.style.display = 'none';
  creative.dom.collapseButton.style.display = 'none';
  creative.dom.collapsedContent.style.display = 'block';
  creative.dom.collapsedExit.style.display = 'block';
  creative.dom.expandButton.style.display = 'block';

  // When animation finished must call
  Enabler.finishCollapse();
  tl.kill();
  console.log('collapse start');
}

function collapseFinishHandler() {
  creative.isExpanded = false;
  console.log('collapse finish');
}

function onCollapseClickHandler(){
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
}

function onExpandHandler(){
  Enabler.requestExpand();
  Enabler.startTimer('Panel Expansion');
  //Enabler.finishExpand();
  startAnimation();
}

function exitClickHandler() {
  Enabler.requestCollapse();
  Enabler.stopTimer('Panel Expansion');
  Enabler.exit('BackgroundExit');
}

function collapsedExitClickHandler() {
  Enabler.exit('CollapsedExit');
}

function startAnimation() {

  console.log(creative.dom.line);
  tl = new TimelineLite();
  //tl.timeScale(2);

  tl.set([ creative.dom.h1, creative.dom.line, creative.dom.pp1, creative.dom.pp2, creative.dom.pp3, creative.dom.countdown ],  {clearProps:'all'});

  tl.to( creative.dom.hl, 0.8, { opacity: 1, ease: Quart.easeOut } );
  tl.to( creative.dom.line, 2, { width: 711, ease: Quart.easeOut }, '-=0.8' );
  tl.to( creative.dom.pp, 1.6, { opacity: 1, ease: Quart.easeOut }, '-=2' );

  tl.to( creative.dom.pp, 0.8, { opacity: 0, ease: Quart.easeOut } );
  tl.to( creative.dom.hl, 0.8, { opacity: 0, ease: Quart.easeOut }, '-=0.8' );

  tl.to( creative.dom.pp1, 0.8, { opacity: 1, ease: Quart.easeOut } );

  tl.to( creative.dom.pp1, 0.8, { opacity: 0, ease: Quart.easeOut }, '+=2.5' );
  tl.to( creative.dom.pp2, 0.8, { opacity: 1, ease: Quart.easeOut } );


  tl.to( creative.dom.pp2, 0.8, { opacity: 0, ease: Quart.easeOut }, '+=2.5' );
  tl.to( creative.dom.pp3, 0.8, { opacity: 1, ease: Quart.easeOut } );
  tl.to( creative.dom.countdown, 0.8, { opacity: 1, ease: Quart.easeOut }, '-=0.8' );
  tl.fromTo( creative.dom.cta, 1.2, {  opacity: 0 }, { opacity: 1, ease: Quart.easeOut }, '-=0.8' );
  tl.fromTo( creative.dom.terms, 1.2, {  opacity: 0 }, { opacity: 1, ease: Quart.easeOut }, '-=0.8' );


}


/**
 *  Main onload handler
 */
window.addEventListener('load', preInit);
