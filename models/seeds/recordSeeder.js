const Record = require('../record')
const recordList = require('../../recordDefault.json').results
const db = require('../../config/mongoose')

db.once('open', async () => {
  try {
    for (let i = 0; i < recordList.length; i++) {
      await Record.create({
        title: `${recordList[i].title}`,
        date: `${recordList[i].date}`,
        category: `${recordList[i].category}`,
        amount: `${recordList[i].amount}`,
        description: `${recordList[i].description}`
      })
    }
  } catch (err) {
    console.warn(err)
  } finally {
    console.log('Record data created.')
    process.exit()
  }
})
