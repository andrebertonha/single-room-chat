'use strict'

const Model = use('Model')

class Message extends Model {
  room () {
    return this.belongsTo('App/Model?Room')
  }
}

module.exports = Message
