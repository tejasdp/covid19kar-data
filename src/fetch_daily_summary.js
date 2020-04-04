const drive = require('drive-db')
const fs = require('fs')
const _ = require('lodash')

const SHEET = '1wsLOccSvm78O4BHIXv3qaAt_jYOvZmLR9_mJOslTdtU'
const SHEET_SUM_BY_DAY_TAB = 3


async function fetchDailySummary() {
  return drive({sheet: SHEET, tab: SHEET_SUM_BY_DAY_TAB})
    .then(db => {
      return db
    })
}

exports.fetchDailySummary = fetchDailySummary;
