export class toDoClass{
  constructor(){
    this.bindEvents()
  }
  bindEvents(){
    document.addEventListener('change', event => this.checkboxChange(event))
    document.querySelector('#app-actions__del').addEventListener('click', () => this.deleteAllItems())
    document.addEventListener('click', (event) => this.deleteItem(event))
    document.querySelector('#app-form-add__btn').addEventListener('click', () => this.addItem())
    document.addEventListener('click', () => this.onClick())
  }
  checkboxChange(event){
    const isCheckBox = event.target.classList.contains('list-item-checkbox')
    if (!isCheckBox) return
    const listText = event.target.nextElementSibling

    if (event.target.checked){
      listText.style.color = '#757575'
      listText.style.textDecoration = 'line-through'
    } else{
      listText.style.color = '#1E1E1E'
      listText.style.textDecoration = 'none'
    }
  }

  deleteAllItems(){
    document.querySelector('.app-lists__list').innerHTML = ''
    document.querySelector('span').textContent = '0'
    document.querySelector('#app-actions__del').classList.remove('is-visible')
    document.querySelector('.message').classList.remove('close')
  }

  deleteItem(event){
    const isDelBtn = event.target.classList.contains('list-item-btn')
    if (!isDelBtn) return
    const closestListItem = event.target.closest('li')
    closestListItem.remove()
    let currentScore = document.querySelector('span').textContent
    currentScore--
    document.querySelector('span').textContent = currentScore
    if (currentScore === '0'){
      document.querySelector('#app-actions__del').classList.remove('is-visible')
      document.querySelector('.message').classList.remove('close')
    }
  }

  addItem(){
    const addInput = document.querySelector('#form-add-input')
    const scoreItems = document.querySelector('span')
    if (!addInput.value) return
    const addInputValue = addInput.value
    const listItemString = `<li class="app-lists__list-item">
        <input type="checkbox" class="list-item-checkbox" id="list-item-checkbox">
        <p class="list-item-label">${addInputValue}</p>
        <button type="button" class="list-item-btn" id="list-item-btn"><img alt="x-btn" src="/public/x-btn.svg" width="15px" height="15px"></button>
    </li>`
    document.querySelector('.app-lists__list').insertAdjacentHTML('beforeend', listItemString)
    addInput.value = ''
    let currentScore = scoreItems.textContent
    currentScore++
    scoreItems.textContent = currentScore
  }

  onClick(){
    if (document.querySelector('span').textContent === '0'){
      document.querySelector('#app-actions__del').classList.remove('is-visible')
      document.querySelector('.message').classList.remove('close')

    } else{
      document.querySelector('#app-actions__del').classList.add('is-visible')
      document.querySelector('.message').classList.add('close')
    }
  }

}
