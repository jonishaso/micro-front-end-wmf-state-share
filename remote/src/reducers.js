export const counterInitialState = {
  count: 0,
};

export const counterReducers = {
  increment: (state) => {
    state.count += 1;
  },
  decrease: (state) => {
    state.count -= 1;
  },
};
