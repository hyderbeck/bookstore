import Link from "next/link";

export default function Header() {
  return (
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
  );
}
