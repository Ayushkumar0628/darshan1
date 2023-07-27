import { ADD_SHOW, DELETE_SHOW, FAIL_REQUEST, GET_SHOW_LIST, GET_SHOW_OBJ, MAKE_REQUEST, UPDATE_SHOW } from "./ActionType"

const initialstate = {
    loading: true,
    showlist: [],
    showobj: {},
    errmessage: ''
}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_SHOW_LIST:
            return {
                loading: false,
                errmessage: '',
                showlist:action.payload,
                showobj:{}
            }
            case DELETE_SHOW:return{
                ...state,
                loading:false
            }
            case ADD_SHOW:return{
                ...state,
                loading:false
            }
            case UPDATE_SHOW:return{
                ...state,
                loading:false
            }
            case GET_SHOW_OBJ:return{
                ...state,
                loading:false,
                showobj:action.payload
            }
        default: return state
    }
}