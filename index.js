'use strict';

const crypto = require('crypto');

module.exports = {
  createHash: (text, secret) => {
    return crypto.createHmac('sha256', secret)
      .update(text)
      .digest('hex');
  }
}
