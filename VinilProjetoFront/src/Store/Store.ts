import { configureStore } from "@reduxjs/toolkit";
import VinilVisualizarSlice from "./VinilVisualizarSlice";

const store = configureStore({
    reducer: {
        vinilVisualizar: VinilVisualizarSlice.reducer
    }
})

export default store