export const getGeneralActivity = () => {
    const activity = JSON.parse(localStorage.getItem("activity"));
    return activity === null ? [] : Object.values(activity)
};