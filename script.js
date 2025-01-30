const alternatives = [ 
  {text:"", images:"images/fluttering-eyelashes-flutters-eyelashes.gif"},
  {text:"NOOOOO", images:" images/blue-emoji.gif   "},
  {text:"WHYYYY", images:" images/stop-this-madness-blue-emoji.gif   "},
  {text:"RAHHHHH", images:" images/смайл.gif"},
  {text:"QUE!!!", images:" images/emoji-crying.gif"},
  {text:"PLEASE LOVE ME", images:"  images/emoji.gif "},
  {text:"TE QUIERO", images:"  images/emoji-sobbing.gif "},
  {text:"OH SO YOU HATE ME", images:"  images/dog-standing-here.gif"},
]
const ohyes = {text:"WANNA MAKE OUT", images:"images/emoji (1).gif "}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "YES"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'NO'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
              
          }
      }
  })
})