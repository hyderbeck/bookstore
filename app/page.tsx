import BookPreview from "@/components/book-preview";

export default function Home() {
  return (
    <main>
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
    </main>
  );
}

export const books = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", price: 9.99 },
  {
    id: 2,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    price: 12.99,
  },
  {
    id: 3,
    title: "The Old Man and the Sea",
    author: "Ernest Hemingway",
    price: 8.99,
  },
];
