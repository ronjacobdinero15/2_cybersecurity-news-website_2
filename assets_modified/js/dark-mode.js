function darkMode() {
  let button = document.querySelector('.dark-mode-img')
  let element = document.body
  let caption = document.querySelector('.top-caption')
  let ticket = document.querySelector('.ticker')
  let header = document.querySelector('.header-mid')
  let headerBottom = document.querySelector('.header-bottom')
  document.querySelectorAll('.logo').forEach(logo => {
    logo.classList.toggle('dark-mode-invert')
  })

  header.classList.toggle('dark-mode')
  button.classList.toggle('dark-mode-invert')
  element.classList.toggle('dark-mode')
  caption.classList.toggle('dark-mode')
  caption.classList.toggle('caption-border')
  ticket.classList.toggle('dark-mode-invert')
  headerBottom.classList.toggle('dark-mode')
}
