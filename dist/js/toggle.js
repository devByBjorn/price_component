// Functions to execute on toggle and window load
const displayPrice = (pricePlan) => {
  localStorage.setItem('price', pricePlan)
  document.querySelectorAll(pricePlan).forEach((price) => {
    price.classList.remove('hide')
  })
}

const hidePrice = (pricePlan) => {
  localStorage.setItem('price', pricePlan)
  document.querySelectorAll(pricePlan).forEach((price) => {
    price.classList.add('hide')
  })
}

const higlightPlan = (item) => {
  document.querySelector(item).style.color = '#6d708d'
}

const removeHighlight = (item) => {
  document.querySelector(item).style.color = '#b3b5c6'
}

// Window load - make sure that only one of the price plans are showed on load
(function loadPrice() {
  if (localStorage.getItem('price') === '.monthly') {
    hidePrice('.monthly')
    higlightPlan('.left-element p')
    removeHighlight('.right-element p')
    document.querySelector('#slider').checked = false;
  } else {
    hidePrice('.anually')
    higlightPlan('.right-element p')
    removeHighlight('.left-element p')
    document.querySelector('#slider').checked = true;
  }
})();

// Toggle by user
const togglePrice = () => {
  if (localStorage.getItem('price') === '.monthly') {
    displayPrice('.monthly')
    hidePrice('.anually')
    higlightPlan('.right-element p')
    removeHighlight('.left-element p')
  } else {
    displayPrice('.anually')
    hidePrice('.monthly')
    higlightPlan('.left-element p')
    removeHighlight('.right-element p')
  }
}

document.querySelector('#slider').addEventListener('change', togglePrice)