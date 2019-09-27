class M {
  constructor(mysql) {
    /*this.conn = mysql
    this.db = mysql.useDB('db')
    this.table = this.db.table('table')*/
  }

  /*query () {
    return this.conn.useDB('store').query('select * from table')
  }

  select () {
    return this.table
    .select({
      select: [],
      group: [],
      limit: {
        start: 0,
        size: 10
      }
    })
  }

  insert (data) {
    return this.table
      .insert({
        data
      })
  }

  update (data) {
    return this.table
      .update({
        data,
        where: `id = ${data.id}`
      })
  }

  createTable (para) {
    return this.db
      .createTable(para)
  }

  createDB ({ name }) {
    return this.conn
      .createDB(name)
  }

  count () {

    return this.table
      .count({
        data,
        where: `id = ${data.id}`
      })
  }*/
}

module.exports = M