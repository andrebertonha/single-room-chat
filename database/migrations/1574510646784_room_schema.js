'use strict'

const Schema = use('Schema')

class RoomSchema extends Schema {
  up () {
    this.create('rooms', (table) => {
      table.increments()
      table.timestamps()

      table.uuid('uuid').unique()
    })
  }

  down () {
    this.drop('rooms')
  }
}

module.exports = RoomSchema
