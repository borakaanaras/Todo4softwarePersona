/**
 * @typedef {Object} Todo
 * @property {number} id - Benzersiz görev kimliği
 * @property {string} text - Görev metni
 * @property {boolean} completed - Tamamlanma durumu
 * @property {string} [createdAt] - Oluşturulma tarihi (ISO string)
 */

/**
 * @typedef {'all' | 'active' | 'completed'} FilterType
 */

export const TODO_INITIAL = Object.freeze({
  id: 0,
  text: '',
  completed: false,
})
