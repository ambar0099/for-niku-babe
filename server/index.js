const express = require('express');
const app = express();
const PORT = 2002;
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');

const schema = require('./schema/schema');

app.use(cors());
app.set('port', 2002);
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.get('/', (req, res) => {
    res.json({
        message: 'welcome'
    })
})

app.listen(PORT, () => {
    console.log('Server started at port:', PORT);
});