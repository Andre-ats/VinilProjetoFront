import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const VinilVisualizarSlice = createSlice({
    name: "VinilVisualizarSlice",
    initialState:{},
    reducers:{
        altera:(state: any, action: PayloadAction<any>) => {
            state = {...state, ...action.payload}
            return state
        }
    }
})

export const { altera } = VinilVisualizarSlice.actions
export default VinilVisualizarSlice