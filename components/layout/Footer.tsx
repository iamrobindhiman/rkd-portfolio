import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <h4>Robin Dhiman</h4>
          <p>Senior web engineer. Fifteen years in.<br />Building open-source tools for the PHP / commerce ecosystem.</p>
        </div>
        <div>
          <h4>Elsewhere</h4>
          <ul>
            <li><Link href="https://github.com/iamrobindhiman" target="_blank" rel="noopener">github / iamrobindhiman</Link></li>
            <li><Link href="https://packagist.org/packages/rkd/module-llms-txt" target="_blank" rel="noopener">packagist / rkd</Link></li>
            <li><Link href="mailto:hello@devrob.in">hello@devrob.in</Link></li>
          </ul>
        </div>
        <div>
          <h4>Colophon</h4>
          <p>Set in Switzer and Fragment Mono. Built with Next.js. Source on GitHub.</p>
          <p style={{ marginTop: 12 }}>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
