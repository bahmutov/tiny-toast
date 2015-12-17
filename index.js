var tinyToast

function createDom () {
  if (tinyToast) {
    return tinyToast
  }

  tinyToast = document.createElement('h3')
  var style = tinyToast.style
  style.color = '#333'
  style.position = 'fixed'
  style.bottom = '0em'
  style.right = '1em'
  style.backgroundColor = '#7FFFD4'
  style.borderRadius = '5px'
  style.borderWidth = '1px'
  style.borderColor = '#73E1BC'
  style.borderStyle = 'solid'
  style.padding = '1em 2em'
  document.body.appendChild(tinyToast)
  return tinyToast
}

function createMessage (text) {
  createDom().textContent = text
}

function closeMessage () {
  if (tinyToast) {
    document.body.removeChild(tinyToast)
    tinyToast = null
  }
}

function maybeDefer (fn, timeoutMs) {
  if (timeoutMs) {
    setTimeout(fn, timeoutMs)
  } else {
    fn()
  }
}

var tinyToastApi = {
  show: function show (text) {
    createMessage(text)
  },
  hide: function (timeoutMs) {
    maybeDefer(closeMessage, timeoutMs)
  }
}

module.exports = tinyToastApi
