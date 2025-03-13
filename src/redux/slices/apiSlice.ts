// svårt försttå schema etc, endpoints, body o
// läsa var ok vad som ska finnas o var etc...
// ex kolla mina fetc o träna!
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { id } from "date-fns/locale";

const api = "https://fdnzawlcf6.execute-api.eu-north-1.amazonaws.com/";

const initialState = {
  items: [],
  key: {},
  status: "idle",
  error: null,
  tenant: "", // sträng ist för obj
  etaInfo: {},
  reciept: {},

  // eller array ?
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
    console.log("key i ten", key.key);
    // console.log("tennnnnn i ten", tenant);

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
      console.log("Success tentantsssssssssssssssssssssss:", result);
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

//submit/////////////////////
// ${BASE_URL}/${tenantName}/orders

export const submitOrder = createAsyncThunk(
  "submit/postSubmit",
  async ({ tenant, key, items }) => {
    console.log("items i submit", items);
    console.log("keys i submit", key);
    console.log("tenant i submit", tenant);
    const itemsIds = items.map((item) => item.id);

    // const newItems = items.map((item) => {
    //   // Använd items om det är en array
    //   return {
    //     description: item.description,
    //     id: item.id,
    //     ingredients: item.ingredients,
    //     name: item.name,
    //     price: item.price,
    //     quantity: item.quantity,
    //     type: item.type,
    //   };
    // });

    // const tenantId = tenant.id;

    try {
      const response = await fetch(
        // api + tenant + "/orders",
        `${api} ${tenant}/orders`,
        //  api + tenant + "/orders",
        // api + `${tenant}` + "/orders",

        // inte tentant.id här?

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-zocom": key.key,
          },

          body: JSON.stringify({
            // items: itemsData,
            items: itemsIds,
            // items: items,
          }),
        }

        // {
        //   "items": [
        //     1
        //   ]
        // }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log("Success posting!!!!!!!!! :", result);
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
    console.log("idddddddddd", id); // id.id?
    console.log("keyyyyyyyyyyyyy", key);

    try {
      const response = await fetch(
        // fel här..
        api + `receipts/${id}`,

        // `${api}receipts/${id.id}`,
        // api + `receipts/9xsj805y`,
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
        state.items = action.payload.items; // behöver va items där för de blir fel annats..kolla upp!!!!
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
