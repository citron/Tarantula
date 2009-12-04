var demoLanguage = {

	// Set a unique name for the language
languageName: "meltingpotDemo",

	      // inputEx fields for pipes properties
	      propertiesFields: [
		      // default fields (the "name" field is required by the WiringEditor):
	      {"type": "string", inputParams: {"name": "name", label: "Title", typeInvite: "Enter a title" } },
	      {"type": "text", inputParams: {"name": "description", label: "Description", cols: 30} },

	      // Additional fields
	      {"type": "boolean", inputParams: {"name": "isTest", value: true, label: "Test"}},
	      {"type": "select", inputParams: {"name": "category", label: "Category", selectValues: ["Demo", "Test", "Other"]} }
	      ],

		      // List of node types definition
		      modules: [

		      {
			      "name": "comment",

			      "container": {
				      "xtype": "WireIt.FormContainer",
				      "icon": "../../res/icons/comment.png",
				      "title": "Comment",
				      "fields": [
				      {"type": "text", "inputParams": {"label": "", "name": "comment", "wirable": false }}
				      ]
			      },
			      "value": {
				      "input": {
					      "type":"url","inputParams":{}
				      }
			      }
		      },


		      {
			      "name": "Client",
			      "container": {
				      "icon": "../../res/icons/application_edit.png",
				      "xtype": "WireIt.FormContainer",				   
				      "fields": [ 
				      {"inputParams": {"label": "Nom", "nom": "nom", "required": true } }, 
				      {"type":"email", "inputParams": {"label": "Email", "name": "email", "required": true}}, 
				      ]
			      }
		      },
  		      {
			      "name": "AT-RG",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["wan"],
				      "outputs": ["lan1", "lan2", "lan3"]
			      }
		      },
		      {
			      "name": "Cisco ASA5505",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["Fe 0/0"],
				      "outputs": ["Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "POE Fe 0/6","POE Fe 0/7"]
			      }
		      },
		      {
			      "name": "Alcatel ONT",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "label": "serial", "name": "serial", "wirable": false,

				      "inputs": ["pon"],
				      "outputs": ["lan1", "lan2"]
			      }
		      },
		      {
			      "name": "Audiocode PM-112",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["Fe 0/0"],
				      "outputs": ["POTS 1", "POTS 2","POTS 3", "POTS 4","POTS 5", "POTS 6","POTS 7"]
			      }
		      },
		      {
			      "name": "Allied AT-8000S16",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["Ge 0/17"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16"]
			      }
		      },
		      {
			      "name": "Allied AT-8000S24",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["Ge 0/25","Ge 0/26"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18", "Fe 0/19","Fe 0/20", "Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24"]
			      }
		      },
  		      {
			      "name": "Cisco 3550",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["Ge 0/25","Ge 0/26"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18", "Fe 0/19","Fe 0/20", "Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24"]
			      }
		      },

		      {
			      "name": "Alcatel SR7750",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": [],
				      "outputs": ["1/1/1","1/1/2","1/1/3","1/1/4","1/1/5","1/1/6","1/1/7","1/1/8","1/1/9","1/1/10","1/1/11","1/1/12","1/1/13","1/1/14","1/1/15","1/1/16","1/1/17","1/1/18","1/1/19","1/1/20","1/2/1","1/2/2","1/2/3","1/2/4","1/2/5","1/2/6","1/2/7","1/2/8","1/2/9","1/2/10","1/2/11","1/2/12","1/2/13","1/2/14","1/2/15","1/2/16","1/2/17","1/2/18","1/2/19","1/2/20"]

			      }
		      },
		      {
			      "name": "Ethernet Switch",
			      "container": {
				      "xtype": "WireIt.FormContainer",
				      "title": "Switch",    
				      "icon": "../../res/icons/comments.png",

				      "collapsible": true,
				      "fields": [ 
				      //{"type": "select", "inputParams": {"label": "Title", "name": "title", "selectValues": ["Mr","Mrs","Mme"] } },
				      //{"inputParams": {"label": "Firstname", "name": "firstname", "required": true } }, 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX"} }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":""} }, 
				      ],
					      "legend": "Tell us about yourself...",
					      "terminals": [
					      {"name": "Fe0in", "direction": [-1,0], "offsetPosition": {"left": 5, "top": 140 }},
					      {"name": "Fe0out", "direction": [1,0], "offsetPosition": {"right": 5, "top": 140 }},
					      {"name": "Fe1in", "direction": [-1,0], "offsetPosition": {"left": 5, "top": 160 }},
					      {"name": "Fe1out", "direction": [1,0], "offsetPosition": {"right": 5, "top": 160 }}
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 5",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 5",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 8",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 8",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 16",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 16",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 16+1",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 16+1",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Ge 0/17"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 24",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 24",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18", "Fe 0/19","Fe 0/20", "Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18", "Fe 0/19","Fe 0/20", "Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
  		      {
			      "name": "Ethernet Switch 24+2",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 24+2",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Ge 0/25","Ge 0/26"],
				      "outputs": ["Fe 0/0","Fe 0/1", "Fe 0/2","Fe 0/3", "Fe 0/4","Fe 0/5", "Fe 0/6","Fe 0/7","Fe 0/8", "Fe 0/9","Fe 0/10", "Fe 0/11","Fe 0/12", "Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18", "Fe 0/19","Fe 0/20", "Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24"],
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
  		      {
			      "name": "Ethernet Switch 48+2",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 24+2",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Ge 0/46","Ge 0/47"],
				      "outputs": ["Fe 0/0", "Fe 0/1", "Fe 0/2", "Fe 0/3", "Fe 0/4", "Fe 0/5", "Fe 0/6", "Fe 0/7", "Fe 0/8", "Fe 0/9",
				      				"Fe 0/10","Fe 0/11","Fe 0/12","Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18","Fe 0/19",
				      				"Fe 0/20","Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24","Fe 0/25","Fe 0/26","Fe 0/27","Fe 0/28","Fe 0/29",
				      				"Fe 0/30","Fe 0/31","Fe 0/32","Fe 0/33","Fe 0/34","Fe 0/35","Fe 0/36","Fe 0/37","Fe 0/38","Fe 0/39",				      				
				      				"Fe 0/30","Fe 0/31","Fe 0/32","Fe 0/33","Fe 0/34","Fe 0/35","Fe 0/36","Fe 0/37","Fe 0/38","Fe 0/39",
				      				"Fe 0/40","Fe 0/41","Fe 0/42","Fe 0/43","Fe 0/44","Fe 0/45","Fe 0/46","Fe 0/47","Fe 0/48"],				      				
				      				
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },
		      {
			      "name": "Ethernet Switch 48+4",
			      "container": {
				      "xtype": "WireIt.SwitchContainer",
				      "title": "Switch 24+2",    
				      "icon": "../../res/icons/comments.png",
				      "collapsible": false,
				      "inputs": ["Ge 0/44","Ge 0/45","Ge 0/46","Ge 0/47"],
				      "outputs": ["Fe 0/0", "Fe 0/1", "Fe 0/2", "Fe 0/3", "Fe 0/4", "Fe 0/5", "Fe 0/6", "Fe 0/7", "Fe 0/8", "Fe 0/9",
				      				"Fe 0/10","Fe 0/11","Fe 0/12","Fe 0/13","Fe 0/14","Fe 0/15","Fe 0/16","Fe 0/17","Fe 0/18","Fe 0/19",
				      				"Fe 0/20","Fe 0/21","Fe 0/22","Fe 0/23","Fe 0/24","Fe 0/25","Fe 0/26","Fe 0/27","Fe 0/28","Fe 0/29",
				      				"Fe 0/30","Fe 0/31","Fe 0/32","Fe 0/33","Fe 0/34","Fe 0/35","Fe 0/36","Fe 0/37","Fe 0/38","Fe 0/39",				      				
				      				"Fe 0/30","Fe 0/31","Fe 0/32","Fe 0/33","Fe 0/34","Fe 0/35","Fe 0/36","Fe 0/37","Fe 0/38","Fe 0/39",
				      				"Fe 0/40","Fe 0/41","Fe 0/42","Fe 0/43","Fe 0/44","Fe 0/45","Fe 0/46","Fe 0/47","Fe 0/48"],				      				
				      				
				      "fields": [ 
				      {"inputParams": {"label": "IP", "name": "ip", "value":"192.168.3.XXX", "size": 12 } }, 
				      {"inputParams": {"label": "S/N", "name": "sn", "value":"", "size": 12} }, 
				      ]
			      }
		      },

  		      {
			      "name": "Netgem",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["lan"],
				      "outputs": []
			      }
		      },
  		      {
			      "name": "PC",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["lan","wifi"],
				      "outputs": []
			      }
		      },
  		      {
			      "name": "IPPhone",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["lan"],
				      "outputs": ["PC"]
			      }
		      },
  		      {
			      "name": "IPPhone ST2030",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["lan"],
				      "outputs": ["PC"]
			      }
		      },
		      
  		      {
			      "name": "FAX",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["POTS"],
				      "outputs": []
			      }
		      },
				{
			      "name": "WRT54G",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["WAN"],
				      "outputs": ["wifi","lan1","lan2","lan3","lan4"]
			      }
		      },
  				{
			      "name": "Terayon TA-102",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["DOCSIS"],
				      "outputs": ["lan","USB","POTS1","POTS2"]
			      }
		      },
  				{
			      "name": "Thomson THG520",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["DOCSIS"],
				      "outputs": ["lan","USB","POTS1","POTS2"]
			      }
		      },
  				{
			      "name": "Thomson THG540",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["DOCSIS"],
				      "outputs": ["lan","USB","POTS1","POTS2"]
			      }
		      },
  				{
			      "name": "Thomson TWG850",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["DOCSIS"],
				      "outputs": ["lan","USB","wifi","POTS1","POTS2"]
			      }
		      },
  				{
			      "name": "Thomson TWG850-4",
			      "container": {
				      "xtype":"WireIt.InOutContainer",
				      "icon": "../../res/icons/arrow_right.png",
				      "inputs": ["DOCSIS"],
				      "outputs": ["lan1","lan2","lan3","lan4","USB","wifi","POTS1","POTS2"]
			      }
		      },




		      ]

};
