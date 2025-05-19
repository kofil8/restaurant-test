import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./slices/menuSlice";
// import reservationReducer from "./slices/reservationSlice";
// import testimonialReducer from "./slices/testimonialSlice";
// import teamReducer from "./slices/teamSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    // reservation: reservationReducer,
    // testimonials: testimonialReducer,
    // team: teamReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
