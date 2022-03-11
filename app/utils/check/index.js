const check = ({
    data,
    selector = "",
}) => {
    if (selector) return !data || !data[selector];
    return !data;
};
export default check;