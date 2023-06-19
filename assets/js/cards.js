let selected=null

const cards = document.getElementsByClassName('card-body')
const cardsContainer=document.querySelectorAll('.btn.card')


for (let card of cards){
    card.classList.add('card__align--center');
}

const colors=['bg-primary', 'bg-info','bg-warning']
const transparent='bg-transparent'

const changeColors = (container, index, revert)=>{
    const i=Number(index)
    revert 
        ?container.classList.replace(colors[i], transparent)
        :container.classList.replace(transparent, colors[i])
}

const cardEnter=(e)=>{
    const {index}=e.target.dataset
    changeColors(e.target, index, false)
}
const cardLeave=(e) =>{
    const {index}=e.target.dataset
    changeColors(e.target, index, true)
}
const cardClick =(e)=>{
    selected= e.currentTarget.dataset.index
    matchCategory(selected)
    eventsAssignmentAll()
}

const eventCleaner=(container)=>{
    container.removeEventListener('mouseenter', cardEnter)
    container.removeEventListener('mouseleave', cardLeave)
    container.removeEventListener('click', cardClick)
}

const eventAssignment=(container)=>{
    container.addEventListener('mouseenter', cardEnter)
    container.addEventListener('mouseleave', cardLeave)
    container.addEventListener('click', cardClick)
}

const eventsAssignmentAll=()=>{
    for (let container of cardsContainer){
    eventCleaner(container)

        const {index}=container.dataset
        if(index!==selected){
            eventAssignment(container)
            changeColors(container, index, true)
        }
    }
}

eventsAssignmentAll()

