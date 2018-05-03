var DeviceReg = artifacts.require("DeviceReg");

module.exports = function(callback){
	var instance;
    var t = [1];
    var addrHead = "0x";
    var addrTail = 0;
    var totalNum = 4;
    // var instance;

    var i;
    for(i=0; i < totalNum; i++){
    	addrTail = addrTail + 1;
    	DeviceReg.deployed().then(function(rinst){
	        instance = rinst;
	        console.log(addrTail);
	     //    return instance.registerDevice(
		    //     "0x" + addrTail.toString(),
		    //     2,
		    //     101,
		    //     t,
		    //     t,
		    //     [],
		    //     "MA:CA:DD:RE:SS",
		    //     {from: "0xd15837424997020a0870ef4c43efa2714e184bbf"}
		    // ); 
		});
		console.log(addrTail);
    }

    
}

    
