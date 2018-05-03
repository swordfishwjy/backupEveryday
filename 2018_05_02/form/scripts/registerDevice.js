var DeviceReg = artifacts.require("DeviceReg");

function myfunction(a){
	DeviceReg.deployed().then(function(rinst){
	        return rinst.registerDevice(
		        "0x"+a.toString(),
		        2,
		        101,
		        [1],
		        [1],
		        [],
		        "MA:CA:DD:RE:SS",
		        {from: "0xc968efa8019d670db8a6a3da22f30613db6a8447"}
		    ); 
		});
}

module.exports = function(callback){
    var totalNum = 1000;
    // myfunction();
    var i;
    for(i=1; i <= totalNum; i++){
		// console.log(i);
		myfunction(i);
    }

    
}

    
