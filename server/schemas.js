const { Document } = require('camo')

class Task extends Document {
  constructor () {
    super()

    this.details = String
  }
}

class About extends Document {
  static collectionName () {
    return 'about'
  }

  constructor () {
    super()
    /* eslint-disable */
    
    this.summary = Array,
    this.sandboxLinks = Array,
    this.links = Array,
    this.references = Array,
    this.description = String
    /* eslint-enable */
  }
}

class Contact extends Document {
  static collectionName () {
    return 'contact'
  }

  constructor () {
    super()
    /* eslint-disable */

    this.references = Array
    /* eslint-enable */
  }
}

module.exports = {
  About,
  Contact,
  Task
}
