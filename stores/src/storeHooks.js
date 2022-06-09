import { slices, COUNTER_NAME_SPACE } from "./slices";
import { useSelector, useDispatch } from "react-redux";

const createUseStore = (nameSpaceInStore) => () => {
  const stateUnderNameSpace = useSelector((state) => state[nameSpaceInStore]);
  const dispatch = useDispatch();
  const actionsInSlice = slices[nameSpaceInStore].actions;

  const dispatchObject = Object.keys(actionsInSlice).reduce(
    (mapObject, currentActionKey) => {
      mapObject[currentActionKey] = () =>
        dispatch(actionsInSlice[currentActionKey]());
      return mapObject;
    },
    {}
  );
  return {
    ...stateUnderNameSpace,
    ...dispatchObject,
  };
};

export const useCounterStore = createUseStore(COUNTER_NAME_SPACE);
