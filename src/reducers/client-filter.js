export default function (state = '', action) {
    switch (action.type){
        case 'FILTER_CLIENTS':
            return action.payload;
            break;
        default:
            return state;
    }
}