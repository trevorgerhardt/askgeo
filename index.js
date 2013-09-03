
/**
 * Dependencies
 */

var superagent = require('superagent');

/**
 * AskGeo Base URL, ID, Keys
 */

var BASE_URL = 'http://api.askgeo.com/v1';
var ACCOUNT_ID = process.env.ASK_GEO_ACCOUNT_ID;
var API_KEY = process.env.ASK_GEO_API_KEY;

/**
 * Get the timezone for a lat/lon
 */

module.exports.timezone = function timezone(lat, lon, id, key, callback) {
  if (arguments.length === 3) {
    callback = id;
    id = ACCOUNT_ID;
    key = API_KEY;
  }

  superagent
  .get(BASE_URL + '/' + id + '/' + key + '/query.json')
  .query({
    databases: 'TimeZone'
  })
  .query({
    points: lat + ',' + lon
  })
  .end(function timezoneGetEnd(err, res) {
    if (err) {
      callback(err);
    } else if (!res.ok) {
      callback(new Error(res.text));
    } else if (res.body.code !== 0) {
      callback(new Error(res.body.message));
    } else {
      callback(null, res.body.data[0].TimeZone);
    }
  });
};
