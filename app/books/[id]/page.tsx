import Image from "next/image";
import { books } from "@/app/page";

export default function Book({ params }: { params: { id: number } }) {
  const id = params.id - 1;
  return (
    <main>
      <Image
        src="https://placehold.co/200/white/white.png"
        width={400}
        height={400}
        alt={books[id].title}
      />
      <h2>{books[id].title}</h2>
      <p>{books[id].author}</p>
      <p>${books[id].price}</p>
      <button>Add to Cart</button>
    </main>
  );
}
