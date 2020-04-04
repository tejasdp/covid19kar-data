const drive = require('drive-db')
const _ = require('lodash')

const SHEET = '1wsLOccSvm78O4BHIXv3qaAt_jYOvZmLR9_mJOslTdtU'
const SHEET_PATIENT_DATA_TAB = 1

// Post processes the data to normalize field names etc.
const postProcessData = (rawData) => {

  /*console.log(rawData)*/

  // Check validity of the row.
  const isValidRow = row => {
    if (!row.dateAnnounced) { return false }
    return true
  }

  const transformRow = row => {
    const normalizeNumber = n => {
      if (isNaN(parseInt(n))) { return -1 }
      return parseInt(n)
  }

  const unspecifiedToBlank = v => {
    if (v == 'Unspecified') return ''
    return v
  }

  let transformedRow = {
    'patientId': normalizeNumber(row.patientnumber),
    'statepatientId': row.statepatientnumber,
    'dateAnnounced': row.dateannounced,
    'age': normalizeNumber(row.age),
    'gender': unspecifiedToBlank(row.gender),
    'detectedcity': row.detectedcity,
    'detecteddistrict': row.detecteddistrict,
    'patientStatus': row.currentstatus,
    'notes': row.notes,
    'sourceURL': row.source_1,
    'transmissionType': row.typeoftransmission
  }

  // filter empty cells.
  transformedRow = _.pickBy(transformedRow, (v, k) => {
    if (v == '') {
      return false
    }
    return true
  })

  // Add a field to indicate whether we count as patient or not.
  transformedRow.confirmedPatient = (transformedRow.patientId > 0)

  return transformedRow
}
  
  const rows = _.filter(_.map(rawData, transformRow), isValidRow)
  return rows
}


async function fetchPatientData() {
  return drive({sheet: SHEET, tab: SHEET_PATIENT_DATA_TAB})
    .then(db => {
      return postProcessData(db)
    })
}

exports.fetchPatientData = fetchPatientData;
