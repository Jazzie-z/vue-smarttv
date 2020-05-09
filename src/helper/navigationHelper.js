let registered =false
let actions = []
export const enableNavigation = (actionCB) => {
    const KEY_CODE = {
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN'
    }
    
    if(registered){
        const index = actions.findIndex(item=>item.id===actionCB.id)
        if(index>-1){
            actions[index]=actionCB
        }else{
            actions.push(actionCB)
        }
        
    }else{
        registered=true
        actions.push(actionCB)
        window.addEventListener('keydown', (event) => {
            actions.forEach(action=>{
                if(!action.preCondition || action.preCondition())
                action[KEY_CODE[event.keyCode]] && action[KEY_CODE[event.keyCode]]()
            })
            
        });
    }
    
}

export const disableNavigation = () => {

}