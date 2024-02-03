import Image from "next/image";
import Link from "next/link";

export default function BookPreview({
  book,
}: {
  book: { id: number; title: string; author: string; price: number };
}) {
  return (
    <Link href={`/books/${book.id}`}>
      <article>
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
    </Link>
  );
}
