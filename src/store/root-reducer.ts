import { combineReducers } from "@reduxjs/toolkit";
import { FormState } from "./states/form";
import ApiServices from "./middleware/api-services";
import { globalSlice } from "./states/global";

const rootReducer = combineReducers({
  forms: FormState.reducer,
  global: globalSlice.reducer,
  [ApiServices.reducerPath]: ApiServices.reducer,
});

export default rootReducer;
