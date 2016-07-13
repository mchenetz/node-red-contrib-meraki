var merakiapi = require('./merakiapi.js');
module.exports = function (RED) {
function merakiNode(config) {
    RED.nodes.createNode(this,config);
        this.on('input', function(msg) {
        	console.log('Node Function: ' + config.func);
        	if (config.func == 'getOrg') {
        		console.log('getOrg');
	            merakiapi.getOrg(this.credentials.apikey, (result) => {
		            msg.payload = result;
	        		msg.topic = 'getOrg';
	            	this.send(msg);
	            });
        	} else if (config.func == 'getOrgDevices') {
        		console.log('Org: ' + config.org);
        		merakiapi.getOrgDevices(this.credentials.apikey,config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getOrgDevices';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getNetworkDevices') {
        		console.log('Netid: ' + config.netid);
        		merakiapi.getNetworkDevices(this.credentials.apikey,config.netid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getNetworkDevices';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getNetworkList') {
        		console.log('org: ' + config.org);
        		merakiapi.getNetworkList(this.credentials.apikey,config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getNetworkList';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getAdmins') {
        		console.log('org: ' + config.org);
        		merakiapi.getAdmins(this.credentials.apikey,config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getAdmins';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getConfigTemplates') {
        		console.log('org: ' + config.org);
        		merakiapi.getConfigTemplates(this.credentials.apikey,config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getConfigTemplates';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getDeviceDetail') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getDeviceDetail(this.credentials.apikey, config.netid, config.serial, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getDeviceDetail';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getNonMerakiVpnPeers') {
        		console.log('org: ' + config.org);
        		merakiapi.getNonMerakiVpnPeers(this.credentials.apikey, config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getNonMerakiVpnPeers';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getOrgAdmins') {
        		console.log('org: ' + config.org);
        		merakiapi.getOrgAdmins(this.credentials.apikey, config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getOrgAdmins';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getSamlRoles') {
        		console.log('org: ' + config.org);
        		merakiapi.getSamlRoles(this.credentials.apikey, config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getSamlRoles';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getSnmpSettings') {
        		console.log('org: ' + config.org);
        		merakiapi.getSnmpSettings(this.credentials.apikey, config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getSnmpSettings';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getSwitchStacks') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getSwitchStacks(this.credentials.apikey, config.netid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getSwitchStacks';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getSwitchStackMembers') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getSwitchStackMembers(this.credentials.apikey, config.netid, config.stackid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getSwitchStackMembers';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getTemplates') {
        		console.log('org: ' + config.org);
        		merakiapi.getTemplates(this.credentials.apikey, config.org, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getTemplates';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getVlans') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVlans(this.credentials.apikey, config.netid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getVlans';
	            	this.send(msg);
	            }); 
        	} else if (config.func == 'getVlanDetail') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVlanDetail(this.credentials.apikey, config.netid, config.vlanid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getVlanDetail';
	            	this.send(msg);
	            }); 
        	}
             else if (config.func == 'getVpnPeers') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVpnPeers(this.credentials.apikey, config.netid, (result) => {
	        		msg.payload = result;
	        		msg.topic = 'getVpnPeers';
	            	this.send(msg);
	            }); 
        	}
        });

};

RED.nodes.registerType("Meraki",merakiNode, {
	credentials: {
		apikey: {type:"password"}
	}
});
};