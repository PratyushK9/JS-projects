const hnKahoButton = document.getElementById('hn-kaho-btn');
const noButton = document.getElementById('no-btn')
const kabirAudio = document.getElementById('myAudio')



hnKahoButton.addEventListener('click',()=>{
    const tempPrompt = prompt('Pakka keh doon','Yes')
    window.location.href="secondindex.html"
})

function playAudio(){
    let audio = new Audio("_Kisne_Touch_Kiya_Usko_Dialogue_Kabir_Singh_ringtone_(Fringster.com).mp3")
    audio.play()
}
noButton.addEventListener('click', playAudio)


