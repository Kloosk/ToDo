export const deleteThings = (idx,dispatch,things) => {
    const newThings = things;
    newThings.slice(idx,1);
    dispatch()
};