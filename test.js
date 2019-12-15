
const bodyTag = document.querySelector('body')


const wiper = document.createElement('div')
wiper.innerHTML = "hi"
wiper.classList.add('wiper')
bodyTag.appendChild(wiper)



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