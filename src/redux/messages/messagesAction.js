import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MESSAGES = 'GET_MESSAGES';

const getMessages = createAsyncThunk(
  GET_MESSAGES,
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/messages');
    const data = await response.json();

    return data.data;
  },

);

export default getMessages;
