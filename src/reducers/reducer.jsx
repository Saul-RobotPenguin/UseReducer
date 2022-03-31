export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      let currentAddValue = state;
      return (currentAddValue += action.payload);

    case "SUBTRACT":
      let currentSubValue = state;
      return (currentSubValue -= action.payload);

    default:
      return state;
  }
}
