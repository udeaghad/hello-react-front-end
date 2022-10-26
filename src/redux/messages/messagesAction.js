import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_MESSAGES = 'GET_MESSAGES';

const getMessages = createAsyncThunk(
  GET_MESSAGES,
  async () => {
    const response = await fetch('/api/v1/messages');
    const data = await response.json();
    
    return data.data;  
  }
  
);

export { getMessages };