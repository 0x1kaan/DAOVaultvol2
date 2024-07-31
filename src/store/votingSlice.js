import { createSlice } from '@reduxjs/toolkit';

const votingSlice = createSlice({
  name: 'voting',
  initialState: {
    votes: {},
  },
  reducers: {
    castVote: (state, action) => {
      const { proposalId } = action.payload;
      if (state.votes[proposalId]) {
        state.votes[proposalId] += 1;
      } else {
        state.votes[proposalId] = 1;
      }
    },
  },
});

export const { castVote } = votingSlice.actions;
export default votingSlice.reducer;
