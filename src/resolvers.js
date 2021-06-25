const users = [
    {id: 1, name: 'Wesley', email: 'wesleysrs_95@hotmail.com'},
    {id: 2, name: 'Avancini', email: 'henrique_avancini@cannondale.com'},
]

module.exports = {
    Query: {
        users: () => users,
        user: () => users[0],
    },

    Mutation: {
        createUser: () => {},
    },
};
