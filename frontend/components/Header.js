import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Sick fits</Link>
        <div className="sub-bar">
          <p>search</p>
        </div>
      </div>
    </header>
  );
}
