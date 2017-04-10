import io from 'socket.io-client'

export function getClient (config = {}) {
  const NAME_SPACE = config.NAME_SPACE ||
  window && window.__CONFIG__ && window.__CONFIG__.NAME_SPACE ||
  '/transactions'
  const url = config.url || ''
  const connectUrl = `${url}${NAME_SPACE}`
  const socketio = io(
    connectUrl,
    { transports: ['websocket'] }
  )
  return {
    socketio
  }
}
