const topBarCenterText = `W3RDW`;
// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
const aURL = [
  ["add10d", "BACK", "#", "1"],
  ["add10d", "BACK", "#", "1", "R"],
  ["ff9100", "Refresh", "#", "1"],
  ["0dd1a7", "Help", "#", "1"],
  ["2196F3", "CLUBLOG", "https://clublog.org/livestream/W3RDW", "1.7"],
  [
    "2196F3",
    "CONTEST",
    "https://www.contestcalendar.com/fivewkcal.html",
    "1",
  ],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  [
    "2196F3",
    "LIGHTNING",
    "https://map.blitzortung.org/#3.87/36.5/-89.41",
    "1",
    "R",
  ],
  ["2196F3", "PISTAR", "http://pi-star.local/", "1.2"],
  [
    "2196F3",
    "RADAR",
    "https://weather.gc.ca/?layers=alert,radar&center=43.39961001,-78.53212031&zoom=6&alertTableFilterProv=ON",
    "1",
    "R"
  ],
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  [
    "2196F3",
    "WEATHER",
    "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=39.4912&lon=-84.3057&zoom=5",
    "1",
    "R",
  ],
  [
    "2196F3",
    "WINDS",
    "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-84.31,39.49,3000",
    "1",
    "R",
  ],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
const aIMG = [
  ["RADAR", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  [
    "LOCAL RADAR",
    "https://radar.weather.gov/ridge/standard/KILN_loop.gif",
  ],
  [
    "NOAA D-RAP",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/latest.png",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "SATELLITE GEOCOLOR",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/GEOCOLOR/GOES19-CONUS-GEOCOLOR-625x375.gif",
  ],
  [
    "SANDWICH RGB",
    "https://cdn.star.nesdis.noaa.gov/GOES19/ABI/CONUS/Sandwich/GOES19-CONUS-Sandwich-625x375.gif",
  ],
  [
    "LIGHTNING GLM",
    "https://cdn.star.nesdis.noaa.gov/GOES19/GLM/CONUS/EXTENT3/GOES19-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "AURORA FORECAST",
    "https://services.swpc.noaa.gov/images/aurora-forecast-northern-hemisphere.jpg",
  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "LATEST SOLAR IMAGE",
    "https://services.swpc.noaa.gov/images/animations/suvi/primary/304/latest.png",
  ],
  ["10M PROPAGATION", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];
