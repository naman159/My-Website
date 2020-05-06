'use strict'

var SelectorTokenizer = require('css-selector-tokenizer')
var _ = require('lodash')

module.exports = function getCssClasses(selector, opts) {
  if (typeof selector !== 'string') {
    throw new TypeError('get-css-classes expects a string')
  }

  opts = opts || {}

  var tokens = SelectorTokenizer.parse(selector).nodes[0] || { nodes: [] }
  var index = 0

  return tokens.nodes.filter(function(token) {
    if (opts.keepPseudos) {
      index += 1

      if (token.type == 'class') {
        var tokensLeft = _.slice(tokens.nodes, index, tokens.length)

        if (isPseudo(tokensLeft[0])) {
          tokensLeft = _.takeWhile(tokensLeft, isPseudo)
          token.name = joinPseudos(token, tokensLeft)
        }

        return true
      } else {
        return false
      }
    } else {
      return token.type === 'class'
    }
  }).map(function(classToken) {
    return '.' + classToken.name
  })
}

function isPseudo(token) {
  return token && (token.type === 'pseudo-element' || token.type === 'pseudo-class')
}

function joinPseudos(token, pseudos) {
  var joinedName = token.name

  pseudos.forEach(function(pseudo) {
    joinedName = joinedName + (pseudo.type === 'pseudo-element' ? '::' : ':') + pseudo.name
  })

  return joinedName
}
