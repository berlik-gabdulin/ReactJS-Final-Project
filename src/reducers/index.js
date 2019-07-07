const initialState = {
    menu: [],
    loading: true,
    error: false,
    orderIsSuccess: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            const mainMenu = action.payload.map(item => {
                item.id = item.name.toLowerCase().split(' ').join('-');
                return item;
            })
            return {
                ...state,
                menu: mainMenu,
                loading: false,
                error: false
            };
        case 'MENU_REQUESTED': 
            return {
                ...state
            };
        case 'MENU_CATCHED_ERROR':
            return {
                ...state,
                loading: action.loading,
                error: action.error
            };
        
        default:
            return state;
    }
}

export default reducer;