const images = document.querySelectorAll('.d-1 > div img');
const d3 = document.querySelector('.d-3');

images.forEach(image => {
  image.addEventListener('click', () => {
    d3.innerHTML = '';

    const src = image.src;
    const imgElement = document.createElement('img');
    imgElement.classList.add('render-img');
    imgElement.src = src;

    d3.innerHTML = '';
    d3.append(imgElement);

    randomMsg();
  })
});

const randomMessages = [
  'Keep calm and pour yourself another cup of coffee...',
  'Life happens. Coffee helps...',
  'Coffee: because crack is bad for you.',
  'Behind every successful person is a substantial amount of coffee...',
  'Coffee first, adulting second...',
  'Coffee is a hug in a mug...',
  'Perk up! It\'s coffee time...',
  'Stressed, blessed, and coffee obsessed...',
  'Bean me up, Scotty!',
  'Espresso yourself! Life is better with a little bit of coffee and a whole lot of sass...',
  'Life is short, drink the good coffee...',
  'Coffee is the answer. I don\'t remember the question...',
  'There\'s nothing sweeter than a steaming cup of coffee in the morning...',
  'Make coffee, not war...',
  'Too much Monday, not enough coffee...',
  'Love is in the air and it smells like coffee...',
  'A day without coffee is like... just kidding, I have no idea...',
  'Life begins after coffee...',
  'You can\'t buy happiness, but you can buy coffee, and that\'s pretty close...'

]

let count = 0;
function randomMsg(){
  count = Math.floor(Math.random() * randomMessages.length);
  document.querySelector('.d-4 p').innerHTML = randomMessages[count];
}

window.addEventListener('load', () => {
  randomMsg();
});

const date = new Date();
const year = date.getFullYear();
document.querySelector('footer').innerHTML = `&copy; ${year}. All rights reserved.`;

document.querySelector('.order').onclick = () => {
  document.querySelector('dialog').showModal();
}

document.querySelector('.opt button').onclick = () => {
  document.querySelector('dialog').close();
}