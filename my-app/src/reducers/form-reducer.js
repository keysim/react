export default function (state={}, action) {
    switch(action.type){
        case "CHANGE_FIRST":
            return Object.assign({}, state, {
                firstName:action.payload
            });
        case "CHANGE_LAST":
            return Object.assign({}, state, {
                lastName:action.payload
            });
        case "CHANGE_MAIL":
            return Object.assign({}, state, {
                mail:action.payload
            });
        default:
            return {
                lastName:"Menard",
                firstName:"Simon",
                mail:"simon@keysim.fr"
            };
    }
}