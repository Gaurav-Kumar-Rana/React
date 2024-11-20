const typeDefs = `# grapgql
type Author {
    id: ID!
    name: String!
    books: [Book]
}

type Book {
    id:ID!
    title: String!
    publishedYear: Int
    author: Author
}

type Query {
    authors: [Author]
    books: [Book]
}`;

export default typeDefs;
