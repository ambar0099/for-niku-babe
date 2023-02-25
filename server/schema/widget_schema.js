const graphql = require('graphql');
const { ObjectType } = require('./any_object');
const {
    GraphQLObjectType,
    GrapgQLInt
}  = graphql;

const WidgetType = new GraphQLObjectType({
    name: 'Widget',
    fields: () => ({
        id: { type: graphql.GraphQLInt },
        initial_json: { type: ObjectType }
    })
});

module.exports = {
    WidgetType
}