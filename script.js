function load() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var data = new Date()
  var tme = data.getHours()
  msg.innerHTML = `Now is ${tme} o'clock`
  if (tme >= 0 && tme < 12) {
    // Good Morning
    img.src = 'imagens/Manha.png'
    document.body.style.background = '#ead5c6'
  } else if (tme >= 12 && tme <= 18) {
    //Good Afternoon
    img.src = 'imagens/Tarde.png'
    document.body.style.background = '#6a8b9a'
  } else {
    //Good Night
    img.src = 'imagens/Noite.png'
    document.body.style.background = '#344447'
  }
}
