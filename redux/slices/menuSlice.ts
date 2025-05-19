import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// This async thunk will call your backend API to get menu data
export const fetchMenu = createAsyncThunk("menu/fetchMenu", async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/menu`);
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
});

const menuSlice = createSlice({
  name: "menu",
  initialState: { items: [], status: "idle", error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || null;
      });
  },
});

export default menuSlice.reducer;