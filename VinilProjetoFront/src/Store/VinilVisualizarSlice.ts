import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VinilList } from "../API/Interfaces/InterfaceUsuarioPadrao/VinilList";
import { estiloMusical } from "../API/Interfaces/InterfaceUsuarioPadrao/EnumEstiloMusical";
import { statusVinil } from "../API/Interfaces/InterfaceUsuarioPadrao/EnumStatusVinil";

const initialState: VinilList = {
  nomeVinil: "",
  descricaoVinil: "",
  precoVinil: "",
  quantiaVinil: "",
  estiloMusical: estiloMusical.Rock,
  vinilImagem: [],
  statusVinil: statusVinil.Ativo,
  id: "",
};

export const VinilVisualizarSlice = createSlice({
  name: "VinilVisualizarSlice",
  initialState,
  reducers: {
    altera: (state, action: PayloadAction<VinilList>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { altera } = VinilVisualizarSlice.actions;
export default VinilVisualizarSlice;
