import Vue from 'vue'
import { ValidationProvider, extend } from 'vee-validate'

// Add a rule.

extend('positive', value => {
  if (value >= 0) {
    return true
  }

  return 'The {_field_} field must be a positive number正数'
})

extend('even', value => {
  return value % 2 === 0
})
extend('odd', value => {
  return value % 2 !== 0
})

extend('minLength', {
  validate (value, args) {
    return value.length >= args.length
  },
  params: ['length']
})

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max']
})
//
extend('one_of', (value, values) => {
  return values.indexOf(value) !== -1
})

extend('min', {
  validate (value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: 'The {_field_} field must have at least {length} characters'
})

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: 'The {_field_} field must have at least {min} characters and {max} characters at most'
})

extend('minmax', {
  validate (value, { min, max }) {
    return value.length >= min && value.length <= max
  },
  params: ['min', 'max'],
  message: (fieldName, placeholders) => {
    return `The ${fieldName} field must have at least ${placeholders.min} characters and ${placeholders.max} characters at most`
  }
})
// Register it globally
Vue.component('ValidationProvider', ValidationProvider)
