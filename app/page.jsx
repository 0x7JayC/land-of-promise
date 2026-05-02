import fs from "node:fs";
import path from "node:path";
import Script from "next/script";

function loadDesign() {
  const file = path.join(process.cwd(), "design", "index.html");
  const html = fs.readFileSync(file, "utf8");
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/);
  const bodyMatch = html.match(/<body>([\s\S]*?)<\/body>/);
  const scriptMatches = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  return {
    css: styleMatch ? styleMatch[1] : "",
    body: bodyMatch ? bodyMatch[1] : "",
    inlineScript: scriptMatches.map((m) => m[1]).join("\n"),
  };
}

export default function Home() {
  const { css, body, inlineScript } = loadDesign();
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="afterInteractive"
      />
      {/* Mobile hamburger — runs independently so it can't be killed by a GSAP race */}
      <Script id="lop-burger" strategy="afterInteractive">
        {`
          (function init() {
            var btn = document.getElementById('nav-burger');
            var links = document.getElementById('nav-links');
            if (!btn || !links) { return setTimeout(init, 50); }
            if (btn.dataset.wired) return;
            btn.dataset.wired = '1';
            var close = function() {
              btn.classList.remove('open');
              links.classList.remove('open');
              btn.setAttribute('aria-expanded', 'false');
            };
            btn.addEventListener('click', function() {
              var open = !btn.classList.contains('open');
              btn.classList.toggle('open', open);
              links.classList.toggle('open', open);
              btn.setAttribute('aria-expanded', String(open));
            });
            links.querySelectorAll('a').forEach(function(a) {
              a.addEventListener('click', close);
            });
          })();
        `}
      </Script>
      <Script
        id="lop-design-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: inlineScript }}
      />
    </>
  );
}
