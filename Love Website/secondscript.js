const audio = document.getElementById('myAudio');
const yesButton = document.getElementById('yes-btn')
const noButton = document.getElementById('no-btn')
const paraText =document.querySelector('.buttons>p')

function playAudio() {
    audio.play();
}

function pauseAudio() {
    audio.pause();
}
yesButton.addEventListener('click',()=>{
    paraText.innerHTML = "I knew tum Mujhse pyr krte theee	&#128515"
    
    noButton.remove()

    yesButton.remove()
})

