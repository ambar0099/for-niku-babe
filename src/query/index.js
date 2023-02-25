import gql from "graphql-tag";

const LOAD_WIDGET = gql`
    query {
        getWidgetInfo {
            initial_json
        }
    }
`;

const UPDATE_WIDGET = gql`
    mutation ($initial_json: Object!) {
        updateWidget (initial_json: $initial_json){
            initial_json
        }
    }
`;

export {
    LOAD_WIDGET,
    UPDATE_WIDGET
}