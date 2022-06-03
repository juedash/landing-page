import Events from '@utilities/events'
import Modal from '../../modal/javascript/modal/modal'

class Newsletter {
  constructor() {
    this.init()
  }

  init() {
    Events.$trigger('modal::bind', { data: { hook: '#newsletter-modal' } })
    //Events.$trigger('video::update', { data: { hook: '#newsletter-modal' } })

    let video = document.getElementById('video-1')
    Events.$on('modal::open', () => {
      video.playerInstance.pause()
      console.log('test')
    })

    Events.$on('modal::close', () => {
      video.playerInstance.play()
      console.log('test')
    })

  }
}

export default new Newsletter()
