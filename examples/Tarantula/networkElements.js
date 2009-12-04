/**
 * Container represented by an Network switch
 * @class SwitchContainer
 * @extends WireIt.FormContainer
 * @constructor
 * @param {Object} options
 * @param {WireIt.Layer} layer
 */
WireIt.SwitchContainer = function(options, layer) {
	WireIt.FormContainer.superclass.constructor.call(this, options, layer);
};

YAHOO.lang.extend(WireIt.SwitchContainer, WireIt.FormContainer, {

	/**
	 * @method setOptions
	 * @param {Object} options the options object
	 */
	setOptions: function(options) {
	WireIt.SwitchContainer.superclass.setOptions.call(this, options);

	//this.options.image = options.image;
	this.options.xtype = "WireIt.SwitchContainer";

	this.options.className = options.className || "WireIt-Container WireIt-SwitchContainer";

	// Overwrite default value for options:
	this.options.resizable = (typeof options.resizable == "undefined") ? false : options.resizable;
	//this.options.ddHandle = (typeof options.ddHandle == "undefined") ? false : options.ddHandle;

	this.options.inputs = options.inputs || [];
	this.options.outputs = options.outputs || [];
	
	this.options.fe = options.fe || 24;},
	
/**
 * @method render
 */
render: function() {
		WireIt.SwitchContainer.superclass.render.call(this);
		//YAHOO.util.Dom.setStyle(this.bodyEl, "background-image", "url("+this.options.image+")");

		for(var i = 0 ; i < this.options.inputs.length ; i++) {
			var input = this.options.inputs[i];
			var yoffset = 110+20*i; 
			this.options.terminals.push({
					"name": input, 
					"direction": [-1,0], 
					"offsetPosition": {"left": -14, "top": yoffset }, 
					"ddConfig": {
					"type": "input",
					"allowedTypes": ["output"]
					}
					});
			this.bodyEl.appendChild(WireIt.cn('div', null, {lineHeight: "20px", textAlign: "left"}, input));
		}

		for(i = 0 ; i < this.options.outputs.length ; i++) {
			var yoffset = 110+20*i; 
			var output = this.options.outputs[i];
			this.options.terminals.push({
					"name": output, 
					"direction": [1,0], 
					"offsetPosition": {"right": -14, "top": yoffset }, 
					"ddConfig": {
					"type": "output",
					"allowedTypes": ["input"]
					},
					"alwaysSrc": true
					});
			this.bodyEl.appendChild(WireIt.cn('div', null, {lineHeight: "20px", textAlign: "right"}, output));
		}
	}

});
