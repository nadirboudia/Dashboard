export const GetDesignTokens = (mode) => ({
palette: {
mode, 
...(mode === 'light' ? {
// light mode 
}
:{
// dark mode
})
}});