export const incrementTimer = newTime => ({
  type: 'INCREMENT',
  payload: newTime
});

export const ResetTimer = () => ({
  type: 'RESET_TIMER',
})