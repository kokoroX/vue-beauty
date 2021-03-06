import Notification from './notification.vue'
import Vue from 'vue'

Notification.newInstance = (data) => {
  const div = document.createElement('div')
  div.innerHTML = `<notification :top='${data.top}'></notification>`
  document.body.appendChild(div)

  const notification = new Vue({
    el: div,
    data: {},
    components: { Notification }
  }).$children[0]

  return {
    notice (noticeProps) {
      notification.add(noticeProps)
    },

    removeNotice (key) {
      notification.remove(key)
    },

    component: notification,

    destory () {
      document.body.removeChild(div)
    }
  }
}

export default Notification
