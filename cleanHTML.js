
function CleanHTML (attrList) {
  const o = new Object()
  o.attrList = attrList || ["class", "style", "height", "width", "valign"]
  o.cleanHTML = function (html) {
    if (!html || html === "") {
      return ""
    }
    // clean comments, no break space & empty line break nodes
    const cleanHtml = html.replace(/(<!--.+-->)|(&nbsp;)|(<\w+>\n<\/\w+>)/g, "")
    const tempWrapper = document.createElement("div")
    tempWrapper.innerHTML = cleanHtml

    const childNodes = tempWrapper.querySelectorAll("*")
    childNodes.forEach(item => {
      // remove empty nodes
      if (!item.innerText || item.innerText === "") {
        item.parentNode.removeChild(item)
      }
      // remove redundant attributes
      o.attrList.forEach(attr => {
        item.removeAttribute(attr)
      })
    })
    return tempWrapper.innerHTML
  }
  return o
}