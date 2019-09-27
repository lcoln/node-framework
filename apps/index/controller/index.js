class M extends Controller {
  constructor(req, res, ctx) {
    super(ctx)
    // this.request = req
    // this.response = res
    // this.session = ctx.session
  }

  index (para) {
    return this.response.send(200, 'success')
  }
}

module.exports = M