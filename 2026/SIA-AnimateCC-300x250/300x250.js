(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:



(lib._1 = function() {
	this.initialize(img._1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib._4 = function() {
	this.initialize(img._4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5C5B5D").s().p("AgIgBIAKgHIAIAKIgMAHg");
	this.shape.setTransform(70,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgDgFgDgHQgBgFAAgIQAAgHACgGQACgGAEgFQAJgLANAAQAFAAAEACQAFABADADIAFAGQABAEAAAEQAAAEgEABQgCABgIAAIgaAAIgBAIQAAAMAGAGQACAFAFACQADACAGAAQAFAAAFgCQAEgCAEgDIAAACQAAADgDACQgBADgEACQgHAFgJAAQgGAAgFgDgAgMgNIAOAAQAHAAACgBQACgBAAgEQAAgFgCgDQgDgDgGgBQgKAAgEASg");
	this.shape_1.setTransform(65.1,20.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5C5B5D").s().p("AAfAjIAAgoQAAgKgDgFQgDgFgGAAQgDAAgEABQgCACgBADQgDAFAAAKIAAAXQAAAMADAEIgQAAQADgEAAgMIAAgYQAAgKgDgFQgDgFgGAAQgDAAgEABIgEAFQgCAFAAAKIAAAXQAAAMADAEIgRAAQACgEAAgMIAAgjQAAgMgCgDIAPgBIAAAFIAAADIABAAIgBAAIAGgFIAHgDIAGgCQAGAAADADQACACACAEQAAABABABQAAAAAAAAQABABAAAAQAAAAABAAIACgDIAHgGQAFgDAEAAQAIAAAFAFQAEAFAAAKIAAAhQAAAMADAEg");
	this.shape_2.setTransform(56.7,20.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5C5B5D").s().p("AgPAhQgGgCgEgGQgGgJAAgNQAAgJACgGQACgIAFgEQAFgFAGgDQAHgDAHAAQAHAAAGADQAFADAEAFQAHAJAAANQAAAIgCAHQgDAIgEAEQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEACAFABQAIgBAFgGQAEgHAAgNIgBgNQgBgFgCgFQgGgKgKgBQgJABgEAGg");
	this.shape_3.setTransform(48,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5C5B5D").s().p("AAOA0IAAgoQAAgKgBgEQgCgDgDgBQgDgCgEAAQgGABgEAEQgDAEAAALIAAAYQAAAMADAEIgRAAQADgEAAgMIAAhGQAAgMgEgDIAPgCIAAAqQAAABAAAAQAAABAAAAQAAAAABAAQAAABAAAAIACgDQAEgDADgBQAEgDAFAAQAKAAAEAFQAFAFgBAJIAAAhQABAMACAEg");
	this.shape_4.setTransform(40.9,18.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_5.setTransform(31.6,19.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5C5B5D").s().p("AgVAgQgCgCgBgEQgCgDAAgEQAAgEADgDQACgFAGgDIAPgHIAJgFQACgDAAgGQAAgGgDgEQgCgDgGgBQgFAAgEAEIgDAHQgCAEgEAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAgHAJgEIAIgCIAJgBQATAAAAANIAAAgIABAMQAAAIADADIgNABIgBgGQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgCAAIgFAIQgEADgHAAQgIAAgGgEgAADAAQgIAFgEACQgEAEAAAGQAAAFADADQADADAFAAQAGgBAEgFQADgEAAgHIAAgPg");
	this.shape_6.setTransform(26.5,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5C5B5D").s().p("AgGA0QACgEAAgMIAAhGQAAgMgEgDIAOgCIAABXQAAAMADAEg");
	this.shape_7.setTransform(17.7,18.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5C5B5D").s().p("AgKAhQgFgDgEgFQgDgFgDgHQgBgFAAgIQAAgHACgGQACgGAEgFQAIgLAOAAQAFAAAFACQAEABADADIAEAGQACAEAAAEQAAAEgDABQgDABgIAAIgaAAIAAAIQAAAMAEAGQADAFAEACQAEACAFAAQAGAAAFgCQAEgCADgDIAAACQAAADgBACQgCADgEACQgHAFgJAAQgGAAgGgDgAgMgNIAPAAQAGAAACgBQACgBABgEQAAgFgEgDQgDgDgFgBQgKAAgEASg");
	this.shape_8.setTransform(12.9,20.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgDgFgCgHQgCgFAAgIQAAgHACgGQACgGAEgFQAJgLANAAQAFAAAEACQAFABADADIAFAGQABAEAAAEQAAAEgEABQgCABgIAAIgaAAIgBAIQAAAMAGAGQADAFADACQAEACAGAAQAGAAAEgCQAFgCADgDIAAACQgBADgCACQgCADgDACQgHAFgJAAQgGAAgFgDgAgMgNIAPAAQAGAAACgBQADgBgBgEQAAgFgCgDQgDgDgGgBQgKAAgEASg");
	this.shape_9.setTransform(6.5,20.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5C5B5D").s().p("AgQA0QADgEAAgMIAAgsIgBAAIgFgBIAAgEIAGAAIAAgVQAAgJAGgEQAGgFALABQAKgBAAAGQAAAFgEAAQgDAAgEgDIgGgDQgFAAAAAQIAAASIAIAAIABAAIAAACQAAABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAIgEABIgBAAIAAAsQAAAMACAEg");
	this.shape_10.setTransform(2,18.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5C5B5D").s().p("AgMAiQgEAAgCgDQgGgGAAgJIAAgnQAAgIgDgCIAMgCQABAAAAAAQABAAAAABQAAAAAAABQABABAAABIAAAmQAAAKACAFQACAGAIAAQAFAAACgDQADgCACgEQACgFAAgLIAAgZQAAgIgEgCIAPgDIAAA2QAAALADADIgOABIAAgFQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAAAAAAAIgDACQgDADgDABQgEADgGAAQgDAAgDgCg");
	this.shape_11.setTransform(-7.9,20.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5C5B5D").s().p("AgPAhQgGgCgEgGQgGgJAAgNQAAgJACgGQACgIAFgEQAFgFAGgDQAHgDAHAAQAHAAAGADQAFADAEAFQAHAJAAANQAAAIgCAHQgDAIgEAEQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEACAFABQAIgBAFgGQAEgHAAgNIgBgNQgBgFgCgFQgGgKgKgBQgJABgEAGg");
	this.shape_12.setTransform(-15,20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5C5B5D").s().p("AgmAxQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAIADAAIAFAAQALAAAEgCQAFgCADgGQAIgMAAgNQAAgFgCgGIgFgVQgIgagFgHIALgBQADAAACAFIALAsIACAEIADgEIAHgYQAFgOAAgEQAAgDgCgDIAOAAIgFAOIgWA1IgGANIgGAMQgGAJgHAEQgGAFgHAAQgMAAAAgHg");
	this.shape_13.setTransform(-22.5,22.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5C5B5D").s().p("AgKAhQgFgDgEgFQgDgFgCgHQgCgFAAgIQAAgHACgGQACgGAEgFQAJgLANAAQAGAAADACQAFABADADIAEAGQACAEAAAEQAAAEgEABQgCABgIAAIgaAAIAAAIQAAAMAEAGQAEAFADACQAEACAFAAQAHAAAEgCQAEgCADgDIAAACQAAADgCACQgCADgDACQgIAFgIAAQgGAAgGgDgAgMgNIAPAAQAGAAACgBQACgBAAgEQAAgFgCgDQgEgDgFgBQgKAAgEASg");
	this.shape_14.setTransform(-31,20.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C5B5D").s().p("AANA0IgWghIgCgDIgBACIAAASQABAMACAEIgRAAQADgEAAgMIAAhGQAAgMgEgDIAPgCIAAA7IABADIACgCQAIgGAEgFQADgEAAgEIAAgDIAPAAIgYAYQAJANAJAOQAIAKAFAEg");
	this.shape_15.setTransform(-37,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#5C5B5D").s().p("AgVAgQgCgCgBgEQgCgDABgEQgBgEADgDQADgFAFgDIAQgHIAIgFQACgDAAgGQAAgGgCgEQgEgDgFgBQgGAAgCAEIgEAHQgCAEgDAAIgFgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAgBgBQAAgHAJgEIAJgCIAIgBQAUAAAAANIAAAgIAAAMQABAIAEADIgOABIgBgGQAAgBAAgBQAAAAgBAAQAAgBAAAAQAAAAAAAAIgBAAIgHAIQgDADgHAAQgIAAgGgEgAADAAQgJAFgCACQgFAEAAAGQAAAFADADQADADAFAAQAGgBAEgFQADgEAAgHIAAgPg");
	this.shape_16.setTransform(-43.4,20.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5C5B5D").s().p("AAfAjIAAgoQAAgKgDgFQgDgFgGAAQgDAAgEABQgCACgCADQgCAFAAAKIAAAXQAAAMACAEIgPAAQADgEAAgMIAAgYQAAgKgDgFQgDgFgGAAQgDAAgEABIgEAFQgCAFAAAKIAAAXQAAAMACAEIgQAAQACgEAAgMIAAgjQAAgMgDgDIAQgBIAAAFIAAADIABAAIgBAAIAHgFIAGgDIAGgCQAGAAADADQACACACAEQAAABABABQAAAAAAAAQABABAAAAQAAAAABAAIACgDIAHgGQAEgDAFAAQAIAAAFAFQAEAFAAAKIAAAhQAAAMACAEg");
	this.shape_17.setTransform(-51.7,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5C5B5D").s().p("AgPAhQgGgCgEgGQgGgJAAgNQAAgJACgGQACgIAFgEQAFgFAGgDQAHgDAHAAQAHAAAGADQAFADAEAFQAHAJAAANQAAAIgCAHQgDAIgEAEQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEACAFABQAIgBAFgGQAEgHAAgNIgBgNQgBgFgCgFQgGgKgKgBQgJABgEAGg");
	this.shape_18.setTransform(-64.2,20.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_19.setTransform(-69.9,19.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5C5B5D").s().p("AgGAPIADgLQAAgDgDgJIALgGQACAIAAAEQABAEgFAFIgIAIg");
	this.shape_20.setTransform(98.5,6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5C5B5D").s().p("AgPAhQgGgDgEgFQgGgJAAgNQAAgIACgHQACgHAFgGQAFgFAGgCQAHgDAHAAQAHAAAGADQAFACAEAFQAHAKAAANQAAAIgCAIQgDAGgEAFQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEADAFAAQAIAAAFgHQAEgGAAgOIgBgNQgBgGgCgEQgGgLgKABQgJAAgEAGg");
	this.shape_21.setTransform(93.1,2.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_22.setTransform(87.5,1.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5C5B5D").s().p("AgPAhQgGgDgEgFQgGgJAAgNQAAgIACgHQACgHAFgGQAFgFAGgCQAHgDAHAAQAHAAAGADQAFACAEAFQAHAKAAANQAAAIgCAIQgDAGgEAFQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEADAFAAQAIAAAFgHQAEgGAAgOIgBgNQgBgGgCgEQgGgLgKABQgJAAgEAGg");
	this.shape_23.setTransform(77.9,2.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5C5B5D").s().p("AgSA3IgIgDQgEgDgBgEQgCgEAAgFQAAgGAFgHIALgIIAFgGQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgDQgDgDAAgDQAAgEAEgDIAIgDQAEgCAAgBIgCgBQgGgDgDgFQgDgEAAgHQAAgGACgEQACgDAEgEQAHgEAJAAIAIABIAHABIAFAAIAGgBIAAABQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgGACQADAEAAAHQAAAJgFAEQgCADgEACIgIADIgJAFQgGAEAAADQAAAAAAABQAAAAAAABQABAAAAABQABAAABABQADABAGABQARAEAFADQAGACADAFQADADAAAGQAAAFgEAFQgEAGgIAFQgPAKgLAAIgKgBgAgNAQQgFAEgCADQgCAEAAADQAAAFACACQACAEADACIAHADIAIABQAIAAAGgEQAHgGAAgJQAAgMgPgDIgJgDQgDABgHAFgAgKgkQAAAGADAFIAEAEIAEABQAKAAAAgPQAAgGgDgFIgEgEIgEgBQgKAAAAAPg");
	this.shape_24.setTransform(70.9,4.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgDgFgCgGQgCgHAAgHQAAgGACgHQACgGAEgFQAJgLANAAQAFAAAEABQAFACADADIAFAGQABADAAAEQAAAFgEABQgCABgIAAIgaAAIgBAIQAAAMAGAGQACAFAEACQAEACAGAAQAGAAAEgCQAFgCADgDIAAACQgBACgCADQgCADgDACQgHAFgJAAQgGAAgFgDgAgMgNIAPAAQAGAAACgBQADgBgBgEQAAgFgCgDQgDgEgGABQgKAAgEARg");
	this.shape_25.setTransform(60.5,2.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#5C5B5D").s().p("AAOAiIgNgqQgBgFAAAAQAAAAgBAAQAAAAAAABQAAAAgBABQAAABAAABIgPArIgKAAIgGgiQgEgYgGgIIAGgBIAGgBQAAAAAAABQABAAAAAAQABAAAAABQAAAAABABIABAEIAHApQABAGAAAAQACAAABgFQALgcAAgMQAAgEgCgDIAQAAIgBAEIADAQIAHAbQACAFABAAQABAAACgHQAIgaAAgLIgBgIIANAAQgFAEgCAJIgOA1g");
	this.shape_26.setTransform(52.8,2.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5C5B5D").s().p("AgTAhQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgGIAAgGQAEAHADACQAFAEAGAAQAHAAADgEQAEgDgBgGQABgHgJgGIgMgIQgJgHABgJQgBgIAHgEQAFgEAKAAQAHAAAHACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAKIgHgHQgEgDgFABQgFgBgDADQgCADAAAEQAAAHAHAFIAPAJQAIAGAAAJQAAAJgIAHQgIAFgJAAQgJAAgIgDg");
	this.shape_27.setTransform(41.9,2.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5C5B5D").s().p("AAPA0IAAgpQAAgIgCgEQgCgDgDgCQgDgBgEgBQgGAAgEAGQgDADAAALIAAAYQAAANADADIgRAAQADgDAAgNIAAhGQAAgMgEgDIAPgDIAAArQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACgCQADgDAEgBQAEgDAGAAQAJAAAEAFQAEAFAAAIIAAAiQABANACADg");
	this.shape_28.setTransform(35.7,0.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_29.setTransform(30.3,1.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#5C5B5D").s().p("AgSA3IgIgDQgEgDgBgEQgCgEAAgFQAAgGAFgHIALgIIAFgGQAAAAAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgHgDQgDgDAAgDQAAgEAEgDIAIgDQAEgCAAgBIgCgBQgGgDgDgFQgDgEAAgHQAAgGACgEQACgDAEgEQAHgEAJAAIAIABIAHABIAFAAIAGgBIAAABQAAABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAIgGACQADAEAAAHQAAAJgFAEQgCADgEACIgIADIgJAFQgGAEAAADQAAAAAAABQAAAAABABQAAAAAAABQABAAABABQADABAGABQARAEAFADQAGACADAFQADADAAAGQAAAFgEAFQgEAGgIAFQgPAKgLAAIgKgBgAgNAQQgFAEgCADQgCAEAAADQAAAFACACQACAEADACIAHADIAIABQAIAAAGgEQAHgGAAgJQAAgMgPgDIgJgDQgDABgHAFgAgKgkQAAAGADAFIAEAEIAEABQAKAAAAgPQAAgGgDgFIgEgEIgEgBQgKAAAAAPg");
	this.shape_30.setTransform(24.8,4.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5C5B5D").s().p("AAOAjIAAgoQAAgJgCgFQgCgDgDgCQgCgBgFAAQgFAAgEAFQgEAFABAKIAAAYQAAAMACAEIgQAAQADgEAAgMIAAgjQgBgMgDgDIAPgBIAAAFQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIADgDIAGgEQAEgDAFAAQAJAAAFAFQAEAFAAAKIAAAhQAAAMACAEg");
	this.shape_31.setTransform(17.8,2.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgEgFgCgGQgBgHAAgHQAAgGACgHQACgGAEgFQAJgLANAAQAFAAAFABQAEACADADIAFAGQABADAAAEQAAAFgDABQgDABgIAAIgaAAIgBAIQABAMAEAGQADAFAFACQADACAGAAQAFAAAFgCQAFgCADgDIAAACQAAACgCADQgCADgEACQgIAFgIAAQgGAAgFgDgAgMgNIAOAAQAHAAACgBQADgBAAgEQgBgFgDgDQgDgEgFABQgKAAgEARg");
	this.shape_32.setTransform(11.3,2.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5C5B5D").s().p("AgGA0QACgDAAgNIAAhGQAAgMgEgDIAOgDIAABYQAAANADADg");
	this.shape_33.setTransform(6.2,0.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgDgFgCgGQgCgHAAgHQAAgGACgHQACgGAEgFQAJgLANAAQAFAAAEABQAFACADADIAFAGQABADAAAEQAAAFgEABQgCABgIAAIgaAAIgBAIQAAAMAGAGQACAFAEACQAEACAGAAQAGAAAEgCQAFgCADgDIAAACQgBACgCADQgCADgDACQgHAFgJAAQgGAAgFgDgAgMgNIAOAAQAHAAACgBQADgBgBgEQAAgFgCgDQgDgEgGABQgKAAgEARg");
	this.shape_34.setTransform(-2.5,2.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5C5B5D").s().p("AAPA0IAAgpQAAgIgCgEQgCgDgDgCQgDgBgEgBQgGAAgEAGQgDADAAALIAAAYQAAANADADIgRAAQADgDAAgNIAAhGQAAgMgEgDIAPgDIAAArQAAABAAAAQAAABAAAAQAAAAABAAQAAAAAAAAIACgCQADgDAEgBQAEgDAFAAQAKAAAEAFQAEAFAAAIIAAAiQABANACADg");
	this.shape_35.setTransform(-9.3,0.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_36.setTransform(-14.7,1.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5C5B5D").s().p("AgQA0QADgDAAgNIAAgsIgBAAIgFgBIAAgEIAGAAIAAgVQAAgJAGgEQAGgFALAAQAKAAAAAGQAAAFgEgBQgDAAgEgCIgGgDQgFAAAAAQIAAASIAIAAIABAAIAAADQAAAAgBAAQAAAAAAAAQgBABgBAAQAAAAgBAAIgEABIgBAAIAAAsQAAANACADg");
	this.shape_37.setTransform(-21.9,0.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5C5B5D").s().p("AgPAhQgGgDgEgFQgGgJAAgNQAAgIACgHQACgHAFgGQAFgFAGgCQAHgDAHAAQAHAAAGADQAFACAEAFQAHAKAAANQAAAIgCAIQgDAGgEAFQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEADAFAAQAIAAAFgHQAEgGAAgOIgBgNQgBgGgCgEQgGgLgKABQgJAAgEAGg");
	this.shape_38.setTransform(-28.1,2.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5C5B5D").s().p("AgJAhQgGgDgEgFQgEgFgCgGQgBgHAAgHQAAgGACgHQACgGAEgFQAJgLANAAQAFAAAFABQAEACADADIAFAGQABADAAAEQAAAFgDABQgDABgIAAIgaAAIgBAIQABAMAEAGQADAFAFACQADACAGAAQAFAAAFgCQAFgCADgDIAAACQAAACgCADQgCADgEACQgIAFgIAAQgGAAgFgDgAgMgNIAOAAQAHAAACgBQADgBAAgEQgBgFgDgDQgDgEgFABQgKAAgEARg");
	this.shape_39.setTransform(-38.6,2.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5C5B5D").s().p("AAOAjIAAgoQAAgJgCgFQgBgDgDgCQgDgBgFAAQgFAAgEAFQgDAFAAAKIAAAYQAAAMADAEIgRAAQACgEAAgMIAAgjQAAgMgDgDIAPgBIAAAFQAAABAAAAQAAABAAAAQAAAAAAABQAAAAABAAIADgDIAGgEQAEgDAFAAQAJAAAEAFQAFAFAAAKIAAAhQAAAMACAEg");
	this.shape_40.setTransform(-45.4,2.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5C5B5D").s().p("AgPAhQgGgDgEgFQgGgJAAgNQAAgIACgHQACgHAFgGQAFgFAGgCQAHgDAHAAQAHAAAGADQAFACAEAFQAHAKAAANQAAAIgCAIQgDAGgEAFQgKALgPAAQgIAAgFgDgAgOgXQgFAHAAANQAAAOAFAJQADAFAEADQAEADAFAAQAIAAAFgHQAEgGAAgOIgBgNQgBgGgCgEQgGgLgKABQgJAAgEAGg");
	this.shape_41.setTransform(-52.4,2.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_42.setTransform(-61.9,1.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5C5B5D").s().p("AgTAhQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgGIAAgGQAEAHADACQAEAEAHAAQAHAAADgEQAEgDgBgGQAAgHgIgGIgMgIQgJgHAAgJQAAgIAHgEQAFgEALAAQAFAAAIACQABAAAAAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAKIgHgHQgEgDgFABQgEgBgDADQgDADAAAEQAAAHAHAFIAPAJQAIAGAAAJQAAAJgIAHQgIAFgJAAQgIAAgJgDg");
	this.shape_43.setTransform(-66.9,2.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5C5B5D").s().p("AgNAiQgDgBgCgCQgFgGgBgJIAAgnQAAgIgDgCIAMgCQABAAAAAAQABAAAAABQAAAAAAABQAAABAAABIAAAmQAAAKADAFQADAGAHAAQAEAAAEgDQADgCABgEQACgGAAgKIAAgZQAAgIgEgCIAPgDIAAA1QAAANADACIgOABIAAgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAAAIgDACQgCADgEABQgEADgGAAQgDAAgEgCg");
	this.shape_44.setTransform(-73,2.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5C5B5D").s().p("AgJBEIABgDIADgJIACgcIAAg2QAAgMgEgDIAOgCIAABGQAAATgCAHQgCAKgIAFIgEABgAgHg9IAKgHIAHAKIgKAHg");
	this.shape_45.setTransform(-78.4,3.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#5C5B5D").s().p("AgTAhQgBgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAIABgGIAAgGQAEAHADACQAFAEAGAAQAHAAADgEQAEgDgBgGQABgHgJgGIgMgIQgJgHABgJQgBgIAHgEQAFgEAKAAQAHAAAHACQAAAAABAAQAAAAABABQAAAAAAAAQAAAAAAABIAAAKIgHgHQgEgDgFABQgFgBgDADQgCADAAAEQAAAHAHAFIAPAJQAIAGAAAJQAAAJgIAHQgIAFgJAAQgJAAgIgDg");
	this.shape_46.setTransform(-86.8,2.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5C5B5D").s().p("AgCAGQAAgGgFgGIALgGQAEAHAAAFQAAAGgLAHg");
	this.shape_47.setTransform(-91,-2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5C5B5D").s().p("AgGApQgDgEAAgHIAAgwIgHAAIAAgFIAHAAIAAgTIAKgCIAAAVIAMAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQgBAAgBAAIgIABIgCAAIAAAtQAAAJAGAAQAGAAAEgDIgBAGQAAABgEADQgFACgEAAQgGAAgDgEg");
	this.shape_48.setTransform(-94.6,1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#5C5B5D").s().p("AgJAwIACgIIABgMIAAg3IgBgNIgCgHIATAAQgEAFABAPIAAA3QgBAPAEAFg");
	this.shape_49.setTransform(-98.6,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-9,209.1,39.4);


(lib.Tween14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#998468").s().p("AAUAmIAAgyQAAgEgEgEQgDgDgEAAIgcAAIAAA9IgQAAIAAhLIAQAAIAAANIAKgNIAVAAQALAAAHAHQAGAHAAAKIAAAzg");
	this.shape.setTransform(8.4,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#998468").s().p("AgdAmIAAhLIA7AAIAAAOIgrAAIAAAOIAmAAIAAAOIgmAAIAAATIArAAIAAAOg");
	this.shape_1.setTransform(16.9,33.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#998468").s().p("AgiAmIAAgPIAtAAQAIABAAgJQAAgIgIAAIgUAAQgMAAgHgHQgGgFgBgJQABgLAGgFQAHgHAMAAIArAAIAAAOIgsAAQgJAAAAAIQAAAIAJAAIAUAAQAMAAAHAHQAGAFAAAKQAAAJgGAHQgHAHgMAAg");
	this.shape_2.setTransform(25.1,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#998468").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_3.setTransform(-17.5,33.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#998468").s().p("AARAmIgggnIAUAAQAEAAADgDQADgEAAgEQAAgEgDgEQgDgEgEABIgZAAIAAA9IgQAAIAAhLIAqAAQAKAAAIAHQAGAIAAAKQAAAPgQAGIAXAdg");
	this.shape_4.setTransform(-10.6,33.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#998468").s().p("AAcAmIgKgWIgjAAIgJAWIgTAAIAlhLIARAAIAlBLgAAMADIgMgbIgLAbIAXAAg");
	this.shape_5.setTransform(-24,33.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#998468").s().p("AgbAmIAAhLIARAAIAAA9IAmAAIAAAOg");
	this.shape_6.setTransform(-2.9,33.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#998468").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_7.setTransform(1.9,33.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#998468").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMgAgRgRQgIAHAAAKQAAALAIAIQAHAHAKAAQALAAAIgHQAHgIAAgLQAAgKgHgHQgIgIgLAAQgKAAgHAIg");
	this.shape_8.setTransform(15.7,21.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#998468").s().p("AghAmIAAhLIArAAQAKAAAHAIQAHAHAAALQAAALgHAGQgHAHgKAAIgRAAIgJgMIAAAlgAgQAAIAZAAQAEAAAEgDQACgEAAgEQAAgFgCgDQgEgEgEAAIgZAAg");
	this.shape_9.setTransform(7.2,21.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#998468").s().p("AAcAmIgKgWIgjAAIgJAWIgTAAIAlhLIARAAIAlBLgAAMADIgMgbIgLAbIAXAAg");
	this.shape_10.setTransform(-1.6,21.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#998468").s().p("AgeAmIAAhLIA8AAIAAAOIgrAAIAAAPIAmAAIAAAMIgmAAIAAAUIArAAIAAAOg");
	this.shape_11.setTransform(32.8,21.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#998468").s().p("AASAmIgggnIATAAQAFAAADgEQACgCAAgFQAAgEgCgEQgDgDgFAAIgZAAIAAA9IgRAAIAAhLIArAAQALAAAHAHQAHAHAAAKQAAAJgFAFQgEAHgIACIAYAcg");
	this.shape_12.setTransform(24.8,21.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#998468").s().p("AAUAmIAAgxQgBgFgDgDQgDgEgFAAIgaAAIAAA9IgRAAIAAhLIARAAIAAANIAJgNIAVAAQALAAAHAHQAGAGAAALIAAAzg");
	this.shape_13.setTransform(-19.7,21.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#998468").s().p("AgHAmIAAhLIAPAAIAABLg");
	this.shape_14.setTransform(-26.2,21.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#998468").s().p("AAEAmQgTAAgMgNQgKgKAAgPQAAgNAKgLQAMgNATAAIAiAAIAAAOIgkAAQgWAAAAAXQAAALAGAHQAHAFAJAAIAUAAIAAgiIAQAAIAAAxg");
	this.shape_15.setTransform(-10.9,21.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#998468").s().p("AgiAmIAAgOIAtAAQAJAAAAgJQAAgIgJAAIgUAAQgZAAAAgVQAAgKAGgHQAHgGAMAAIArAAIAAAPIgtAAQgIgBAAAJQAAAHAIABIAVAAQAMgBAHAHQAGAFAAAKQAAAJgGAHQgHAHgMAAg");
	this.shape_16.setTransform(-32.3,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#998468").s().p("Ai8EAIBXiAQAFgJAAgMQABgMgFgIIhSiAQgMgVALgSIAagmIBxCyQAFAHAAALQAAALgFAIIhVB+ICrAAQAMAAAIgFQAGgEAGgJIA0hMQAJgNAPgCIAAgCIgpAAQgJAAgIAJIgKALIgsBAIgLALQgJAFgPAAIg9AAIBXiHQAJgOAAgTQABgSgKgQIh3i9QgLgYALgPIAZglICODjQAOAXgBAZQgBAXgMAUQgNAVhDBlIAGAAQAGgBAFgGIAzhMQAGgIAIgGQAJgGAIAAIA5AAIAkA3IgSAAQgFAAgHADQgHAFgEAGIg3BPQgJANgKAGQgMAHgRAAg");
	this.shape_17.setTransform(0,-11.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#998468").s().p("AgxDIIBKhwQAFgJABgNQAAgMgFgJIhpilQgLgXALgPIAcgpICADJQARAfgTAgQgJAQhPB3g");
	this.shape_18.setTransform(-5.8,-10.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.8,-36.9,71.7,74);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgJAAIALgIIAIAKIgLAHg");
	this.shape.setTransform(42.6,14.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_1.setTransform(38.1,11.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgIgKABgOQAAgJACgHQADgIAFgFQAFgGAGgCQAIgDAIAAQAHAAAGADQAGACAEAGQAIAKgBAOQAAAJgCAHQgDAIgFAFQgKALgRAAQgHAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAJAAAFgHQAFgIAAgOQAAgHgBgGQgBgGgDgFQgGgLgLAAQgJAAgFAHg");
	this.shape_2.setTransform(31.1,11.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgRA4QADgEAAgNIAAgvIgBAAIgGgBIAAgFIAHAAIAAgXQAAgJAGgEQAHgFAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAATIAJAAIABAAIAAADIgFACIgEABIgBAAIAAAvQAAANACAEg");
	this.shape_3.setTransform(25.5,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AgPA2QgGgCgEgGQgDgFgCgGQgBgGAAgHQAAgTALgKQALgLATAAIAHAAIAAgUIAAgKQgBgEgCgCIAQgCIAABdQAAANACAFIgOACIgBgGQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCACIgHAEQgGACgFAAQgGAAgFgDgAgDgKQgFACgEAEQgGAIgBAOQAAAGACAGQABAFADAEQADAFAFADQAEACAFAAQAGAAAEgEQADgFAAgHIAAgiQAAgGgCgDQgCgCgFAAQgHAAgEACg");
	this.shape_4.setTransform(14,9.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_5.setTransform(6.5,11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_6.setTransform(0.4,11.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_7.setTransform(-6,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("AgSAcQgFgFgCgHQgCgGAAgIQAAgQALgMQAKgLARAAIAKABQABAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAQIAAAAIgGgJQgEgDgGAAQgKAAgGAJQgFAJAAANQAAAdAWAAQAFAAAFgBQAEgCAEgEIAAADQAAAGgHAEIgIACIgJABQgNAAgJgKg");
	this.shape_8.setTransform(-12.9,11.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414042").s().p("AgUA7QgFgCgDgCIgGgHQgBgEAAgFQAAgIAFgHQAEgEAHgFQAGgEAAgBQAAAAAAgBQAAAAgBAAQAAAAgBgBQAAAAgBAAIgHgDQgEgDAAgDQAAgEAFgDIAIgEQABAAABgBQAAAAABAAQAAgBAAAAQABAAAAgBIgCgBQgGgDgDgGQgEgFAAgHQAAgFACgFQADgEAEgDQAHgFAKAAIAJABIAHABIAGAAIAFAAIABAAQAAABAAABQAAABgBAAQAAABAAAAQgBAAAAAAIgHABQAEAEAAAIQAAAJgFAGIgHAFIgJADIgJAFQgHAEAAAEQAAACADACIAKACIAXAHQAHADADAEQADAFAAAFQAAAGgEAGQgEAGgJAGQgQAKgMAAQgGAAgFgBgAgOARQgFAEgCAEQgDADAAAFQAAAEACADQACADAEADIAHADIAIABQAJAAAHgFQAIgFAAgKQAAgMgQgEIgKgDQgEAAgHAGgAgLgnQAAAHADAFQACADACABQADACACAAQALAAAAgQQAAgHgDgFIgEgEQgDgCgCAAQgLAAAAAQg");
	this.shape_9.setTransform(-24.8,13.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414042").s().p("AAPAlIAAgrQAAgJgDgGQgBgDgDgBQgDgCgEAAQgHAAgDAFQgFAGAAALIAAAZQAAANADAEIgRAAQACgEABgNIAAglQAAgNgEgDIAPgBIAAAFQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEgDIAGgEQAFgDAGAAQAJAAAFAFQAFAGAAAKIAAAjQAAANACAEg");
	this.shape_10.setTransform(-32.6,11.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414042").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_11.setTransform(-38.7,10.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414042").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_12.setTransform(-44.3,11.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414042").s().p("AgNA4IgOgBIAAgoIAAg1QAAgMgFgEIARgCIAAAyIABABIADgEIAIgGQAEgDAGAAQAHAAAFADQAFADADAGQADAFACAFQABAGAAAIQAAARgIAKQgEAGgHADQgGADgIAAIgNgBgAgFgHQgDACgCADQgDADgBAEIgBALIAAAMQAAAMADAFQABADAEACQADACAEAAQAGAAAEgDQAEgDACgFQAEgIAAgMQAAgMgEgIQgDgEgDgDQgEgCgEAAQgEAAgDABg");
	this.shape_13.setTransform(-52.2,9.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414042").s().p("AgRA4QADgEAAgNIAAgvIgBAAIgGgBIAAgFIAHAAIAAgXQAAgJAGgEQAHgFAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAATIAJAAIABAAIAAADIgFACIgEABIgBAAIAAAvQAAANACAEg");
	this.shape_14.setTransform(-62,9.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgIgKAAgOQAAgJADgHQACgIAGgFQAEgGAIgCQAGgDAJAAQAHAAAGADQAGACAEAGQAHAKAAAOQABAJgDAHQgDAIgFAFQgKALgQAAQgIAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAEADQAFADAFAAQAJAAAFgHQAFgIAAgOQAAgHgCgGQgBgGgCgFQgGgLgLAAQgKAAgEAHg");
	this.shape_15.setTransform(-69,11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#414042").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAgBABQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_16.setTransform(83.9,-7.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#414042").s().p("AgSAlQADgEAAgOIAAgbQAAgWgEgEIAIAAIAFgBQABAAAAABQAAAAAAAAQABABAAABQAAAAAAACIABADIAAAAIAAAAIAEgEQAFgFAFAAQAFAAACABQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAGgFgBIgFAAIgFAAQgFAAgCAEQgBACAAAHIAAAfQAAAOACAEg");
	this.shape_17.setTransform(79,-6.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgIgKABgOQAAgJACgHQADgIAFgFQAFgGAGgCQAIgDAIAAQAHAAAGADQAGACAEAGQAIAKgBAOQAAAJgCAHQgDAIgFAFQgKALgRAAQgHAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAJAAAFgHQAFgIAAgOQAAgHgBgGQgBgGgDgFQgGgLgLAAQgJAAgFAHg");
	this.shape_18.setTransform(72,-6.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#414042").s().p("AgRA4QADgEAAgOIAAgvIgBAAIgGAAIAAgGIAHAAIAAgWQAAgJAGgFQAHgEAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAASIAJAAIABABIAAADIgFACIgEAAIgBAAIAAAvQAAAOACAEg");
	this.shape_19.setTransform(66.5,-8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414042").s().p("AAhAlIAAgrQAAgKgDgGQgDgFgGgBQgEAAgDACQgEACgBAEQgDAFABALIAAAXQgBAOADAEIgRAAQADgEABgOIAAgZQgBgKgDgGQgCgFgHgBQgEAAgDACQgDACgBAEQgDAFAAALIAAAXQAAAOADAEIgSAAQADgEAAgOIAAglQAAgMgDgEIAQgBIAAAGQAAABAAABQAAAAAAAAQAAABAAAAQAAAAABAAIAGgFIAHgEIAHgBQAFAAAEAEIAFAFIACAEIADgEIAGgFQAFgEAFAAQAJAAAGAGQAEAEAAALIAAAiQAAAOACAEg");
	this.shape_20.setTransform(57.8,-6.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgHgKgBgOQABgJACgHQADgIAEgFQAGgGAHgCQAHgDAHAAQAIAAAGADQAGACAEAGQAIAKAAAOQgBAJgCAHQgCAIgFAFQgLALgQAAQgIAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAJAAAFgHQAFgIAAgOQAAgHgCgGQgBgGgCgFQgGgLgLAAQgJAAgFAHg");
	this.shape_21.setTransform(48.1,-6.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#414042").s().p("AgSAcQgFgFgCgHQgCgGAAgIQAAgQALgMQAKgLARAAIAKABQABAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAQIAAAAIgGgJQgEgDgGAAQgKAAgGAJQgFAJAAANQAAAdAWAAQAFAAAFgBQAEgCAEgEIAAADQAAAGgHAEIgIACIgJABQgNAAgJgKg");
	this.shape_22.setTransform(40.7,-6.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#414042").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_23.setTransform(29.2,-6.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414042").s().p("AAPA4IAAgsQABgKgDgDQgBgEgEgCQgDgCgEAAQgHAAgDAHQgEAEAAALIAAAZQAAAOADAEIgSAAQADgEAAgOIAAhLQAAgMgEgEIAQgCIAAAtIABADIACgDIAHgFQAEgCAGAAQALAAAFAGQAEAEAAAKIAAAjQAAAOADAEg");
	this.shape_24.setTransform(21.5,-8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414042").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBAAgBABQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_25.setTransform(15.3,-7.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#414042").s().p("AgOAlQgDgBgCgDQgHgGAAgKIAAgpQAAgJgDgCIANgCQABAAAAAAQABAAAAABQAAAAAAABQAAAAAAABIAAAqQAAAKADAFQADAHAIAAQAFAAADgDQADgCABgFQACgFABgMIAAgbQAAgIgEgDIAQgCIAAA5QAAANADADIgPABIAAgGIgBgCIgDACIgHAFQgEACgGAAQgEAAgEgBg");
	this.shape_26.setTransform(4.5,-6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgIgKAAgOQAAgJADgHQACgIAFgFQAFgGAIgCQAGgDAJAAQAHAAAGADQAGACAEAGQAHAKABAOQgBAJgCAHQgDAIgEAFQgLALgQAAQgIAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAEADQAFADAFAAQAKAAAEgHQAFgIAAgOQAAgHgCgGQAAgGgDgFQgGgLgLAAQgJAAgFAHg");
	this.shape_27.setTransform(-3.4,-6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#414042").s().p("AgpA1QAAgBAAgBQAAAAAAgBQAAAAABAAQAAgBABAAIAEAAIAEAAQAMAAAGgCQADgCAFgGQAIgNAAgOIgBgMIgGgXQgJgbgFgIIAMgBQADABABAFIANAuQABAFABAAIADgFIAIgZQAEgPAAgFIgBgGIAPAAIgGAOIgXA5IgHAPIgGAMQgHAKgHAEQgGAFgHABQgOgBAAgGg");
	this.shape_28.setTransform(-11.9,-4.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#414042").s().p("AgUA7QgFgCgDgCIgGgHQgBgEAAgFQAAgIAFgHQAEgEAHgFQAGgEAAgBQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAIgHgDQgEgDAAgDQAAgEAFgDIAIgEQAEgCAAgBIgCgBQgGgDgDgGQgEgFAAgHQAAgFACgFQADgEAEgDQAHgFAKAAIAJABIAHABIAGAAIAFAAIABAAQAAABAAABQgBABAAAAQAAABAAAAQgBAAAAAAIgHABQAEAEAAAIQAAAJgFAGIgHAFIgJADIgJAFQgHAEAAAEQAAACADACIAKACIAXAHQAHADADAEQADAFAAAFQAAAGgEAGQgEAGgJAGQgQAKgMAAQgGAAgFgBgAgOARQgFAEgCAEQgDADAAAFQAAAEACADQACADAEADIAHADIAIABQAJAAAHgFQAIgFAAgKQAAgMgQgEIgKgDQgEAAgHAGgAgLgnQAAAHADAFQACADACABQADACACAAQALAAAAgQQAAgHgDgFIgEgEQgDgCgCAAQgLAAAAAQg");
	this.shape_29.setTransform(-22.1,-4.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#414042").s().p("AAPAlIAAgrQAAgKgCgEQgCgEgDgCQgDgCgFAAQgGAAgEAHQgDAFAAALIAAAYQAAAOADAEIgSAAQADgEgBgOIAAglQAAgMgCgEIAPgBIAAAGQAAABAAABQAAAAAAAAQAAABAAAAQAAAAABAAIADgDIAHgFQAEgCAFAAQAKAAAFAGQAEAEAAALIAAAiQAAAOADAEg");
	this.shape_30.setTransform(-30,-6.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#414042").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_31.setTransform(-36,-8.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#414042").s().p("AgSAlQADgEAAgOIAAgbQAAgWgEgEIAIAAIAFgBQABAAAAABQAAAAAAAAQABABAAABQAAAAAAACIABADIAAAAIAAAAIAEgEQAFgFAFAAQAFAAACABQABABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAGgFgBIgFAAIgFAAQgFAAgCAEQgBACAAAHIAAAfQAAAOACAEg");
	this.shape_32.setTransform(-40.5,-6.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#414042").s().p("AgNA4IgOgBIAAgoIAAg1QAAgMgFgEIARgCIAAAyIABABIADgEIAIgGQAEgDAGAAQAHAAAFADQAFADADAGQADAFACAFQABAGAAAIQAAARgIAKQgEAGgHADQgGADgIAAIgNgBgAgFgHQgDACgCADQgDADgBAEIgBALIAAAMQAAAMADAFQABADAEACQADACAEAAQAGAAAEgDQAEgDACgFQAEgIAAgMQAAgMgEgIQgDgEgDgDQgEgCgEAAQgEAAgDABg");
	this.shape_33.setTransform(-47.7,-8.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgHgKAAgOQgBgJADgHQADgIAEgFQAFgGAHgCQAHgDAIAAQAIAAAGADQAGACAEAGQAIAKAAAOQAAAJgDAHQgCAIgGAFQgJALgSAAQgHAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAKAAAEgHQAFgIAAgOQAAgHgBgGQgCgGgCgFQgGgLgLAAQgJAAgFAHg");
	this.shape_34.setTransform(-60.1,-6.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#414042").s().p("AgMAzQACgDABgFIABgNIAAhIIgVAAQgHAAgFADIADgLIBQAAQgCAEgFACQgEACgIAAIgSAAIAABIQAAAPADAGg");
	this.shape_35.setTransform(-68.6,-8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.9,-19,163.5,40.8);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._3();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgVAjQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBgBIABgFIAAgGQAEAGAEADQAFAEAHAAQAGAAAEgEQAEgDAAgHQAAgIgIgGIgPgJQgIgGAAgKQAAgJAGgEQAGgEALAAQAHAAAIACQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIAAALIgIgHQgDgCgGAAQgFAAgDACQgDADAAAEQAAAIAIAGIAPAJQAJAGAAAJQABALgKAHQgIAFgKAAQgJAAgJgDg");
	this.shape.setTransform(49.3,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAPAlIAAgrQAAgJgDgGQgBgDgDgBQgDgCgFAAQgGAAgDAFQgFAGAAALIAAAZQAAANAEAEIgSAAQACgEAAgNIAAglQAAgNgCgDIAOgBIAAAFQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIAEgDIAHgEQAEgDAGAAQAJAAAFAFQAEAGABAKIAAAjQAAANACAEg");
	this.shape_1.setTransform(42.3,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQAkQgGgDgEgGQgIgKAAgOQAAgJADgHQACgIAFgFQAFgGAIgCQAGgDAJAAQAHAAAGADQAGACAEAGQAHAKAAAOQAAAJgCAHQgDAIgEAFQgLALgQAAQgIAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAEADQAFADAFAAQAKAAAEgHQAFgIAAgOQAAgHgCgGQAAgGgDgFQgGgLgLAAQgJAAgFAHg");
	this.shape_2.setTransform(34.4,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_3.setTransform(28.2,0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_4.setTransform(23.7,0.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_5.setTransform(19.1,0.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgPA2QgGgCgEgGQgDgFgCgGQgBgGAAgHQAAgTALgKQALgLASAAIAIAAIAAgUIAAgKQgBgEgCgCIAQgCIAABdQAAANACAFIgOACIgBgGQAAgBAAAAQAAAAAAAAQAAgBAAAAQAAAAgBAAIgCACIgHAEQgGACgFAAQgGAAgFgDgAgDgKQgFACgEAEQgHAIAAAOQABAGABAGQABAFADAEQADAFAFADQAEACAFAAQAHAAADgEQAEgFgBgHIAAgiQAAgGgCgDQgCgCgFAAQgHAAgEACg");
	this.shape_6.setTransform(13,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_7.setTransform(5.6,1.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_8.setTransform(-0.3,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_9.setTransform(-5.7,0.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_10.setTransform(-16.1,1.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQA4IAAgsQgBgJgCgFQgCgDgDgBQgCgCgFAAQgGAAgEAFQgEAFAAALIAAAaQAAANADAEIgRAAQACgEAAgNIAAhMQAAgMgEgDIAQgDIAAAtIABADIADgDIAHgEQADgDAHAAQAJAAAGAFQAEAGAAAJIAAAkQAAANADAEg");
	this.shape_11.setTransform(-23.8,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_12.setTransform(-30,0.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_13.setTransform(-39.3,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_14.setTransform(-45.8,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgHAsQgDgEAAgIIAAgzIgHAAIAAgFIAHgBIAAgTIALgDIAAAWIANAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgBABgBAAQgDABgGAAIgCAAIAAAwQAAAKAHAAQAGAAAEgEIgBAHQAAABgFADQgFACgEAAQgGAAgEgEg");
	this.shape_15.setTransform(-51.9,0.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAjQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgFIAAgGQAFAGADADQAFAEAHAAQAHAAADgEQAEgDAAgHQAAgIgJgGIgNgJQgJgGAAgKQAAgJAGgEQAHgEAKAAQAHAAAIACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAALIgIgHQgDgCgGAAQgFAAgDACQgDADAAAEQAAAIAIAGIAQAJQAIAGABAJQAAALgKAHQgIAFgKAAQgJAAgJgDg");
	this.shape_16.setTransform(-57.5,1.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_17.setTransform(-64,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAhAlIAAgrQAAgKgDgGQgDgGgGABQgFAAgDACQgDABgBADQgDAGAAAKIAAAZQAAANADAEIgQAAQACgEAAgNIAAgaQAAgKgCgGQgEgGgFABQgFAAgDACQgDABgCADQgCAGAAAKIAAAZQAAANACAEIgRAAQADgEAAgNIAAglQAAgNgEgDIAQgBIAAAFQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIAHgFIAHgDIAGgCQAGAAAEADIAEAHIACADIAEgDIAGgHQAFgDAGAAQAIAAAFAFQAFAGAAAKIAAAjQAAANADAEg");
	this.shape_18.setTransform(-73.2,1.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgQA2QgFgCgEgGQgDgFgCgGQgCgGAAgHQAAgTAMgKQALgLATAAIAIAAIAAgUIgBgKQgBgEgCgCIAPgCIAABdQAAANADAFIgOACIAAgGQAAgBgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgDACIgHAEQgGACgFAAQgHAAgFgDgAgDgKQgFACgEAEQgGAIAAAOQAAAGABAGQABAFADAEQADAFAEADQAFACAFAAQAGAAAEgEQADgFABgHIAAgiQAAgGgCgDQgDgCgFAAQgHAAgEACg");
	this.shape_19.setTransform(-87.4,-0.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAPAlIAAgrQAAgJgDgGQgBgDgDgBQgDgCgFAAQgGAAgDAFQgEAGgBALIAAAZQABANADAEIgSAAQADgEgBgNIAAglQAAgNgCgDIAOgBIAAAFQAAABABABQAAAAAAAAQAAABAAAAQAAAAABAAIADgDIAHgEQAEgDAGAAQAJAAAFAFQAEAGAAAKIAAAjQAAANADAEg");
	this.shape_20.setTransform(-95.3,1.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAjAzIgSgtIgjAAQgOAcAAALIABAGIgUAAIADgFQAIgIARgmQARglAAgJIABgEIARAAIAQAxIALAZIAKAVIADAGgAAPAAIgMgiQAAgBAAAAQgBgBAAgBQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAABAAABQAAAAgBABIgOAiIAeAAg");
	this.shape_21.setTransform(-104.5,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.2,-10.5,166.1,22.4);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._2();
	this.instance.parent = this;
	this.instance.setTransform(-150,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgVAjQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgFIAAgGQAFAGADADQAFAEAHAAQAHAAADgEQAEgDAAgHQAAgIgJgGIgNgJQgJgGAAgKQAAgJAGgEQAHgEAKAAQAHAAAIACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAALIgIgHQgDgCgGAAQgFAAgDACQgDADAAAEQAAAIAIAGIAQAJQAIAGABAJQAAALgKAHQgIAFgKAAQgJAAgJgDg");
	this.shape.setTransform(121.1,1.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_1.setTransform(115.6,1.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AgNAlQgEgBgCgDQgGgGgBgKIAAgpQABgJgEgCIANgCQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABIAAAqQAAAKACAFQADAHAIAAQAFAAACgDQAEgCACgFQACgFAAgMIAAgbQgBgIgDgDIAPgCIAAA5QABANADADIgPABIAAgGIgBgCIgDACIgHAFQgEACgGAAQgEAAgDgBg");
	this.shape_2.setTransform(108.7,1.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgIgKABgOQAAgJACgHQADgIAFgFQAFgGAGgCQAIgDAIAAQAHAAAGADQAGACAEAGQAIAKgBAOQAAAJgCAHQgDAIgFAFQgKALgRAAQgHAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAJAAAFgHQAFgIAAgOQAAgHgBgGQgBgGgDgFQgGgLgLAAQgJAAgFAHg");
	this.shape_3.setTransform(100.8,1.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AgGAlIgDgLIgLgiQgDgMgIgPIAMgBQAAAAABAAQABABAAAAQABAAAAABQAAAAABABIABAEIAOAuIABAEQABAAACgEIAIgXIAEgOIABgKIgBgFIAQAAQgEAFgEAKQgNAfgIAag");
	this.shape_4.setTransform(93.4,1.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_5.setTransform(86.8,1.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#414042").s().p("AgHA4QADgEAAgNIAAhMQAAgMgEgDIAPgDIAABeQAAANACAEg");
	this.shape_6.setTransform(81.1,-0.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("AgRA4QADgEAAgNIAAgvIgBAAIgGgBIAAgFIAHAAIAAgXQAAgJAGgEQAHgFAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAATIAJAAIABAAIAAADIgFACIgEABIgBAAIAAAvQAAANACAEg");
	this.shape_7.setTransform(77.5,-0.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_8.setTransform(67.6,1.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#414042").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_9.setTransform(61.2,1.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414042").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_10.setTransform(55.6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#414042").s().p("AgHA4QADgEAAgNIAAhMQAAgMgEgDIAPgDIAABeQAAANACAEg");
	this.shape_11.setTransform(51.3,-0.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414042").s().p("AgIAyQADgEAAgNIAAgqQAAgJgDgCIAOgDIAAA4QAAANADAEgAgIgpIAKgIIAHAKIgKAIg");
	this.shape_12.setTransform(47.1,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414042").s().p("AAhAlIAAgrQAAgKgDgGQgDgGgGABQgFAAgDACQgDABgBADQgDAGAAAKIAAAZQAAANADAEIgQAAQACgEABgNIAAgaQgBgKgCgGQgEgGgFABQgFAAgDACQgDABgCADQgCAGAAAKIAAAZQAAANACAEIgRAAQADgEAAgNIAAglQAAgNgEgDIAQgBIAAAFQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIAHgFIAHgDIAGgCQAGAAAEADIAEAHIACADIAEgDIAGgHQAFgDAGAAQAIAAAFAFQAFAGAAAKIAAAjQAAANADAEg");
	this.shape_13.setTransform(39.3,1.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414042").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_14.setTransform(30.2,1.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414042").s().p("AgRA4QADgEAAgNIAAgvIgBAAIgGgBIAAgFIAHAAIAAgXQAAgJAGgEQAHgFAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAATIAJAAIABAAIAAADIgFACIgEABIgBAAIAAAvQAAANACAEg");
	this.shape_15.setTransform(25.2,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_16.setTransform(15.3,1.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#414042").s().p("AgQAkQgGgDgEgGQgHgKAAgOQgBgJADgHQADgIAEgFQAFgGAHgCQAHgDAIAAQAIAAAGADQAGACAEAGQAIAKAAAOQAAAJgDAHQgCAIgGAFQgJALgSAAQgHAAgGgCgAgPgYQgFAHAAAOQAAAPAFAJQADAGAFADQAEADAFAAQAKAAAEgHQAFgIAAgOQAAgHgBgGQgCgGgCgFQgGgLgLAAQgJAAgFAHg");
	this.shape_17.setTransform(8.3,1.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#414042").s().p("AgRA4QADgEAAgNIAAgvIgBAAIgGgBIAAgFIAHAAIAAgXQAAgJAGgEQAHgFAMAAQALAAAAAGQAAAFgFAAQgDAAgEgDQgEgDgCAAQgGAAAAARIAAATIAJAAIABAAIAAADIgFACIgEABIgBAAIAAAvQAAANACAEg");
	this.shape_18.setTransform(2.8,-0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#414042").s().p("AAQA4IAAgsQAAgJgDgFQgBgDgDgBQgDgCgFAAQgHAAgDAFQgEAFAAALIAAAaQAAANADAEIgRAAQACgEAAgNIAAhMQAAgMgEgDIAQgDIAAAtIAAADIAEgDIAGgEQAEgDAHAAQAJAAAFAFQAFAGAAAJIAAAkQAAANADAEg");
	this.shape_19.setTransform(-8.7,-0.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#414042").s().p("AgSAcQgFgFgCgHQgCgGAAgIQAAgQALgMQAKgLARAAIAKABQABAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIAAAQIAAAAIgGgJQgEgDgGAAQgKAAgGAJQgFAJAAANQAAAdAWAAQAFAAAFgBQAEgCAEgEIAAADQAAAGgHAEIgIACIgJABQgNAAgJgKg");
	this.shape_20.setTransform(-15.9,1.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#414042").s().p("AgSAlQADgEAAgNIAAgcQAAgWgEgDIAIgBIAFAAQABAAAAAAQAAAAAAABQABAAAAABQAAAAAAABIABAFIAAAAIAAAAIAEgFQAFgFAFAAQAFAAACACQABAAAAAAQABABAAAAQAAABAAABQAAAAAAABQAAAFgFABIgFgBIgFAAQgFAAgCADQgBADAAAGIAAAhQAAANACAEg");
	this.shape_21.setTransform(-21.8,1.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#414042").s().p("AgWAiIgEgGIgBgHQAAgFACgEQADgEAFgDIARgIQAIgEABgCQADgCAAgHQAAgHgDgEQgDgDgGAAQgGAAgDAEIgEAHQgCAEgEAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAgBQAAgHAKgEQADgCAFAAIAJgBQAWAAAAANIAAAiIAAAOQABAHADAFIgOABIgCgHIgBgDIgBAAQgEAGgDACQgDADgIAAQgIAAgGgEgAADAAQgJAFgDADQgFAEAAAGQAAAGADADQADACAGAAQAGAAAEgFQAEgFAAgHIAAgQg");
	this.shape_22.setTransform(-28.2,1.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#414042").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_23.setTransform(-35.2,1.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#414042").s().p("AgVAjQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIABgFIABgGQAEAGADADQAFAEAHAAQAHAAADgEQAEgDAAgHQAAgIgJgGIgNgJQgJgGAAgKQAAgJAGgEQAGgEAMAAQAGAAAIACQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAIAAALIgHgHQgEgCgGAAQgFAAgDACQgDADAAAEQAAAIAIAGIAQAJQAJAGAAAJQAAALgKAHQgIAFgKAAQgIAAgKgDg");
	this.shape_24.setTransform(-42.1,1.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#414042").s().p("AgKAjQgGgDgEgGQgEgFgCgGQgCgHAAgIQAAgHACgHQACgHAEgFQAKgLAOAAQAGAAAEABIAIAFQAEADABAEQACADAAAEQAAAFgEACIgLABIgcAAIgBAJQAAALAGAIQADAEAEADQAEACAGAAQAGAAAFgCQAFgCADgEIAAACQAAADgCADQgCADgEACQgIAFgJAAQgHAAgFgDgAgNgOIAPAAIAJgBQAEgBAAgEQAAgFgEgEQgDgDgGAAQgLAAgEASg");
	this.shape_25.setTransform(-53.2,1.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#414042").s().p("AAVAzIgLgnIgJgfQgBgIgCAAIgBACIgCAGIgXBGIgNAAIgDgRIgHgoQgGgdgFgLIgCgEIAPAAQADAAABAGIAIAmIAGAjQAAABAAABQAAABAAAAQAAABABAAQAAAAAAAAQABAAACgEIAQgxQACgKAAgKQAAgGgDgEIAaAAQgEAEAAAFQAAAEAEAOIAOA1QABABAAAAQAAABAAAAQAAABABAAQAAAAAAAAQAAAAAAAAQABAAAAgBQAAAAAAgBQABAAAAgBIAKgqQAFgRAAgOQAAgFgDgCIAVAAIgEAGIgEALIgFAOIgSBGg");
	this.shape_26.setTransform(-63.6,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.3,-10.5,198.9,22.4);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AJ5B3QgIgDgHgGQgGgGgFgIQgEgIgEgKQgIgaAAg0IABglQACgXAFgQIAIgSQAFgJAGgGQAHgGAIgDQAJgEALAAQAMAAAJAEQAJADAGAGQAHAGAEAJQAFAHADALQAFAQACAXIABAlQAAA0gIAaQgDAKgFAIQgEAIgHAGQgGAGgJADQgJAEgMAAQgLAAgJgEgAJ/hUQgGAGgDAOQgDAMgBARIgBAjQABAxAEARQADANAGAHQAFAIAJAAQAJAAAHgIQAFgHADgNQAEgRABgxIgBgjQgBgRgDgMQgDgOgFgGQgHgIgJAAQgJAAgFAIgAmIB3QgJgDgHgGQgGgGgFgIQgEgIgDgKQgIgaAAg0IABglQACgXAFgQIAHgSQAFgJAGgGQAHgGAJgDQAJgEALAAQALAAAKAEQAIADAHAGQAGAGAFAJQAEAHADALQAGAQABAXQACAPAAAWQgBA0gIAaQgDAKgEAIQgFAIgGAGQgHAGgIADQgKAEgLAAQgLAAgJgEgAmDhUQgGAGgCAOQgEAMAAARIgBAjQABAxAEARQACANAGAHQAGAIAJAAQAJAAAGgIQAGgHADgNQAEgRABgxIgBgjQgBgRgDgMQgDgOgGgGQgGgIgJAAQgJAAgGAIgAogB4QgJgCgIgGQgHgGgGgHIgKgRQgEgLgFgbQgDgSAAgWQAAgWACgRQACgOAIgbQADgLAFgHQAGgJAHgGQAHgGAKgDQAJgEAMAAIAPACQAHABAGAEIAAAdQgMgGgIAAQgIAAgHADQgGADgFAFQgJAJgFAQQgDANgBASIgBAaQABAoAFASQAGAQAIAIQAFAFAHACQAGADAIABQAKgBAJgEIAAAbQgKAHgPAAQgMAAgKgDgArgB5QgJgDgHgGIAAggQAIAGAHADQAIADAIAAQAHAAAGgDQAFgCAEgGQAHgIAAgOQAAgJgEgIQgCgGgFgIQgFgGgSgRQgQgQgHgLQgFgIgDgJQgDgLAAgLQAAgNAEgKQADgLAHgJQAHgJAJgEQALgFANAAQAKAAAIACQAJACAHAEIgBAgQgQgKgLAAQgGAAgFACQgGACgDAFQgIAJAAAMQAAAIACAHQACAFAFAHIAYAaQATAUAGALQAFAIACAJQACAKAAAMQAAAMgEAMQgEALgHAIQgHAJgKAFQgLAFgNAAQgKAAgJgCgAPJB4IAAjvIBWAAIAAAcIg2AAIAABLIAwAAIAAAbIgwAAIAABRIA2AAIAAAcgANkB4Igrh2IgBAAIAAB2IggAAIAAjvIAnAAQALAAAIABQALADAIAEQAKAHAFAMQAGATAAAQQgCAZgFAMQgEAKgGAGQgHAFgJADIAsB0gAM4gMQAJAAAGgDQAHgCADgEQAEgGACgIIABgQQAAgUgEgJQgDgGgFgDQgGgDgJAAIgFAAgAHvB4IgJikIgfCkIgVAAIgfikIgBAAIgJCkIgeAAIAUjvIAbAAIAiCsIAAAAIAgisIAcAAIAWDvgACkB4Igrh2IgBAAIAAB2IggAAIAAjvIAmAAQAMAAAHABQAMADAIAEQAKAHAFAMQAGATAAAQQgCAZgFAMQgEAKgGAGQgHAFgJADIAsB0gAB4gMQAJAAAGgDQAGgCAEgEQAEgGACgIQABgGAAgKQAAgUgEgJQgDgGgFgDQgGgDgJAAIgFAAgAhBB4IAAjvIBUAAIAAAcIg0AAIAABLIAvAAIAAAbIgvAAIAABRIA0AAIAAAcgAjMB4IgujvIAgAAIAbC0IABAAIAdi0IAeAAIgvDvgAtdB4IAAjvIAgAAIAADvgAweB4IAAjvIAkAAQASAAAKACQATAHAHAIQAGAGAFAIQAFAKADANQADANACARQACASAAAWQAAATgCARQgBAQgDAMQgEAMgFAIQgEAJgGAGQgGAFgIAEQgHADgJABQgNADgaAAgAv+hcIAAC5QAKAAAHgCQAHgBAGgEQAKgIAFgOQAGgRgBgqIAAgfQgBgTgEgNIgFgOQgEgHgFgEQgGgFgHgCQgHgCgHAAIgEAAg");
	this.shape.setTransform(117.2,13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(11.7,1.4,211,24.6), null);


(lib.replay_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("AgZAhQAAgBAAAAQAAAAAAgBQAAAAAAAAQABAAAAAAIACAAIADAAQAIAAADgBIAFgGQAFgIAAgJIgBgHIgDgOQgFgRgEgFIAHAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAABIAIAdIABADIACgDIAFgQIADgMIgBgEIAJAAIgEAJIgOAjIgEAJIgEAIQgEAGgEADQgEADgFAAQgIAAAAgEg");
	this.shape.setTransform(23.7,9.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#414042").s().p("AgNAVQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBIgBgEQAAgDACgCIAFgFIAKgFIAGgDQABgCAAgEQAAgFgCgCQgCgCgDAAQgDAAgCADIgDAEQAAABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAIgCgBIgBgDQAAgEAGgDIAFgBIAGgBQANAAAAAIIAAAVIAAAJQABAFACACIgJABIgBgFIgBgBIgBAAIgEAFQgCACgEAAQgGAAgDgDgAACAAQgGADgBACQgDACAAAEQAAAEACABQABACAEAAQAEAAACgDQACgDAAgFIAAgJg");
	this.shape_1.setTransform(20.3,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#414042").s().p("AgEAjQACgDAAgIIAAguQAAgJgDgBIAJgCIAAA6QAAAIACADg");
	this.shape_2.setTransform(16.6,7.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#414042").s().p("AgTAlQACgDAAgIIAAguIgBgKIgBgGIAJAAIAAAFIAAABIAAAAIAAAAIAFgEQAEgCAEAAQAHAAAFAHQAFAGAAAJQAAAGgCAEQgCAEgEADQgFAEgEABQgDABgGAAIgEAAIAAARQAAAIADADgAgHgcQgDADAAAFIAAASIABAEIAEACIAEABQAGAAADgFIAEgDIAAgHQAAgIgEgHIgEgEQgDgCgDABQgDgBgCADg");
	this.shape_3.setTransform(12.6,9.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#414042").s().p("AgGAWQgEgCgDgEIgDgHIgBgJIABgIQABgFADgDQAGgHAJAAIAGABIAFADIADAEIABAFQAAABAAAAQAAABgBABQAAAAAAAAQgBABgBAAIgGAAIgRAAIAAAGQAAAHADAFIAEAEQACABAEAAIAHgBIAFgDIAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAIgDAEQgFADgGAAQgDAAgEgCgAgHgJIAJAAIAFAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgDgCgDQgCgCgDAAQgHAAgCALg");
	this.shape_4.setTransform(7.8,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#414042").s().p("AgLAXQACgDAAgIIAAgRQAAgOgDgCIAFAAIAEAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAABAAABIAAACIACgDQADgDAEAAIAEAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQgBABAAAAQgBABAAAAQgBAAgBAAIgDAAIgDAAQgDgBgBADIgBAGIAAATQAAAIACADg");
	this.shape_5.setTransform(3.8,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ACQhIIAACRIkfAAIAAiRg");
	this.shape_6.setTransform(14.4,7.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#414042").s().p("AiPBJIAAiRIEfAAIAACRg");
	this.shape_7.setTransform(14.4,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.9,15.5);


(lib.clickthrough_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#414042").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Tween18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(0,1.4,0.391,0.391,0,0,0,117.2,13.7);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4A929").s().p("AojB0Qg/AAABg+IAAh1IAAAAQAFg0A5AAIRHAAQA5AAAFA0IAAAAIAAB1QABA+g/AAg");
	this.shape.setTransform(0,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-10.2,122.1,23.3);


// stage content:
(lib._300x250 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.clickthrough_btn.cursor = "pointer";
		this.clickthrough_btn.on("click", function(){
		  window.open(clickTag, "_blank");
		});
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
	}
	this.frame_274 = function() {
		this.stop()
		this.replay_btn.cursor = "pointer";
		this.replay_btn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		function fl_ClickToGoToAndPlayFromFrame()
		{
		this.gotoAndPlay(1);
		}
		
		var frequency = 3;
		stage.enableMouseOver(frequency);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(274).call(this.frame_274).wait(1));

	// replay
	this.replay_btn = new lib.replay_btn();
	this.replay_btn.parent = this;
	this.replay_btn.setTransform(281.9,12.5,1,1,0,0,0,14.4,7.3);
	this.replay_btn.alpha = 0;
	this.replay_btn._off = true;
	new cjs.ButtonHelper(this.replay_btn, 0, 1, 2, false, new lib.replay_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.replay_btn).wait(264).to({_off:false},0).to({alpha:1},10).wait(1));

	// clickthrough_btn
	this.clickthrough_btn = new lib.clickthrough_btn();
	this.clickthrough_btn.parent = this;
	this.clickthrough_btn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.clickthrough_btn, 0, 1, 2, false, new lib.clickthrough_btn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickthrough_btn).wait(275));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(275));

	// cta
	this.instance = new lib.Tween18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(150,199);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249).to({_off:false},0).to({alpha:1},15).wait(11));

	// txt4
	this.instance_1 = new lib.Tween16("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(150,153.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(229).to({_off:false},0).to({alpha:1},20).wait(26));

	// logo
	this.instance_2 = new lib.Tween14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(149.1,82.8,1.047,1.046,0,0,0,-0.6,-0.6);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(204).to({_off:false},0).to({alpha:1},25).wait(46));

	// img4
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(150,123);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween12("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},189).to({state:[{t:this.instance_4}]},15).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(189).to({_off:false},0).to({_off:true,y:125,alpha:1},15).wait(71));

	// txt3
	this.instance_5 = new lib.Tween10("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(205,69);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(139).to({_off:false},0).to({alpha:1},15).to({_off:true},50).wait(71));

	// img3
	this.instance_6 = new lib.Tween7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},119).to({state:[{t:this.instance_7}]},15).to({state:[]},70).wait(71));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(119).to({_off:false},0).to({_off:true,alpha:1},15).wait(141));

	// txt2
	this.instance_8 = new lib.Tween6("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(120.8,80.5);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(69).to({_off:false},0).to({alpha:1},15).to({_off:true},50).wait(141));

	// img2
	this.instance_9 = new lib.Tween3("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(150,125);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween4("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_10}]},15).to({state:[]},70).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(49).to({_off:false},0).to({_off:true,alpha:1},15).wait(211));

	// txt1
	this.instance_11 = new lib.Tween2("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(164.5,80.5);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},14).to({_off:true},50).wait(211));

	// img1
	this.instance_12 = new lib._1();
	this.instance_12.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},64).wait(211));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(149,124,302,252);
// library properties:
lib.properties = {
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_1.jpg?1496215684235", id:"_1"},
		{src:"images/_2.jpg?1496215684235", id:"_2"},
		{src:"images/_3.jpg?1496215684235", id:"_3"},
		{src:"images/_4.jpg?1496215684235", id:"_4"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;