import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCart = createAsyncThunk("fetchCart", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(
      "https://6706ba16a0e04071d2280c93.mockapi.io/products"
    );
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  "addToCart",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "https://6706ba16a0e04071d2280c93.mockapi.io/products",
        { ...product, count: 1 }
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "removeFromCart",
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.delete(
        `https://6706ba16a0e04071d2280c93.mockapi.io/products/${product.id}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increaseProductCount = createAsyncThunk(
  "increaseCount",
  async (product, thunkAPI) => {
    try {
      await axios.put(
        `https://6706ba16a0e04071d2280c93.mockapi.io/products/${product.id}`,
        { ...product, count: product.count + 1 }
      );
      thunkAPI.dispatch(fetchCart());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const decreaseProductCount = createAsyncThunk(
  "decreaseCount",
  async (product, thunkAPI) => {
    try {
      await axios.put(
        `https://6706ba16a0e04071d2280c93.mockapi.io/products/${product.id}`,
        { ...product, count: product.count - 1 }
      );
      thunkAPI.dispatch(fetchCart());
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
