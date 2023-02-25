const { GraphQLScalarType } = require('graphql');

const ObjectType = new GraphQLScalarType({
    name: 'Object',
    serialize: (value) => value
});

module.exports = {
    ObjectType
}