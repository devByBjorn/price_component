import { displayPrice, hidePrice } from './hideDisplayPrice'
import { addHighlight, removeHighlight } from './addOrRemoveHighlight'

// Toggle by user
const togglePrice = () => {
  if (localStorage.getItem('price') === '.monthly') {
    displayPrice('.monthly')
    hidePrice('.anually')
    addHighlight('.right-element p')
    removeHighlight('.left-element p')
  } else {
    displayPrice('.anually')
    hidePrice('.monthly')
    addHighlight('.left-element p')
    removeHighlight('.right-element p')
  }
}

export default togglePrice