const port = 3200;
const isPc = userAgent => {
  const ua = userAgent;
  if (
    /AppleWebKit.*Mobile/i.test(ua) ||
    /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(
      ua
    )
  ) {
    return !/Android|webOS|iPhone|iPod|BlackBerry|iPad/i.test(ua);
  }
  return true;
};

module.exports = { isPc, port };
