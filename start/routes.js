'use strict'

const Route = use('Route')

Route.on('/').render('chat')

Route.group(() => {
  Route.post('', 'RoomController.store')
  Route.get(':id', 'RoomController.select')
  Route.post(':id', 'RoomController.createMessage')
}).prefix('/rooms')

Route.get('/messages', 'RoomController.index')
