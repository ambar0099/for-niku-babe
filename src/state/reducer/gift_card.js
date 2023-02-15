import ACTION from '../actions';

const intialState = {
    emailId: ''
}

const giftCard = (state = null, action) => {
    switch (action.type) {
        case ACTION.LOAD_GIFT:
            return state;
        case ACTION.UPDATE_EMAIL:
            return Object.assign({}, state, { emailId: action.payload});
            case 'load_db_success': {
                const {
                  thanksScreen,
                  welcomeScreen,
                  id,
                  adminId,
                  coverImage,
                  identifier,
                  shareLink,
                  roundCont
                } = action.payload;
                return {
                  ...state,
                  thanksScreen,
                  welcomeScreen,
                  id,
                  adminId,
                  coverImage,
                  identifier,
                  shareLink,
                  isLoading: false,
                  roundCont
                }
              }
        default:
            return state;
    }
}

const reducer = (state = null, action) => {
  switch (action.type) {
      case 'UPDATE_STYLE':
          return {
              ...state,
              widgetId: {
                  ...state.widgetId,
                  [action.payload.prop.screen]: {
                      ...state.widgetId[action.payload.prop.screen],
                      elements: {
                          ...state.widgetId[action.payload.prop.screen].elements,
                          [action.payload.prop.id]: {
                              ...state.widgetId[action.payload.prop.screen].elements[action.payload.prop.id],
                              style: {
                                  ...state.widgetId[action.payload.prop.screen]
                                      .elements[action.payload.prop.id].style,
                                  [action.payload.prop.param]:
                                      action.payload.prop.val,
                              },
                          },
                      },
                  },
              },
          };
      case 'UPDATE_TEXT':
          return state - 1;
      default:
          return state;
  }
};

export { giftCard, reducer }