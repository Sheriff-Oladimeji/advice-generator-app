const adviceText = document.querySelector('.advice')
const adviceBtn = document.querySelector('.dice')
const adviceId = document.querySelector('#advice-id')


async function adviceGenerator(){
    let response = await fetch('https://api.adviceslip.com/advice')
    let data =await response.json()
    adviceText.textContent = data.
}
adviceGenerator()