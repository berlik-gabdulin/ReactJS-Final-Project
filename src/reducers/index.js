const initialState = {
    menu: [],
    loading: true,
    error: false,
    countries: [],
    descVisible: false,
    searchText: '',
    filteredMenu: [],
    searchedMenu: [],
    currentMenu: [],
    filterCountry: '',
    filterStatus: false,
    message: {
            name: '',
            email: '',
            phone: '',
            textMessage: ''
        },
    messageSent: false
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
                currentMenu: mainMenu,
                loading: false,
                error: false,
                countries: countryArray,
                filterCountry: '',
                filterStatus: false
            };
        case 'MENU_SEARCHED':
            
            const search = () => {
                if (action.filter === '') {
                    const menuSearch = state.menu.filter(item => {
                        return item.name.toLowerCase().indexOf(action.search) > -1;
                    })
                    const searchResult = (action.search !== '') ? menuSearch : state.menu;
                    return searchResult;
                } else {
                    const menuSearch = state.filteredMenu.filter(item => {
                        return item.name.toLowerCase().indexOf(action.search) > -1;
                    })
                    const searchResult = (action.search !== '') ? menuSearch : state.filteredMenu;
                    return searchResult;
                }
            }

            return {
                ...state,
                currentMenu: search(),
                searchedMenu: search()
            };
        case 'MENU_FILTERED':
            
            const filteredMenu = () => {
                if (action.search === '') {
                    if (state.filterCountry !== action.filter) {
                        const filteredMenu = state.searchedMenu.filter(item => item.country === action.filter);
                        const filterCountry = action.filter;
                        const status = true;
                        return [filteredMenu, filterCountry, status];
                    } else {
                        const filteredMenu = state.searchedMenu;
                        const filterCountry = '';
                        const status = !state.filterStatus;
                        return [filteredMenu, filterCountry, status];
                    }
                } else {
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
            }

            return {
                ...state,
                filteredMenu: filteredMenu()[0],
                currentMenu: filteredMenu()[0],
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
        case 'MESSAGE_POSTED':
            return {
                ...state,
                messageSent: true
            };
        case 'ANOTHER_MESSAGE':
            return {
                ...state,
                messageSent: false
            };
        case 'SHOW_DESCRIPTION':
            return {
                ...state,
                descVisible: !state.descVisible
            };
        
        default:
            return state;
    }
}

export default reducer;