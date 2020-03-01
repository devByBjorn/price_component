
import { hidePrice } from './js/hideDisplayPrice'
import { addHighlight, removeHighlight } from './js/addOrRemoveHighlight'
import togglePrice from './js/togglePrice'

// Window load - make sure that only one of the price plans are showed on load
(function loadPrice() {
  if (localStorage.getItem('price') === '.monthly') {
    hidePrice('.monthly')
    addHighlight('.left-element p')
    removeHighlight('.right-element p')
    document.querySelector('#slider').checked = false;
  } else {
    hidePrice('.anually')
    addHighlight('.right-element p')
    removeHighlight('.left-element p')
    document.querySelector('#slider').checked = true;
  }
})();

document.querySelector('#slider').addEventListener('change', togglePrice)