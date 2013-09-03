# askgeo

Simple AskGeo API wrapper. See [AskGeo](https://askgeo.com) to obtain an API Key.

## Installation via npm

    $ npm install askgeo

## TimeZone Object

  `timezone` returns a `TimeZone` object. An example:

    {
      IsInside: 'true',
      AskGeoId: 12580,
      MinDistanceKm: 0,
      TimeZoneId: 'America/New_York',
      ShortName: 'EDT',
      CurrentOffsetMs: -14400000,
      WindowsStandardName: 'Eastern Standard Time',
      InDstNow: 'true'
    }

## API

  Account id and api keys can be set as environment variables and will be attempted to retrieve at `process.env.ASK_GEO_ACCOUNT_ID` and `process.env.ASK_GEO_API_KEY`. If they are set then the callback in each function can be moved up two arguments.

### .timezone(lat, lon, id, key, callback)

  Given a lat, lon point, return a `TimeZone` object.

    askgeo.timezone(38.9001028, -76.9997817, console.log);
