const data = {
  authors: [
    { id: "1", name: "A1", bookIds: ["101", "102"] },
    { id: "2", name: "A2", bookIds: ["103"] },
  ],
  books: [
    { id: "101", title: "Book 101", publishedYear: 2024, authorId: "1" },
    { id: "102", title: "Book 102", publishedYear: 2019, authorId: "1" },
    { id: "103", title: "Book 103", publishedYear: 2011, authorId: "2" },
  ],
};

const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find(
        (authorDetails) => authorDetails.id == parent.authorId
      );
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((bookDetails)=>parent.bookIds.includes(bookDetails.id))
    }
  },
  Query: {
    authors: (parent, args, context, info) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = {...args, id: data.books.length + 1};
      data.books.push(newBook);
      return newBook
    }
  }
};

export default resolvers;