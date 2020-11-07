/**
 * @param {string} date
 * @returns {string}
 */
export const toHuman = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
