const containerOne = document.querySelector('div.container-one')
const containerTwoSpans = document.querySelectorAll('div.container-two span')
const containerThreeSpans = document.querySelectorAll('div.container-three span')

const sections = document.querySelectorAll('section')




const runScripts = function (){
    const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
    
    
            if (entry.intersectionRatio >= 0.1) {
              entry.target.classList.add('in-view')
              console.log('hello')
            } else {
              entry.target.classList.remove('in-view')
            }
        })
      },
      {
        threshold: [0, 0.1, 1]
      }
    )
    
        console.log(sections)
    
    // sections.forEach(section=>{
    //     observer.observe(section)
    // })
    containerTwoSpans.forEach(span=>{
        observer.observe(span)
    })
    containerThreeSpans.forEach(span=>{
        observer.observe(span)
    })
}
















