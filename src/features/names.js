import { createSlice } from '@reduxjs/toolkit'
import { NameAggreData } from '../NameAggreData';

export const nameSlice = createSlice(
    {
        name: "names",
        initialState: {value: NameAggreData}
    })

export default nameSlice.reducer;