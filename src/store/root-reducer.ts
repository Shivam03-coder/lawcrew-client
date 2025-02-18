import { combineReducers } from "@reduxjs/toolkit";
import { FormState } from "./states/form";
import ApiServices from "./middleware/api-services";

const rootReducer = combineReducers({
  forms: FormState.reducer,
  [ApiServices.reducerPath]: ApiServices.reducer,
});

export default rootReducer;
