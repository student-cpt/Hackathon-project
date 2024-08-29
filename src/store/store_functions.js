import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: {
        botModel: false,
        botMessage: true,
        message: {
            date: "",
            ticket: 0,
            children: 0,
            adult: 0,
            type: ""
        }
    },
    pages: {
        page: 1
    }
}

const store_functions = createSlice({
    name: "Store_Function",
    initialState,
    reducers: {
        updateBotModel: (state, action) => {
            state.data.botModel = action.payload;
        },
        updateBotMessage: (state, action) => {
            state.data.botMessage = action.payload
        },
        updateMessage: (state, action) => {
            const { name, value } = action.payload
            state.data.message[name] = value;

            if (name == "ticket") {
                state.data.message["children"] = 0
                state.data.message["adult"] = 0
            }
        },
        updatePage: (state, action) => {
            state.pages.page = action.payload;
        }
    }
})

export const { updateBotModel, updateBotMessage, updateMessage, updatePage } = store_functions.actions;

export default store_functions.reducer;