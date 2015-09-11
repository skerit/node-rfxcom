var rfxcom = require('./index');
var Blast = require('protoblast')(true);

var rfxtrx = new rfxcom.RfxCom("/dev/ttyUSB0", {debug: true});

rfxtrx.initialise(function () {
	var lighting1 = new rfxcom.Lighting1(rfxtrx, rfxcom.lighting1.ARC);

	lighting1.switchOn("0x41/15");
	return;

	Function.forEach(Array.range(1, 17), function eachHouse(house_code, index, next) {
		Function.forEach(Array.range(1, 17), function eachUnit(unit_code, index, next_unit) {

			console.log('Testing ' + house_code + ':' + unit_code);
			lighting1.switchOff("0x" + (40 + house_code) + "/" + unit_code, function done() {
				console.log('Sent ... Waiting..')
				setTimeout(next_unit, 1000);
			});;

		}, next);
	});

	//lighting1.switchOn("0x41/1"); // 41 == housecode A
	//lighting1.switchOff("0x41/1");
});