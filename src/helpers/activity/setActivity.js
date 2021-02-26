export const setActivity = day => {
    const weekActivityInitObj = {
        0:0,
        1:0,
        2:0,
        3:0,
        4:0,
        5:0,
        6:0
    };
    const weekActivityObj = localStorage.getItem("activity");

    if (weekActivityObj !== null) {//exists
        const weekActivityParseObj = JSON.parse(weekActivityObj);
        weekActivityParseObj[day]++;
        localStorage.setItem("activity", JSON.stringify(weekActivityParseObj));
    }else{
        weekActivityInitObj[day]++;
        localStorage.setItem("activity", JSON.stringify(weekActivityInitObj));
    }
};