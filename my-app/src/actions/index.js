export const changeField = (input, type) => {
   console.log(input);
    return {
        type: type,
        payload: input
    };
};