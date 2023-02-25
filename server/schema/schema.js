const graphql = require('graphql');
const widgetData = require('../data/widget.json');
const { WidgetType } = require('./widget_schema');
const { ObjectType } = require('./any_object');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLList
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        getWidgetInfo: {
            type: WidgetType,
            resolve: (parent, args) => {
                console.log('0008787', widgetData);
                return widgetData
            }
        }
    }
})


const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        updateWidget: {
            type: WidgetType,
            args: {
                initial_json: { type: ObjectType }
            },
            resolve: (parent, args) => {
                widgetData.initial_json = args.initial_json;
                return widgetData;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});