exports.messageTypes = {
  INTERFACE_CONTROL: 0,
  INTERFACE_MESSAGE: 1,
  TRANSCEIVER_MESSAGE: 2,
  ELEC2: 0x5a,
  LIGHTING1: 0x10,
  LIGHTING2: 0x11,
  LIGHTING5: 0x14,
  SECURITY1: 0x20,
}


exports.lighting5 = {
  LIGHTWAVERF: 0,
  EMW100: 1,
  BBSB: 2,
  OFF: 0,
  ON: 1,
  GROUP_OFF: 2,
  LEARN: 2,
  GROUP_ON: 3,
  MOOD1: 3,
  MOOD2: 4,
  MOOD3: 5,
  MOOD4: 6,
  MOOD5: 7,
  UNLOCK: 0x0a,
  LOCK: 0x0b,
  CLOSE: 0x0d,
  STOP: 0x0e,
  OPEN: 0x0f,
  SET_LEVEL: 0x10
}

exports.lighting2 = {
  AC: 0,
  HOMEEASY_EU: 1,
  ANSLUT: 2,
  OFF: 0,
  ON: 1,
  SET_LEVEL: 2,
  GROUP_OFF: 3,
  GROUP_ON: 4,
  SET_GROUP_LEVEL: 5
}