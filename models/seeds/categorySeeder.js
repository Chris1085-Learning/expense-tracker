const categoryList = require('../../config/category.json').category
const db = require('../../config/mongoose')
const Category = require('../category')

db.once('open', async () => {
  try {
    for (let i = 0; i < categoryList.length; i++) {
      await Category.create({
        title: `${categoryList[i].title}`,
        name: `${categoryList[i].name}`,
        className: `${categoryList[i].className}`
      })
    }
  } catch (err) {
    console.warn(err)
  } finally {
    console.log('Category data created.')
    process.exit()
  }
})
