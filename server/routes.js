const router = require('koa-router')()
const fs = require('fs')
const path = require('path')

router.get('/war3icon', async (ctx, next) => {
  const dirPath = path.resolve(__dirname, '../assets/war3icon')
  const iconPaths = fs.readdirSync(dirPath)
  const randomIndex = Math.floor(iconPaths.length * Math.random())
  const iconPath = 'war3icon/' + iconPaths[randomIndex]
  // const iconPath = path.resolve(__dirname, 'war3icon', iconPaths[randomIndex])

  // const img = fs.readFileSync(path.resolve(__dirname, iconPath))
  // let filename = 'war3icon ' + new Date()
  // ctx.set('Content-disposition', 'attachment; filename =' + filename + '.jpg')
  ctx.type = 'json'
  ctx.body = {
    path: iconPath
  }
})

router.get('/war3icondownload', async (ctx, next) => {
  const dirPath = path.resolve(__dirname, '../assets/war3icon')
  const iconPaths = fs.readdirSync(dirPath)
  const randomIndex = Math.floor(iconPaths.length * Math.random())
  // const iconPath = 'war3icon/' + iconPaths[randomIndex]
  // const iconPath = path.resolve(__dirname, 'war3icon', iconPaths[randomIndex])

  // const img = fs.readFileSync(path.resolve(__dirname, iconPath))
  // let filename = 'war3icon ' + new Date()
  // ctx.set('Content-disposition', 'attachment; filename =' + filename + '.jpg')
  // ctx.type = 'json'
  // ctx.body = {
  //   path: iconPath
  // }
})

module.exports = router
