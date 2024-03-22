import gsap from 'gsap'
import { tl as tlIntro } from '../animations/intro'

const tl = gsap.timeline()

export const toggleMenu = () => {
  const openButton = document.getElementById('open_menu')
  const closeButton = document.getElementById('close_menu')
  openButton.addEventListener('click', () => {
    openMenu()
  })
  closeButton.addEventListener('click', () => {
    closeMenu()
  })
}

export const openMenu = () => {
  tlIntro.progress(3).pause()

  tl.to('#navigation', {
    x: '100%',
    ease: 'slow(0.3, 0.2, false)',
    delay: 0.2,
  }).from('#navbar li', {
    x: '-100%',
    stagger: 0.1,
    duration: 1,
  })
  document.documentElement.style.overflowY = 'hidden'
}
export const closeMenu = () => {
  gsap.to('#navigation', {
    x: '0',
    duration: 0.6,
    ease: 'power2.out',
  })
  document.documentElement.style.overflowY = 'auto'
}
