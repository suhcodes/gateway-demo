'use strict'

import { createToken } from './post.js'

/**
 * @namespace auth
*/
export default function auth () {
  return {
    createToken: createToken.bind(this)
  }
}
