
const bodyTag = document.querySelector('body')


const wiper = document.createElement('div')
wiper.innerHTML = "hi"
wiper.classList.add('wiper')
bodyTag.appendChild(wiper)



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

runScripts()














barba.init({
    debug:true,
    transitions: [
        {
            name: "main",
            leave({current, next, trigger}){
                return new Promise(resolve=>{
                    const timeline = gsap.timeline({
                        onComplete(){
                            current.container.remove()
                            resolve()
                        }
                    })
                    const textBits = current.container.querySelectorAll('div.typeface-description, div.typeface-description-lower')
    

                    timeline   
                        .to(textBits, {opacity:0})
                        .set(wiper, {y: "100%", duration:1})
                        .to(wiper, {y: 0})


                })
            },



            enter({current, next, trigger}){
                runScripts()
                return new Promise(resolve=>{
                    const timeline = gsap.timeline({
                        onComplete(){
                           
                            resolve()
                        }
                    })
                    timeline    
                    .to(wiper, {y: "-100%"})
                })
            }
        }
    ],
    views:[]
})