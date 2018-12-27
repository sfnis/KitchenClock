/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
                   module: 'MMM-NOAA3',
			position: 'top_right',
   			config: {
       			provider: "darksky", // From list above
       			apiKey: "222cdb7d497550ca10f8b225783033d2",        // From one of the providers listed above
       			airKey: "emp6tgefzCbmBbENA",    
       			css: "NOAA3",                   // THIS MUST CONTAIN A CSS STYLE NAME 
   			userlat: "37.735700", //MUST HAVE BOTH
       			userlon: "-122.435380"  //MUST HAVE BOTH
			}
    		},
		{
			module: "newsfeed",
			position: "bottom_right",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					},
{
					title: "NPR",
					url: "https://www.npr.org/rss/rss.php?id=1001",
				},
					{
					title: "LA Times",
					url: "http://www.latimes.com/rss2.0.xml",
					},
				],
				showSourceTitle: false,
				showPublishDate: false,
                                wrapTitle: true,
                                showDescription: true,
                                wrapDescription: true,
                                truncDescription: false,
                                lengthDescription: 40,
                                reloadInterval: 5000, // every 5 minutes
                                updateInterval: 90000,
                                animationSpeed: 2500,
                                maxNewsItems: 0, // 0 for unlimited
                                ignoreOldItems: true,
                                ignoreOlderThan: 86400000 // 1 day
			}
		},

{
    module: "MMM-Wallpaper",
    position: "fullscreen_below",
    config: { // See "Configuration options" for more information.
      source: "firetv",
      slideInterval: 2 * 6000 * 1000 // Change slides every minute
    }
  },
{
		module: "calendar",
		position: "bottom_left",	// This can be any of the regions. Best results in left or right regions.
		config: {
		url: 'https://outlook.office365.com/owa/calendar/b072243a16d44e1b98713ad67da2a62d@mapiadmin.net/a4203f93239c4501879a32597b3ea38914518533383813916312/S-1-8-1871497030-3303168791-4114604693-3836119432/reachcalendar.ics',
		symbol: 'calendar',	// The config property is optional.
			// If no config is set, an example calendar is shown.
			// See 'Configuration options' for more information.
		}
	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
