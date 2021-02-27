export const getDoneActivity = () => {
    const activity = JSON.parse(localStorage.getItem("doneactivity"));
    return activity === null ? [] : Object.values(activity)
};