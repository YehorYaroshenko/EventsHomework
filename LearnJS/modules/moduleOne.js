const menuButton = document.querySelector('.menu')

document.addEventListener('click', func)
document.addEventListener('keyup', (event) => {
   if (event.code === 'Escape') {
      menuButton.classList.remove('menu__active')
   }
})

function func(event) {
   if (event.target.closest('.menu__button')) {
      menuButton.classList.toggle('menu__active')
   }
   if (!event.target.closest('.menu')) {
      menuButton.classList.remove('menu__active')
   }
}



const txtItem = document.querySelector('.textarea__item')
const txtLimit = txtItem.getAttribute('maxlength')
const txtCounter = document.querySelector('.textarea__counter span')

txtCounter.innerHTML = txtLimit

txtItem.addEventListener('keyup', txtSet)
txtItem.addEventListener('keydown', (event) => {
   if (event.repeat) txtSet()
})

function txtSet() {
   const txtCounterRes = txtLimit - txtItem.value.length
   txtCounter.innerHTML = txtCounterRes
}



const searchBtn = document.querySelector('.search')

document.addEventListener('click', showSearch)
document.addEventListener('keyup', (event) => {
   if (event.code === 'Escape') {
      searchBtn.classList.remove('search__active')
   }
})
function showSearch(event) {
   if (event.target.closest('.search__button')) {
      searchBtn.classList.toggle('search__active')
   }
   if (!event.target.closest('.search__button, .search__form, .search__text')) {
      searchBtn.classList.remove('search__active')
   }
}

const searchForm = document.querySelector('.search__form')
const searchCounter = document.querySelector('.search__text span')

searchForm.addEventListener('keyup', function () {
   let formCount = searchForm.value
   searchCounter.innerHTML = formCount.length
})
searchForm.addEventListener('keydown', function (event) {
   if (event.repeat) {
      let formCount = searchForm.value
      searchCounter.innerHTML = formCount.length
   }
})

