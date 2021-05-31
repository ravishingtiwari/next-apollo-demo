const { gql } = require('apollo-server');
const fetchPeople = require('../data-sources/people-data');

const typeDefs = gql`
  type Query {
    people(offset:Int, limit:Int ): [People!]
  }
  type People{
    id:ID!
    name: String!
    address: String
    email:String
    phone:String
  }
`;

const resolvers = {
  Query: {
    people: (_, { offset = 0, limit=10 }, __) => {
      const r = fetchPeople();
      return r;
    }
  }
};

module.exports =
{
  typeDefs,
  resolvers
};
