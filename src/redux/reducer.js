import { createSlice } from "@reduxjs/toolkit"

const createStoreSlice = createSlice({
    name: "storeSlice",
    initialState: {
        propertiesForSale: [],
        propertiesToLet: [],
        staffs: [],
        adverts:[],
        isLoggedIn: false
    },
    reducer: {
        setpropertiesForSale: (state, action) => {
           state.propertiesForSale = [...state.propertiesForSale,action.payload]
        },
        setpropertiesToLet:(state, action)  => {
          state.propertiesToLet = [...state.propertiesToLet,action.payload]
        },
        setStaffs: (state, action) => {
          state.staffs = [...state.staffs, action.payload]
        },
        setAdverts: (state, action) => {
            state.adverts = [...state.adverts, action.payload]
        },
        setIsLoggedIn: (state, action) => {
            console.log("login just ran")
            state.isLogedIn = action.payload
          }

     
    }
})


export const { setpropertiesForSale, setpropertiesToLet, setAdverts,setIsLoggedIn} = createStoreSlice.actions

export const storeSliceReducer = createStoreSlice.reducer
