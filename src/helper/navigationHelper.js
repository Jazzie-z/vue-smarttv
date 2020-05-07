export const enableNavigation = (action) => {
    const KEY_CODE = {
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN'
    }
    window.addEventListener('keydown', (event) => {
        if(!action.preCondition || action.preCondition())
            action[KEY_CODE[event.keyCode]] && action[KEY_CODE[event.keyCode]]()
    });
}

export const disableNavigation = () => {

}