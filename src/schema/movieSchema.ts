const typeDef = `

    type Feedback {
        userId: ID!,
        rate: Int!,
        comment: String!
    }
    input FeedbackInput {
        userId: ID!,
        rate: Int!,
        comment: String!
    }

    type Movie {
        id: ID!
        name: String!
        releaseDate: String!
        duration: Int!
        actors: [String]!
        averageRating: Int
        usersRated: [String]
        addedBy: String!
        addedOn: String!
        feedback: [Feedback]
    }

    extend type Query {
        moviesList: [Movie]
    }

    type MovieInfo {
        id: String
        name: String
    }

    type NullResponse {
        result: Boolean
    }
    
    extend type Mutation {
        insertMovie(name: String!
            releaseDate: String!
            duration: Int!
            actors: [String]!): MovieInfo!

        updateMovie(
            id: ID!
            name: String!
            releaseDate: String!
            duration: Int!
            actors: [String]!
            averageRating: Int
            usersRated: [String]
            feedback: [FeedbackInput]): MovieInfo!

        deleteMovie(id: ID!) : NullResponse
        
    }
`;
export default typeDef;
