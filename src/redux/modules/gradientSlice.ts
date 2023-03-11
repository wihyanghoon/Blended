import { createAsyncThunk, createSlice, PayloadAction, } from "@reduxjs/toolkit";
import axios from "axios";

type StateType = {
    isloading: boolean,
    gradient: object[],
    error: string
}

type PayloadType = {
    _id: string,
    toColor: string,
    fromColor: string,
    copsCss: string
}

export const __postGradient = createAsyncThunk(
    "gradient/post",
    async (payload, thunkAPI) => {
        try {
            const data = await axios.post("api/plan", payload);
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const initialState: StateType = {
    isloading: true,
    gradient: [],
    error: "",
}

const gradientSlice = createSlice({
    name: "gradient",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(__postGradient.pending, (state) => {
            state.isloading = true;
        })
        builder.addCase(__postGradient.fulfilled, (state, action: PayloadAction<PayloadType>) => {
            state.isloading = false;
            state.gradient.push(action.payload)
        })
        builder.addCase(__postGradient.fulfilled, (state, action: PayloadAction<string>) => {
            state.isloading = true;
            state.error = action.payload
        })
    },
})

export const { } = gradientSlice.actions;
export default gradientSlice.reducer;