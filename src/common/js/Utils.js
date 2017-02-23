let urlRoot = 'http://192.168.1.100:12580'
let assetsRoot = 'assets'

export default {
  getUrl (url) {
    return `${urlRoot}/${assetsRoot}/${url}`
  }
}
