const initialState = {
    chakras: [{id: 1, name: "root"}]
  }
  
const chakraReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CHAKRAS":
      return {
        ...state,
        chakras: action.payload
      }
    
    case "SET_CHAKRA":
      return {
        ...state,
        chakra: action.payload
      }
      
      default:
        return state
    }
  }
  
export default chakraReducer;