const initialState = {
    menu: [],
    loading: true,
    error: false,
    countries: [],
    filteredMenu: [],
    filterCountry: '',
    filterStatus: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED':
            let countryArray = [];
            const mainMenu = action.payload.map(item => {
                item.id = item.name.toLowerCase().split(' ').join('-');
                const newCountry = countryArray.find(arrItem => arrItem === item.country);
                
                if (!newCountry) {
                    countryArray.push(item.country);
                }

                return item;
            });
            
            return {
                ...state,
                menu: mainMenu,
                filteredMenu: mainMenu,
                loading: false,
                error: false,
                countries: countryArray,
                filterStatus: false
            };
        case 'MENU_FILTERED':
            
            const filteredMenu = () => {
                if (state.filterCountry !== action.filter) {
                    const filteredMenu = state.menu.filter(item => item.country === action.filter);
                    const filterCountry = action.filter;
                    const status = true;
                    return [filteredMenu, filterCountry, status];
                } else {
                    const filteredMenu = state.menu;
                    const filterCountry = '';
                    const status = !state.filterStatus;
                    return [filteredMenu, filterCountry, status];
                }
            }

            return {
                ...state,
                filteredMenu: filteredMenu()[0],
                filterCountry: filteredMenu()[1],
                filterStatus: filteredMenu()[2]
            }
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