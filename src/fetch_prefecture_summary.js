const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '1wsLOccSvm78O4BHIXv3qaAt_jYOvZmLR9_mJOslTdtU'
const SHEET_PREFECTURE_TAB = 2


async function fetchPrefectureSummary() {
  return drive({sheet: SHEET, tab: SHEET_PREFECTURE_TAB})
    .then(db => {
      /*console.log(db);*/
      return db
    })
}

exports.fetchPrefectureSummary = fetchPrefectureSummary;
