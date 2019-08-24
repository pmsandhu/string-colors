const colors = {
  reset: '\x1b[0m',

  bold: '\x1b[1m',
  dim: '\x1b[2m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  inverse: '\x1b[7m',
  hide: '\x1b[8m',
  strike: '\x1b[9m',

  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  pink: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',

  bg_black: '\x1b[40m',
  bg_red: '\x1b[41m',
  bg_green: '\x1b[42m',
  bg_yellow: '\x1b[43m',
  bg_blue: '\x1b[44m',
  bg_pink: '\x1b[45m',
  bg_cyan: '\x1b[46m',
  bg_white: '\x1b[47m'
}

for (const prop in colors) {
  Object.defineProperty(String.prototype, prop, {
    configurable: true,
    get() { return colors[prop] + this + colors.reset }
  })
}

const removeStringColor = color => delete String.prototype[color]
const removeStringColors = () => Object.keys(colors).forEach(val => delete String.prototype[val])

module.exports = { 
  removeStringColor, 
  removeStringColors 
}
