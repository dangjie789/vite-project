/* storage二次封装 */
import config from '../config/index'
export default {

    setItem(key, value) {
        let storage = this.getStorage()
        storage[key] = value
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    getItem(key) {
        let storage = this.getStorage()
        return storage[key]

    },
    getStorage() {
        return JSON.parse(window.localStorage.getItem(config.namespace)) || {}
    },
    removeItem(key) {
        let storage = this.getStorage()
        delete storage[key]
        window.localStorage.setItem(config.namespace, JSON.stringify(storage))
    },
    clear() {
        window.localStorage.clear()
    }

}