export const type = {
  add: 'ADD',
  remove: 'REMOVE',
  edit: 'EDIT',
}

const initState = {
  items: [],
}

export const reducer = (state = initState, payload) => {
  switch(payload.type) {  
    case type.add:
      return {
        ...state,
        items: [
          ...state.items,
          payload.item,
        ],
      };
    case type.remove: {
      const newValue = state.items.filter(item => item.id != payload.item.id);
      return {
        ...state,
        items: newValue,
      };
    }
    case type.edit: {
      const newValue = state.items.filter(item => item.id != payload.item.id);
      return {
        ...state,
        items: [
          ...newValue,
          payload.item,
        ],
      };
    }   
    default:
      return state;
  }
}

export const addItem = (item) => {
  return {
    type: type.add,
    item
  }
}

export const removeItem = (item) => {
  return {
    type: type.remove,
    item,
  }
}

export const editItem = (item) => {
  return {
    type: type.edit,
    item,
  }
}
