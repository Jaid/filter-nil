/** @module filter-nil */

import {isNil} from "lodash"

/**
 * Returns the passed array without entries that are `null` or `undefined`
 * @example
 * import filterNil from "filter-nil"
 * const result = filterNil(["a", null, "b", , "c", undefined, "d")
 * ["a", "b", "c", "d"]
 * @returns {*[]} Cleaned array
 */
export default array => {
  if (!Array.isArray(array)) {
    return []
  }
  return array.filter(value => !isNil(value))
}