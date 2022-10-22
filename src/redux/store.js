import { configureStore } from "@reduxjs/toolkit"
import {storeSliceReducer}   from "./reducer"

const store = configureStore({
    reducer: {
        propertyStore: storeSliceReducer
    }
})

export default store