// Functions to execute on toggle and window load
export const displayPrice = (pricePlan) => {
  localStorage.setItem('price', pricePlan)
  document.querySelectorAll(pricePlan).forEach((price) => {
    price.classList.remove('hide')
  })
}

export const hidePrice = (pricePlan) => {
  localStorage.setItem('price', pricePlan)
  document.querySelectorAll(pricePlan).forEach((price) => {
    price.classList.add('hide')
  })
}