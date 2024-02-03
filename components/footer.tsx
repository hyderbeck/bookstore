import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
      <p>&copy; 2024</p>
    </footer>
  );
}
