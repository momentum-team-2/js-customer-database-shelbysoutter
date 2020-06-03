let customerCards = document.querySelector('.customer-cards')

// Add name as h2 element
for (let info of customers) {
    let li = document.createElement('li')
    li.classList.add('name-customer')
    let nameEl = document.createElement('h2')
    li.appendChild(createNameElement(info.name.first+' '+info.name.last))
    // li.appendChild(createEmail(info.email))
    customerCards.appendChild(li)
    li.innerHTML += createImage(info.picture.large)

}

function createNameElement (name) {
    let nameEl = document.createElement('h2')
    nameEl.innerText = `${name}` // alternative to creating a text node and appending that to the h3
    return nameEl
  }


  function createImage (url) {
    return `<img src=${url}>`
  }

  function createEmail (email) {
      let li2 = document.createElement('li')
      emailAd.innerText = `${email}`
      return emailAd
  }

{/* <article class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
  <div class="tc">
    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h3 w3 dib" title="info.name.first+' '+info.name.last">
    <h1 class="f4">Mimi Whitehouse</h1>
    <hr class="mw3 bb bw1 b--black-10">
  </div>
  <p class="lh-copy measure center f6 black-70">
    Quite affectionate and outgoing.
    She loves to get chin scratches and will
    roll around on the floor waiting for you give her more of them.
  </p>
</article> */}