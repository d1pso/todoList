const form = document.querySelector('.to-do__form');
const input = document.querySelector('.to-do__input');
const notes = document.querySelector('.to-do__notes');
let note;

form.addEventListener('submit', function (event) {
      event.preventDefault();
      note = `<div class="to-do__note">
                  <div class="to-do__flex">
                  <img class="to-do__image" src="./img/unchecked.png" alt="">
                  <p class="to-do__text">${input.value.trim()}</p>
                  </div>
                  <img class="to-do__icon" src="./img/cross.png" alt="">
            </div>`     

      if (input.value.length > 0) {
            notes.insertAdjacentHTML('beforeend', note);
            input.value = ''
      }
})

notes.addEventListener('click', function(event) {
      let self = event.target;
      note = `<div class="to-do__note">
                  <div class="to-do__flex">
                  <img class="to-do__image" src="./img/unchecked.png" alt="">
                  <p class="to-do__text">${input.value.trim()}</p>
                  </div>
                  <img class="to-do__icon" src="./img/cross.png" alt="">
            </div>`

      if (self.closest('.to-do__note')) {
            let toDoText = self.closest('.to-do__note').querySelector('.to-do__text')
            let toDoImage = self.closest('.to-do__note').querySelector('.to-do__image')
            
            
            toDoText.classList.toggle('to-do__text--active')
            toDoImage.classList.toggle('to-do__image--active')
      }

      if (self.closest('.to-do__icon')) {
            self.closest('.to-do__note').remove()
      }
      
})

