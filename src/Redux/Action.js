import axios from "axios"
import { toast } from "react-toastify"
// import Updateuser from "../Component/Updateuser"
import { ADD_SHOW, DELETE_SHOW, FAIL_REQUEST, GET_SHOW_LIST, GET_SHOW_OBJ, MAKE_REQUEST, UPDATE_SHOW } from './ActionType'

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getShowList=(data)=>{
    return{
        type:GET_SHOW_LIST,
        payload:data
    }
}
export const deleteShow=()=>{
    return{
        type:DELETE_SHOW
    }
}
export const addShow=()=>{
    return{
        type:ADD_SHOW
    }
}
export const updateShow=()=>{
    return{
        type:UPDATE_SHOW
    }
}
export const getShowObj=(data)=>{
    return{
        type:GET_SHOW_OBJ,
        payload:data
    }
}



export const FetchShowList=()=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('https://show-79ll.onrender.com/show').then(res=>{
            const showlist=res.data;
            dispatch(getShowList(showlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const RemoveShow=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.delete('https://show-79ll.onrender.com/show'+code).then(res=>{
            dispatch(deleteShow());
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionAddShow=(data)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.post('https://show-79ll.onrender.com/show',data).then(res=>{
            dispatch(addShow());
            toast.success('Show Added successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}

export const FunctionUpdateShow=(data,code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.put('https://show-79ll.onrender.com/show'+code,data).then(res=>{
            dispatch(updateShow());
            toast.success('Show Updated successfully.')
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}
export const FetchShowObj=(code)=>{
    return (dispatch)=>{
      dispatch(makeRequest());
      //setTimeout(() => {
        axios.get('https://show-79ll.onrender.com/show'+code).then(res=>{
            const showlist=res.data;
            dispatch(getShowObj(showlist));
          }).catch(err=>{
            dispatch(failRequest(err.message))
          })
     // }, 2000);
     
    }
}