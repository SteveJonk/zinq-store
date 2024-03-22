import gsap from 'gsap'

export const tl = gsap.timeline()

export const intro = () => {
  tl.set('body', {
    position: 'fixed',
  })
    .fromTo(
      '#intro-logo',
      {
        opacity: 0,
        clipPath: 'circle(0 at 0)',
      },
      {
        opacity: 1,
        clipPath: 'circle(400px at 0)',
        duration: 1.8,
      }
    )
    .to(
      '.intro',
      {
        opacity: 0,
        duration: 0.7,
        display: 'none',
      },
      '+=0.3'
    )
    .set('body', {
      position: 'static',
    })
    .from('#navbar li', {
      x: '-100%',
      stagger: 0.1,
      duration: 1,
    })
}
