import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __postGradient = createAsyncThunk(
    "gradient/post",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post("api/plan", payload);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)

const initialState = {
    isLoading : true,
    gradient: []
}

const gradientSlice = createSlice({
    name: "gradient",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(__postGradient.pending, (state, action) => {
        })
      },
})