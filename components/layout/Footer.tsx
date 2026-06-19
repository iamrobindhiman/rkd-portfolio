import Link from "next/link";

export default function Footer() {
  return (
    <footer className="rd-footer">
      <div className="rd-footer-inner">
        <span>© {new Date().getFullYear()} Robin Dhiman</span>
        <span>
          <Link href="https://github.com/iamrobindhiman" target="_blank" rel="noopener">github</Link>
          {" · "}
          <Link href="https://dev.to/iamrobindhiman" target="_blank" rel="noopener">dev.to</Link>
          {" · "}
          <Link href="mailto:hello@devrob.in">email</Link>
        </span>
        <span>built in the terminal</span>
      </div>
    </footer>
  );
}
