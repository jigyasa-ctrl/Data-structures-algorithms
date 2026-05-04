// DO CHANGE FUNCTION NAME

function traverse(nodes, search, result) {

    for (let value of nodes) {
      if (value.classList && value.classList.contains(search)) {
        result.push(value)
      } 
       if (value.children.length > 0) {
        traverse(value.children, search, result)
      }
  
    }
  }
  function getElementsByClassName(search) {
    let result = []
    // write your code below
    let html = document.lastChild
    let bodyChildren = html.lastChild.children
    // let bodyChildren = this.body.children

    traverse(bodyChildren, search, result)
    return result
  }
  
  Document.prototype.getElementsByClassName = getElementsByClassName
  
  