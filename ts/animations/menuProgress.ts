import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const menuSelector = '.menu-item a'

export const menuProgress = () => {
  const scrollElements = gsap.utils.toArray(menuSelector) as HTMLAnchorElement[]
  scrollElements.forEach((element) => {
    const hash = element.hash
    const loader = element.children[0]

    gsap.to(loader, {
      height: '100%',
      scrollTrigger: {
        start: '0 60%',
        end: '0 50px',
        trigger: hash,
        scrub: true,
      },
      onComplete: () => {
        gsap.to(loader, {
          width: 0,
        })
      },
      onStart: () => {
        gsap.to(loader, {
          width: 3,
        })
      },
      onReverseComplete: () => {
        gsap.to(loader, {
          width: 3,
        })
      },
    })
    gsap.from(loader, {
      height: '100%',
      scrollTrigger: {
        end: '0 60%',
        start: '0 50px',
        trigger: hash,
        scrub: true,
      },
      onComplete: () => {
        gsap.to(loader, {
          width: 0,
        })
      },
      onReverseComplete: () => {
        gsap.to(loader, {
          width: 3,
        })
      },
    })
  })
}
