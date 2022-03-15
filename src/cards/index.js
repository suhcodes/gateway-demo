'use strict'

import { getCards } from './get.js'

/**
 * @namespace auth
*/
export default function cards () {
  return {
    getCards: getCards.bind(this)
  }
}
