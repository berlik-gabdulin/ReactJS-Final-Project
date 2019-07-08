const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuFiltered = (filter) => {
    return {
        type: 'MENU_FILTERED',
        filter
    }
};

const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
};

const menuCatchedError = () => {
    return {
        type: 'MENU_CATCHED_ERROR',
        loading: false,
        error: true
    }
};

export {
    menuLoaded,
    menuFiltered,
    menuRequested,
    menuCatchedError
};