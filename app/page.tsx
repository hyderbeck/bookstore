import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header>
        <h1>
          <Link href="/">Bookstore</Link>
        </h1>
        <nav>
          <ul>
            <li>
              <Link href="">Browse</Link>
            </li>
          </ul>
        </nav>
        <form>
          <input
            type="search"
            placeholder="Search for a book..."
            aria-label="Search"
          />
          <button>Search</button>
        </form>
        <button>Cart</button>
      </header>
      <main>
        {books.map((book) => (
          <article key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <Image
              src="https://placehold.co/200/white/white.png"
              width={200}
              height={200}
              alt={book.title}
            />
            <p>${book.price}</p>
          </article>
        ))}
      </main>
      <footer>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <p>&copy; 2024</p>
      </footer>
    </>
  );
}

const books = [
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
