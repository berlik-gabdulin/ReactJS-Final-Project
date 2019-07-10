const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuSearch = (search, filter) => {
    return {
        type: 'MENU_SEARCHED',
        search,
        filter
    }
};

const menuFiltered = (filter, search) => {
    return {
        type: 'MENU_FILTERED',
        search,
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

const messagePosted = () => {
    return {
        type: 'MESSAGE_POSTED'
    }
}
const anotherMessage = () => {
    return {
        type: 'ANOTHER_MESSAGE'
    }
}
const showDescription = () => {
    return {
        type: 'SHOW_DESCRIPTION'
    }
}

export {
    menuLoaded,
    menuFiltered,
    menuRequested,
    menuCatchedError,
    menuSearch,
    messagePosted,
    anotherMessage,
    showDescription
};