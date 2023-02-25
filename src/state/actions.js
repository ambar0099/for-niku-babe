import { GraphQLClient } from "graphql-request";
import { UPDATE_WIDGET } from "../query";

const ACTION = {
    LOAD_GIFT: 'LOAD_GIFT',
    UPDATE_EMAIL: 'UPDATE_EMAIL',
    UPDATE_STYLE: 'UPDATE_STYLE',
    UPDATE_SCREEN_DETAILS: 'UPDATE_SCREEN_DETAILS',
    LOAD_WIDGET: 'LOAD_WIDGET'
}

const updateWidget = () => (dispatch, getState) => {
    const { initial_json } = getState().giftCard.widget;
    const endPoint = 'http://localhost:2002/graphql';
    const graphQLClient = GraphQLClient(endPoint, {});
    graphQLClient.request(
        UPDATE_WIDGET, { initial_json: initial_json}
    );
}

export default ACTION;
export {
    updateWidget
}