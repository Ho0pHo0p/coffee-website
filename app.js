const menuBtn= document.querySelector('.menu-btn');
const learnMoreBtn = document.querySelector('.learn-more-btn')
const viewFlavorsBtn = document.querySelector('.view-flavor-btn')
const menu = document.querySelector('.menu-cont');
const signup = document.querySelector('.sign-up');
const signupInput = document.querySelector('.sign-up-input')

const toggleMenu = () => {
  menu.classList.toggle('hidden')
}

menuBtn.addEventListener('click', toggleMenu )
signup.addEventListener('submit', (e) => {
  e.preventDefault();
  signupInput.value=""
} )