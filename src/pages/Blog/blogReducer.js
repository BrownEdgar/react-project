export const initialState = {
  data: [],
  count: 0
}

function blogReducer(state = initialState, action) {
  switch (action.type) {
    case 'save-blogs': return { data: action.payload, count: action.payload.length }
    default: return state
  }
}

export default blogReducer