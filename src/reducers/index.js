const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    total: 0,
    orderIsSuccess: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED': 
            return {
                ...state,
                menu: action.payload,
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
        case 'ITEM_ADD_TO_CART':
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const cartItem = state.items.find(item => item.id === id);

            const newItemsState = () => {
                if (cartItem) {
                    
                    const currentItemIndex = state.items.findIndex(item => item.id === id);

                    cartItem.count++;

                    const newCartItem = {
                        title: cartItem.title,
                        price: cartItem.price,
                        url: cartItem.url,
                        id: cartItem.id,
                        total: cartItem.total + cartItem.price,
                        count: cartItem.count
                    }

                    let itemsState = [
                        ...state.items.slice(0, currentItemIndex),
                        newCartItem,
                        ...state.items.slice(currentItemIndex + 1)
                    ];
                    return itemsState;
                } else if (!cartItem) {
                    const newItem = {
                        title: item.title,
                        price: item.price,
                        url: item.url,
                        id: item.id,
                        total: item.price,
                        count: 1
                    };
                    let itemsState = [
                        ...state.items,
                        newItem
                    ];
                    return itemsState;
                }
            }
            
            return {
                ...state,
                items: newItemsState(),
                total: state.total + item.price
            };
        case 'ITEM_REMOVE_FROM_CART':
            const idx = action.payload;
            const cartRemoveItems = state.items.find(item => item.id === idx);
            const itemIndex = state.items.findIndex(item => item.id === idx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: Number(state.total) - Number(cartRemoveItems.total)
            }
        case 'ORDER_CONFIRM':
            return {
                ...state,
                items: [],
                total: 0,
                orderIsSuccess: true
            };
        default:
            return state;
    }
}

export default reducer;