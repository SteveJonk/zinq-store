import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const imgSelector = '.page img'

export const animateImageOnScroll = () => {
  const scrollElements = gsap.utils.toArray(imgSelector)
  scrollElements.forEach((element: HTMLElement) => {
    // Add this if logo should not be animated
    // if (element.classList.contains('navigation__header__logo')) return
    gsap.from(element, {
      opacity: 0,
      y: 24,
      duration: 0.8,
    })

    gsap.to(element, {
      opacity: 1,
      y: 0,
      x: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        end: '0 50%',
        start: '0 100%',
        trigger: element,
        scrub: 0.1,
      },
    })
  })
}
