export default (state, action) => {
    console.log('state',state);
    switch (action.type) {
      case "rotate":
        return {
          rotating: action.payload
        };
      default:
        return state;
    }
  };