export function createStore(
  rootReducer: (arg0: any, arg1: { type: string }) => any,
  initialState: any
) {
  let state = rootReducer(initialState, { type: "__INIT__" });
  const subscribers: any[] = [];

  return {
    dispatch(action: any) {
      state = rootReducer(state, action);
      subscribers.forEach((sub) => sub());
    },
    subscribe(callback: any) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
}
