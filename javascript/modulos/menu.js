
const menuButon= document.getElementById('menu-button');
const mainHeader = document.getElementById('main-header');
const mainOverlay= document.getElementById('main-overlay')

let activeClass ='isActive'

let toggle=() => mainHeader.classList.toggle(activeClass)
let removeActive = ()=>mainHeader.classList.remove('isActive') 

const closeMenuWhenClick =(event) => {
    if(event.target.tagName=='A') removeActive()
}


const closeWhenTypeScape= (event) => {
  if(event.code=='Escape') removeActive()
}


const isTablet=matchMedia('(max-width:734px)')


const handleAddEventListener = () => {
    menuButon.addEventListener('click',toggle)
    mainOverlay.addEventListener('click',removeActive)
    mainHeader.addEventListener('click',closeMenuWhenClick)
    mainHeader.addEventListener('keydown',closeWhenTypeScape)
}
const handleRemoveEventListener=()=>{
    menuButon.removeEventListener('click',toggle)
mainOverlay.removeEventListener('click',removeActive)
mainHeader.removeEventListener('click',closeMenuWhenClick)
mainHeader.removeEventListener('keydown',closeWhenTypeScape)
}

const handleEventListener= (mediaquery) => {
    if(mediaquery.matches) handleAddEventListener()
    else handleRemoveEventListener()
  
}

export const activeHandleMenu = () => {
    if(isTablet.matches) handleAddEventListener()
    isTablet.addEventListener('change',handleEventListener)
  
}
