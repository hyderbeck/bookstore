import BookPreview from "@/components/book-preview";
import { books } from "../page";
import Link from "next/link";

export default function Browse() {
  return (
    <main>
      {books.map((book) => (
        <BookPreview key={book.id} book={book} />
      ))}
      <ul>
        <li>
          <Link href="/browse">All</Link>
        </li>
        <li>
          <Link href="/browse?category=fiction">Fiction</Link>
        </li>
        <li>
          <Link href="/browse?category=nonfiction">Nonfiction</Link>
        </li>
      </ul>
    </main>
  );
}
