# relatify

> Demo AngularJS app using Spotify Web API for creating playlists of related artists.

This project is generated with [yo angular-require generator](https://github.com/aaronallport/generator-angular-require)
version 0.4.2.

This project uses the [Spotify Web API](https://developer.spotify.com/web-api/) and is NOT affiliated with or in any way associated with Spotify.

## How to Run

### Prerequisites

* Node.js v0.10.x+
* npm (comes bundled with Node)
* git
* Install bower
* Install grunt-cli

After installing Node.js with npm, and git, verify that you have bower and grunt-cli installed via:

```
bower --version && grunt --version
```

If one or all of the above are not installed you can install them via:

```
npm install --global bower grunt-cli
```

### Preview
To preview the app run:

```
grunt serve
```

### Build
To build the app, run (note this must be done before anything else):

```
grunt build
```

Note, `npm install` may need to be run before `grunt build`. For more details on the build/run process please see [yo angular-require generator](https://github.com/aaronallport/generator-angular-require) as this project was generated using this generator.

### Connecting to Spotify
To actually login with your Spotify account via relatify, you must edit the config block in app/scripts/app.js to include your own Spotify Developer Client ID.

```javascript
.config(function (SpotifyProvider) {
      SpotifyProvider.setClientId('YOUR-CLIENT-ID');
      SpotifyProvider.setRedirectUri('http://localhost:9000/callback.html');
      SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
    })
```
