import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { VinilList } from "../API/Interfaces/InterfaceUsuarioPadrao/VinilList";

interface IVinilVisualizarSlice{
    vinil: VinilList
}

export const VinilVisualizarSlice = createSlice({
    name: "VinilVisualizarSlice",
    initialState:{},
    reducers:{
        altera:(state: any, action: PayloadAction<VinilList>) => {
            state = {...state, ...action.payload}
            return state
        }
    }
})

export const { altera } = VinilVisualizarSlice.actions
export default VinilVisualizarSlice