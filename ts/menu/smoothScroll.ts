import gsap from 'gsap'
import { scrollIntoViewWithOffset } from '../utils/scrollIntoViewWithOffset'
import { closeMenu } from './toggleMenuMobile'

const tl = gsap.timeline()

export const smoothScrollLinks = () => {
  const menuLinks = document.querySelectorAll('a')
  menuLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const currentTarget = event.currentTarget as HTMLAnchorElement
      if (currentTarget.hash.startsWith('#')) {
        event.preventDefault()

        // Let content breathe
        tl.to('.content', {
          opacity: 0.2,
          duration: 0.5,
        }).to('.content', {
          opacity: 1,
          duration: 0.5,
        })

        // Scroll to anchor
        const anchor = currentTarget.hash
        scrollIntoViewWithOffset(anchor, 50)
        closeMenu()
      }
    })
  })
}
