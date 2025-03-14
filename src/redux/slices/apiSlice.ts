import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const api = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";

const initialState = {
  items: [],
  key: {},
  status: "idle",
  error: null,
  tenant: "",
  etaInfo: {},
  reciept: {},
};

/////////////hämta API key

export const fetchApiKey = createAsyncThunk("key/fetchKey", async () => {
  try {
    const response = await fetch(api + "keys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log("Success key:", result);
    return result;
  } catch (error) {
    console.error("Error key:", error);
  }
});
//////////////////

///////////////// hämta TENANT

export const fetchTenant = createAsyncThunk(
  "tenant/fetchTenant",
  async (key) => {
    try {
      const response = await fetch(api + "tenants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-zocom": key.key,
        },

        body: JSON.stringify({
          name: (Math.floor(Math.random() * 110000) + 1).toString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success tentant:", result);
      return result.id; //
    } catch (error) {
      console.error("Error tenant:", error);
    }
  }
);
//////////////

// hämtar menyn

export const fetchMenu = createAsyncThunk("menu/fetchMenu", async (key) => {
  try {
    const response = await fetch(api + "menu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-zocom": key,
      },
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

//submit/////////////////////

export const submitOrder = createAsyncThunk(
  "submit/postSubmit",
  async ({ tenant, key, items }) => {
    const payload = {
      items: items.flatMap((item) => Array(item.quantity).fill(item.id)),
    };

    try {
      const response = await fetch(`${api} ${tenant}/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-zocom": key.key,
        },

        // kolla de..
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success posting:", result);

      return result;
    } catch (error) {
      console.error("Error :", error);
    }
  }
);

// få reciept /////////////

export const getReciept = createAsyncThunk(
  "reciept/getReciept",
  async ({ key, id }) => {
    try {
      const response = await fetch(
        api + `receipts/${id}`,

        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-zocom": key.key,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success Reciept :", result);
      return result;
    } catch (error) {
      console.error("Error Reciept :", error);
    }
  }
);

////////////////////////////

////////////////////////////////

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
        state.items = action.payload.items;
        // behöver va items där för de blir fel annats..kolla upp!!!!
        // kolla hur arrays el obj e uppbygga när de kmr så ja vet va ja ska lägga de uppdatterat state!!!
      })
      .addCase(fetchMenu.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(fetchTenant.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTenant.fulfilled, (state, action) => {
        console.log("fullfilled");

        state.status = "succeeded";
        state.tenant = action.payload;

        // uppdatera tenant från skickat..
      })
      .addCase(fetchTenant.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(submitOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitOrder.fulfilled, (state, action) => {
        console.log("hej", action.payload.order);

        state.status = "succeeded";
        state.etaInfo = action.payload.order;
        // kolla upp
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(getReciept.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getReciept.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reciept = action.payload;
      })
      .addCase(getReciept.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
