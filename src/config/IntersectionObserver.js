const options = {
  root: document.querySelector('main'),
  rootMargin: '0px',
  threshold: 0.9
}

export const observer = new window.IntersectionObserver((entries) => {
  entries
    .forEach(entry => {
      const { target, isIntersecting } = entry
      target._handleIntersect(isIntersecting)
    })
}, options)
