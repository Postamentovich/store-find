## Find neares store

## https://find-nearest-store.herokuapp.com/api/store

1. [Features](#features)
1. [Technologies and libraries used](#technology)
1. [Project structure](#structure)
1. [ENV Variables](#variables)
1. [Google Sheet Description](#googlesheet)
1. [API](#api)

### <a name="features">Features</a>

- Getting data about stores from google sheet
- Searching store by radius 20km, 50km, 100km and then by all stores
- Return nearest store by user location

### <a name="technology">Technologies and libraries used</a>

- Node.js
- Express
- Turf
- TableTop

### <a name="structure">Project structure</a>

```
├── config/                     # Config module for app
├── controller/                 # Route controller
├── repository/                 # Getting data from google sheet
├── route/                      # Express routes
└── service/                    # Main app logic
index.js                        # Entry point
```

### <a name="variables">ENV Variables</a>

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">variable</th>
    <th >description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>PORT</td>
      <td>Application port</td>
    </tr>
    <tr>
      <td>GOOGLE_SHEET_URL</td>
      <td>Google sheet url</td>
    </tr>
  </tbody>
</table>

### <a name="googlesheet">Google Sheet Description</a>

Data updated from google sheets every 30 minutes.

IMPORTANT! DO NOT CHANGE COLUMN `Latitude` and `longitude` title, this is will broken app. You can change other coolumns and rows, all data will be on response

### <a name="api">API</a>

Endpoints:

GET - `/api/store?lat="LATITUDE"&lng="LONGITUDE"`

Parameters:

<table class="table table-bordered table-striped">
  <thead>
  <tr>
    <th style="width: 100px;">variable</th>
    <th >type</th>
    <th >description</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>lat</td>
      <td>number</td>
      <td>latitude</td>
    </tr>
     <tr>
      <td>lng</td>
      <td>number</td>
      <td>longitude</td>
    </tr>
  </tbody>
</table>

### Example:

Request: `https://find-nearest-store.herokuapp.com/api/store?lat=13.221898190099632&lng=77.23114013671875`

Response:
```js
{
    "Store Name": "",
    "Address": "Unit No UG 76, Mantri Mall,, Sampige Road, Malleshwaram Bengaluru 560003 Karnataka, IN",
    "Latitude": "12.991523",
    "longitude": "77.570311",
    "location": "Bengaluru, Karnataka",
    "distance": 44.78193627144007
}
```
