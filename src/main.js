import './style.css'
import {toDoClass} from "./scripts/toDoClass.js";

document.querySelector('#app').innerHTML = `
  <h1 class="app-name">To Do List</h1>
  <form method="post" id="app-form-add">
    <input type="text" name="app-form-add__input" placeholder="New task title" id="form-add-input">
    <button type="button" id="app-form-add__btn">Add</button>
  </form>
  <form method="get" id="app-form-search">
    <input type="text" name="app-form-search__input" placeholder="Search task" id="form-search-input">
    <button type="button" id="app-form-search__btn"><img alt="search-img" src="/public/img-search.png" width="16px" height="16px"></button>
  </form>
  <div class="actions">
    <p class="app-actions__total">Total Tasks: <span>0</span></p>
    <button type="button" class="not-visible" id="app-actions__del">Delete All</button>
  </div>
  <div class="app-lists">
    <ul class="app-lists__list">
      <p class="message">There are no task now</p>
    </ul>
  </div>
`

new toDoClass()