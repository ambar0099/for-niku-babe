const graphql = require('graphql');
const { ObjectType } = require('./any_object');
const {
    GraphQLObjectType,
    GraphQLInt
}  = graphql;

const WidgetType = new GraphQLObjectType({
    name: 'Widget',
    fields: () => ({
        id: { type: GraphQLInt },
        initial_json: { type: ObjectType }
    })
});

module.exports = {
    WidgetType
}