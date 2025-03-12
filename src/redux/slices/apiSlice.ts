import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";

const initialState = {
  items: [],
  key: {},
  status: "idle",
  error: null,
};

/////////////hämta API key

export const fetchApiKey = createAsyncThunk("key/fetchKey", async () => {
  try {
    const response = await fetch(api + "keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //behövs inte i dettta fallet..
      // body: JSON.stringify(data), // Skickar data som JSON
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    // console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
});
//////////////////

///////////////// hämta TENANT

export const fetchTenant = createAsyncThunk("tenant/fetchTenant", async () => {
  try {
    const response = await fetch(api + "tenants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": "<api-key-here>",
        //sätt in id här när ja fetchar där ja vill ha tentants sen!
        //sen lägga ttill egna builders ill extrareducern nere!
      },
      //behövs inte i dettta fallet..
      // body: JSON.stringify(data), // Skickar data som JSON
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    // console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
});
//////////////

// hämtar menyn

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async (key) => {
  try {
    const response = await fetch(api + "menu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": { key },
        //sätt in id här när ja fetchar där ja vill ha tentants sen!
        //sen lägga ttill egna builders ill extrareducern nere!
      },
      //behövs inte i dettta fallet..
      // body: JSON.stringify(data), // Skickar data som JSON
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success:", result);
    return result;
  } catch (error) {
    console.error("Error:", error);
  }
});

//////////////////

const apiSlice = createSlice({
  name: "api",
  initialState,

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchApiKey.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApiKey.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.key = action.payload;
      })
      .addCase(fetchApiKey.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.items; // behöver va items där för de blir fel annats..kolla upp!
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
