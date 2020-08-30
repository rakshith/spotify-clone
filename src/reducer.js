export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // REMOV after finished developing...
    token: 'BQBCAEON0opZuqIj9NHhictUbXqZw0g_pZAjwoNxJRiVs381b3t8ulU4dY4KTxu2eAb2UHnobgJaVKyPcwnR3Pwc7E1DhwTdUfZ_38cdRjtYDhDZoSI0Q3LX7LAT-x5MxMA6ta9ZHsVjJ8v4H9ON2gyleDsNFh2gHO1aqAfJ5OZq2LELq9Q7'
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        default:
            return state
    }
}

export default reducer