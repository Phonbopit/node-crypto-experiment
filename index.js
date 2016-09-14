'use strict';

const crypto = require('crypto');

module.exports = {
  createHash: (text, options={secret: 'secret', encoding: 'hex'}) => {

    return crypto.createHmac('sha256', options.secret)
      .update(text)
      .digest(options.encoding);
  }
}
