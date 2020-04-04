# Data repository for covid19karnataka.info

This repository is a clone of [data.covid19japan.com](https://github.com/reustle/covid19japan-data) for covid19karnataka.info

## Data Formats

### docs/patient_data/latest.json

Data is an array of patient data objects.
```
  [
    { ... patient data },
    { ... patient data },
  ]
```

Example Patient Data:
```
  {
    "patientId": 64,
    "statepatientId": "KA-P64",
    "dateAnnounced": "17/03/2020",
    "age": 25,
    "gender": M,
    "detectedcity": "Bengaluru",
    "detecteddistrict": "Bengaluru",
    "patientStatus": "Recovered",
    "notes": "Travelled from US",
    "sourceURL": "State Health Bulletin - 22nd March",
    "transmissionType": "Local"
  },
```

| Fields | Values | Description |
| ------ | ------ | ----------- |
| patientId | Numeric | Unique identifier for patients |
| statepatientId | String | Unique identifier for patients given by Karnataka Govt |
| dateAnnounced | DD/MM/YYYY | Date patient was announced to have tested positive |
| age | Numeric | Age -1 for unspecified |
| gender | M/F/Unspecified | |
| detectedcity | City/Town or Blank | City/Town patient was detected in |
| detecteddistrict | District or Blank | District patient was detected in |
| patientStatus | Unspecified, Hospitalized, Deceased, Discharged, Recovered | Condition of patient (Discharged and Recovered are similar) |
| notes | String | Other text |
| sourceURL | URL | Any news or press release where this data was sourced from |
| transmissionType | URL | Local or Imported |

### docs/patient_data/summary.json

Individal Prefecture data:
```
{
    "name": "Bengaluru"
    "confirmed": 47,
    "deaths": 0,
    "confirmedByCity": {
      "Bengaluru": 44
    },
    "dailyConfirmedCount": [
      1
    ],
    "dailyConfirmedStartDate": "2020-03-09",
    "newlyConfirmed": 0,
    "recovered": 9,
  }
```

List is sorted by summary.count.

| Field | Values | Description |
| ----- | ------ | ----------- |
| name | string | Name of the city |
| confirmed | Numeric | Total infected count |
| deaths | Numeric | Total number of deaths |
| confirmedByCity | Object | Keys are individual cites and their total infected counts |
| recovered | Numeric | Total number of recovered patients |
| newlyConfirmed | Numeric | Newly confirmed data |