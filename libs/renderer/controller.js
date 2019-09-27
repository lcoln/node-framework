const fs = require('iofs')
class Controller {
  constructor(ctx) {
    this.request = ctx.request
    this.response = ctx.response
    this.session = ctx.session
    this.cookie = ctx.cookie
    this.jwt = ctx.jwt
    this.template = ctx.template
    this.ctx = ctx
    this._init()
  }

  _init () {
    let jwt = this.ctx.get('jwt')
    if (jwt) {
      // this.jwtPass = this.jwt.verify()
    } else {
      !this.session.isStart && this.session.start()
      let cookieConfig = this.ctx.get('cookie')
      if (cookieConfig) {
        let cookie = this.request.headers('cookie')
        let cookieInfo = `NODESSID=${this.session.uuid}; `
        for (let i in cookieConfig) {
          cookieInfo += `${i}=${cookieConfig[i]}; `
        }
        !this.session.verify(cookie) && this.cookie.set('Set-Cookie', cookieInfo)
      }
    }
  }

  render (tpl) {
    let content = fs.cat(Utils.resolve(`${process.env.PWD}/views/${tpl}.tpl`)) + ''
    return this.template.render(content)
  }

  assign (k, v) {
    return this.template.assign(k, v)
  }
}

module.exports = Controller