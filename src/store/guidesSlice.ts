import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Guide {
  id: string;
  description: string;
  status: string;
}

interface GuideState {
  guides: Guide[];
}

const initialState: GuideState = {
  guides: [],
};

const guideSlice = createSlice({
  name: 'guides',
  initialState,
  reducers: {
    addGuide: (state, action: PayloadAction<{ id: string; description: string }>) => {
      state.guides.push({ ...action.payload, status: 'Pendiente' });
    },
    updateGuideStatus: (state, action: PayloadAction<string>) => {
      const guide = state.guides.find((g) => g.id === action.payload);
      if (guide) {
        if (guide.status === 'Pendiente') guide.status = 'En tránsito';
        else if (guide.status === 'En tránsito') guide.status = 'Entregada';
      }
    },
  },
});

export const { addGuide, updateGuideStatus } = guideSlice.actions;
export default guideSlice.reducer;
