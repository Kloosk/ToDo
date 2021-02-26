export const getActivity = () => {
    const activity = JSON.parse(localStorage.getItem("activity"));
    const data = {
        labels: ["Sun","Mon","Tues","Wed","Thurs","Fri","Sat"],
        datasets: [
            {
                label: 'Activity during week',
                data: Object.values(activity) ?? []
            }
        ]
    };

    return data;
};