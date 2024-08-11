const $circle = document.querySelector('#circle')
const $score = document.querySelector('#score')

function start() {
  setScore(getScore())
  setImage()
  setpik()
  tytpik()
  kino()
  cameras()
  setknife()
  setdubilka()
  kluskai()
  spagas()
  setpropan()
  seklop()
  trun()
  kinoprok()
  camerassd()
  bombas()
  setsmoke()
  setpistol()
  traif()
  tec() 
  rtas()
  setoole()
  setjoki()
  setkkaj()
  usi()
  siusis()
  setusis()
  mchetos()
  scren()
  svge()
  awps()
  pizdas()
  tutre()
  setubiss() 
  setsmert()
}

function setScore(score) {
  localStorage.setItem('score', score)
  $score.textContent = score
}

function setImage() {
  if (getScore() >= 25) {
    $circle.setAttribute('src', './assets/lizzard.png')
  }
}
function setpik() {
  if (getScore() >= 50) {
    $circle.setAttribute('src', './assets/lomin.png')
  }
}

function tytpik() {
  if (getScore() >= 100) {
    $circle.setAttribute('src', './assets/vertka.png')
  }
}

function kino() {
  if (getScore() >= 150) {
    $circle.setAttribute('src', './assets/molotok.png')
  }
}
function cameras() {
  if (getScore() >= 200) {
    $circle.setAttribute('src', './assets/camera.png')
  }
}

function setknife() {
  if (getScore() >= 300) {
    $circle.setAttribute('src', './assets/knife.png')
  }
}
function setdubilka() {
  if (getScore() >= 400) {
    $circle.setAttribute('src', './assets/dubilka.png')
  }
}

function setmitstik() {
  if (getScore() >= 500) {
    $circle.setAttribute('src', './assets/mitstik.png')
  }
}

function kluskai() {
  if (getScore() >= 600) {
    $circle.setAttribute('src', './assets/klushka.png')
  }
}
function spagas() {
  if (getScore() >= 700) {
    $circle.setAttribute('src', './assets/spaga.png')
  }
}
function setpropan() {
  if (getScore() >= 800) {
    $circle.setAttribute('src', './assets/pfi.png')
  }
}
function seklop() {
  if (getScore() >= 900) {
    $circle.setAttribute('src', './assets/macheto.png')
  }
}

function trun() {
  if (getScore() >= 1000) {
    $circle.setAttribute('src', './assets/pila.png')
  }
}

function kinoprok() {
  if (getScore() >= 1100) {
    $circle.setAttribute('src', './assets/granata.png')
  }
}
function camerassd() {
  if (getScore() >= 1200) {
    $circle.setAttribute('src', './assets/hit.png')
  }
}

function bombas() {
  if (getScore() >= 1300) {
    $circle.setAttribute('src', './assets/bomb.png')
  }
}
function setsmoke() {
  if (getScore() >= 1400) {
    $circle.setAttribute('src', './assets/smoke.png')
  }
}
function setpistol() {
  if (getScore() >= 1500) {
    $circle.setAttribute('src', './assets/pistol.png')
  }
}

function traif() {
  if (getScore() >= 1600) {
    $circle.setAttribute('src', './assets/raiff.png')
  }
}

function tec() {
  if (getScore() >= 1700) {
    $circle.setAttribute('src', './assets/tec.png')
  }
}
function rtas() {
  if (getScore() >= 1800) {
    $circle.setAttribute('src', './assets/rta.png')
  }
}

function setoole() {
  if (getScore() >= 1900) {
    $circle.setAttribute('src', './assets/oole.png')
  }
}
function setjoki() {
  if (getScore() >= 2000) {
    $circle.setAttribute('src', './assets/joki.png')
  }
}

function setkkaj() {
  if (getScore() >= 2250) {
    $circle.setAttribute('src', './assets/kkaj.png')
  }
}

function usi() {
  if (getScore() >= 2500) {
    $circle.setAttribute('src', './assets/usis.png')
  }
}
function siusis() {
  if (getScore() >= 2750) {
    $circle.setAttribute('src', './assets/usi.png')
  }
}
function setusis() {
  if (getScore() >= 3000) {
    $circle.setAttribute('src', './assets/twinf.png')
  }
}
function mchetos() {
  if (getScore() >= 3500) {
    $circle.setAttribute('src', './assets/mcheta.png')
  }
}

function scren() {
  if (getScore() >= 4000) {
    $circle.setAttribute('src', './assets/scre.png')
  }
}

function svge() {
  if (getScore() >= 5000) {
    $circle.setAttribute('src', './assets/svg.png')
  }
}
function awps() {
  if (getScore() >= 6000) {
    $circle.setAttribute('src', './assets/awp.png')
  }
}

function pizdas() {
  if (getScore() >= 7000) {
    $circle.setAttribute('src', './assets/pizda.png')
  }
}
function tutre() {
  if (getScore() >= 8000) {
    $circle.setAttribute('src', './assets/tutr.png')
  }
}
function setubiss() {
  if (getScore() >= 9000) {
    $circle.setAttribute('src', './assets/ubiss.png')
  }
}

function setsmert() {
  if (getScore() >= 10000) {
    $circle.setAttribute('src', './assets/smert.png')
  }
}

function getScore() {
  return Number(localStorage.getItem('score')) ?? 0
}

function addOne() {
  setScore(getScore() + 1)
  setImage()
  setpik()
  tytpik()
  kino()
  cameras()
  setknife()
  setdubilka()
  setmitstik()
  kluskai()
  spagas()
  setpropan()
  seklop()
  trun()
  kinoprok()
  camerassd()
  bombas()
  setsmoke()
  setpistol()
  traif()
  tec() 
  rtas()
  setoole()
  setjoki()
  setkkaj()
  usi()
  siusis()
  setusis()
  mchetos()
  scren()
  svge()
  awps()
  pizdas()
  tutre()
  setubiss() 
  setsmert()
}

$circle.addEventListener('click', (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfsetX = event.clientX - rect.left - rect.width / 2
  const offfsetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offfsetY / rect.height) * DEG
  const tiltY = (offfsetX / rect.width) * -DEG

  $circle.style.setProperty('--tiltX', `${tiltX}deg`)
  $circle.style.setProperty('--tiltY', `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty('--tiltX', `0deg`)
    $circle.style.setProperty('--tiltY', `0deg`)
  }, 300)

  const plusOne = document.createElement('div')
  plusOne.classList.add('plus-one')
  plusOne.textContent = '+1'
  plusOne.style.left = `${event.clientX - rect.left}px`
  plusOne.style.top = `${event.clientY - rect.top}px`

  $circle.parentElement.appendChild(plusOne)

  addOne()

  setTimeout(() => {
    plusOne.remove()
  }, 2000)
})

start()
