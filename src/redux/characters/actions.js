import * as types from './types'

function setFetching(value){
    return {
        type: types.CHARACTERS_SET_FETCHING,
        value: value,
    }
}

export function setList(value) {
    return {
        type: types.CHARACTERS_UPDATE_LIST,
        value,
    }
}

export function setItem(value){
    return {
        type: types.CHARACTERSSET_ITEM,
        value,
    }
}

export function fetchHouseCharacters(){
    return (dispatch, getState, api) => {
        //Recuperamos la casa seleccionada
        const house = getState().houses.item
        console.log("fetchHouseCharacters", house)

        //Si en redux no se ha guardado la casa abortamos
        if(!house){
            return
        }

        dispatch(setFetching(true))

        console.log("fetchHouseCharacters api: ", api)

        api
            .fetchHouseCharacters(house.id)
            .then(res => {
                dispatch(setFetching(false))
                console.log("fetchHouseCharacters res: ", res)
                dispatch(setList(res.data.records))
                
            })
            .catch( err => {
                dispatch(setFetching(false))
                console.log("fetchHouseCharacters err: ", err)
            })
    }
}