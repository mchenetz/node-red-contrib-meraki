var merakiapi = require('./merakiapi.js');
module.exports = function (RED) {
function merakiNode(config) {
    RED.nodes.createNode(this,config);
        this.on('input', function(msg) {
        	console.log('Node Function: ' + config.func);
        	if (config.func == 'getOrg') {
        		console.log('getOrg');
	            merakiapi.getOrg(this.credentials.apikey, (result) => {
	            	this.send({payload:result, topic: 'getOrg'});
	            });
        	} else if (config.func == 'getOrgDevices') {
        		console.log('Org: ' + config.org);
        		merakiapi.getOrgDevices(this.credentials.apikey,config.org, (result) => {
	            	this.send({payload:result, topic: 'getOrgDevices'});
	            }); 
        	} else if (config.func == 'getNetworkDevices') {
        		console.log('Netid: ' + config.netid);
        		merakiapi.getNetworkDevices(this.credentials.apikey,config.netid, (result) => {
	            	this.send({payload:result, topic:'getNetworkDevices'});
	            }); 
        	} else if (config.func == 'getNetworkList') {
        		console.log('org: ' + config.org);
        		merakiapi.getNetworkList(this.credentials.apikey,config.org, (result) => {
	            	this.send({payload:result, topic:'getNetworkList'});
	            }); 
        	} else if (config.func == 'getAdmins') {
        		console.log('org: ' + config.org);
        		merakiapi.getAdmins(this.credentials.apikey,config.org, (result) => {
	            	this.send({payload:result, topic:'getAdmins'});
	            }); 
        	} else if (config.func == 'getConfigTemplates') {
        		console.log('org: ' + config.org);
        		merakiapi.getConfigTemplates(this.credentials.apikey,config.org, (result) => {
	            	this.send({payload:result, topic:'getConfigTemplates'});
	            }); 
        	} else if (config.func == 'getDeviceDetail') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getDeviceDetail(this.credentials.apikey, config.netid, config.serial, (result) => {
	            	this.send({payload:result, topic:'getDeviceDetail'});
	            }); 
        	} else if (config.func == 'getNonMerakiVpnPeers') {
        		console.log('org: ' + config.org);
        		merakiapi.getNonMerakiVpnPeers(this.credentials.apikey, config.org, (result) => {
	            	this.send({payload:result, topic:'getNonMerakiVpnPeers'});
	            }); 
        	} else if (config.func == 'getOrgAdmins') {
        		console.log('org: ' + config.org);
        		merakiapi.getOrgAdmins(this.credentials.apikey, config.org, (result) => {
	            	this.send({payload:result, topic:'getOrgAdmins'});
	            }); 
        	} else if (config.func == 'getSamlRoles') {
        		console.log('org: ' + config.org);
        		merakiapi.getSamlRoles(this.credentials.apikey, config.org, (result) => {
	            	this.send({payload:result, topic:'getSamlRoles'});
	            }); 
        	} else if (config.func == 'getSnmpSettings') {
        		console.log('org: ' + config.org);
        		merakiapi.getSnmpSettings(this.credentials.apikey, config.org, (result) => {
	            	this.send({payload:result, topic:'getSnmpSettings'});
	            }); 
        	} else if (config.func == 'getSwitchStacks') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getSwitchStacks(this.credentials.apikey, config.netid, (result) => {
	            	this.send({payload:result, topic:'getSwitchStacks'});
	            }); 
        	} else if (config.func == 'getSwitchStackMembers') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getSwitchStackMembers(this.credentials.apikey, config.netid, config.stackid, (result) => {
	            	this.send({payload:result, topic:'getSwitchStackMembers'});
	            }); 
        	} else if (config.func == 'getTemplates') {
        		console.log('org: ' + config.org);
        		merakiapi.getTemplates(this.credentials.apikey, config.org, (result) => {
	            	this.send({payload:result, topic:'getTemplates'});
	            }); 
        	} else if (config.func == 'getVlans') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVlans(this.credentials.apikey, config.netid, (result) => {
	            	this.send({payload:result, topic:'getVlans'});
	            }); 
        	} else if (config.func == 'getVlanDetail') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVlanDetail(this.credentials.apikey, config.netid, config.vlanid, (result) => {
	            	this.send({payload:result, topic:'getVlanDetail'});
	            }); 
        	}
             else if (config.func == 'getVpnPeers') {
        		console.log('netid: ' + config.netid);
        		merakiapi.getVpnPeers(this.credentials.apikey, config.netid, (result) => {
	            	this.send({payload:result, topic:'getVpnPeers'});
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