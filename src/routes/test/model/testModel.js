
export const namespace = 'test'
export default {
  namespace,
  state: { a: 1 },
  reducers: {
    changea: (state, payload) => {
      let b = state.a
      b += 1
      return {
        ...state,
        a: b,
      }
    },
  },
}
