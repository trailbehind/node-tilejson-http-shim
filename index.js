"use strict";

module.exports = function(tilelive, options) {
  var TileJSONHttpShim = function(uri, callback) {
    return new tilelive.protocols['tilejson:'](uri);
  };

  TileJSONHttpShim.registerProtocols = function(tilelive) {
    tilelive.protocols['http:'] = tilelive.protocols['tilejson:'];
  };

  TileJSONHttpShim.registerProtocols(tilelive);

  return TileJSONHttpShim;
};
