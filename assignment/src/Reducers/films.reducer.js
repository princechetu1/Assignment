import $ from 'jquery';

export default function(state =null,action) {
    switch (action.type) {
        case "LOAD_MORE":
            return action.payload;
        default:
            return {}
    }
}
