'use strict'

const Model = use('Model')

class Room extends Model {
  messages () {
    return this.hasMany('App/Models/Message')
  }
}

module.exports = Room
