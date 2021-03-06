module.exports = Lighting1;
/*jshint -W104 */
const defines = require('./defines');

/*
 * This is a class for controlling Lighting1 lights.
 */
function Lighting1(rfxcom, subtype) {
  var self = this;

  self.rfxcom = rfxcom;
  self.subtype = subtype;

  if (typeof self.subtype === "undefined") {
    throw new Error("Must provide a subtype.");
  };
}

/*
 * Splits the device id x/y and returns the components, the deviceId will be
 * returned as the component bytes, ready for sending.
 *
 * Throws an Error if the format is invalid or if the deviceId is not the
 * correct length.
 */
Lighting1.prototype._splitDeviceId = function (deviceId) {
  var parts = deviceId.split("/"),
      idBytes;
  if (parts.length !== 2) {
    throw new Error("Invalid deviceId format.");
  };
  idBytes = this.rfxcom.stringToBytes(parts[0]);
  if (idBytes.length !== 1) {
    throw new Error("Invalid deviceId format.");
  };
  return {
    idBytes: idBytes,
    unitCode: parts[1],
  };
};

Lighting1.prototype._sendCommand = function (deviceId, command, callback) {
  var self = this,
      cmdId = self.rfxcom.getCmdNumber(),
      device = self._splitDeviceId(deviceId);

			buffer = [0x07, defines.LIGHTING1, self.subtype, cmdId, device.idBytes[0],
                device.unitCode, command, 0];

  if (self.rfxcom.options.debug) {
    console.log("Sending %j", self.rfxcom.dumpHex(buffer));
  }
  self.rfxcom.serialport.write(buffer, function (err, response) {
    if (typeof callback === "function") {
      callback(err, response, cmdId);
    }
  });
  return cmdId;
};

/*
 * Switch on deviceId/unitCode
 */
Lighting1.prototype.switchOn = function switchOn(deviceId, callback) {
  return this._sendCommand(deviceId, 1, callback);
};

/*
 * Switch off deviceId/unitCode
 */
Lighting1.prototype.switchOff = function switchOff(deviceId, callback) {
  return this._sendCommand(deviceId, 0, callback);
};

/*
 * Chime a device
 */
Lighting1.prototype.chime = function chime(deviceId, callback) {
  return this._sendCommand(deviceId, 0x07, callback);
};
