'use strict'

const uuidv4 = require('uuid/v4')

const Room = use('App/Models/Room')
const Message = use('App/Models/Message')

const { broadcast } = require('../../utils/socket.utils')

class RoomController {

  async index () {
    const messages = Message.all()
    return messages
  }

  async select ({ params }) {

    console.log(params.id, 'teste')

    const room = await Room.findOrFail(params.id)

    return room;

  }

  async store () {

    const uuid = uuidv4()

    const room = Room.create({ uuid })

    return room
  }

  async createMessage ({ params, request, response }) {

    const room = await Room.find(params.id)

    if (!room) {
      return response.notFound('Room doesnt exist!')
    }

    const data = request.only(['name', 'message'])

    const message = Message.create({ ...data, room_id: room.uuid })

    return message

  }
}

module.exports = RoomController
