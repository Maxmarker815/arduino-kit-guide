// =========================================================================
// app.js — small client-side affordances for the on-screen brochure view
//   - copy code buttons
//   - sticky TOC active state
//   - reading progress bar
//   - lightweight Arduino C++ syntax highlight
// All print-stripped by CSS.
// =========================================================================

(function () {
  // ---- Syntax highlight (Arduino / C++) -----------------------------------
  const CPP_KW = new Set([
    'void','int','long','float','double','char','byte','bool','boolean','const',
    'unsigned','signed','short','if','else','for','while','do','switch','case',
    'break','continue','return','default','true','false','static','HIGH','LOW',
    'INPUT','OUTPUT','INPUT_PULLUP','LSBFIRST','MSBFIRST','OUTPUT'
  ]);
  const CPP_FN = new Set([
    'setup','loop','pinMode','digitalWrite','digitalRead','analogWrite','analogRead',
    'delay','delayMicroseconds','millis','micros','Serial','begin','print','println',
    'available','read','parseInt','tone','noTone','map','constrain','shiftOut',
    'isnan','setCursor','clear'
  ]);

  function highlight(src) {
    // Escape HTML first
    src = src.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Strings
    src = src.replace(/"([^"\\]|\\.)*"/g, m => `<span class="str">${m}</span>`);
    // Single line comments
    src = src.replace(/\/\/[^\n]*/g, m => `<span class="cm">${m}</span>`);
    // Block comments
    src = src.replace(/\/\*[\s\S]*?\*\//g, m => `<span class="cm">${m}</span>`);
    // Preprocessor
    src = src.replace(/^(\s*)(#\w+)/gm, (m, sp, pp) => `${sp}<span class="pp">${pp}</span>`);
    // Numbers (bin, hex, dec)
    src = src.replace(/\b(0b[01]+|0x[0-9a-fA-F]+|\d+\.?\d*)\b/g, m => `<span class="num">${m}</span>`);
    // Identifiers — split & classify
    src = src.replace(/\b([A-Za-z_][A-Za-z_0-9]*)\b/g, (m) => {
      // Don't re-highlight inside already-tagged spans — naive guard:
      if (CPP_KW.has(m)) return `<span class="kw">${m}</span>`;
      if (CPP_FN.has(m)) return `<span class="fn">${m}</span>`;
      // Likely-type heuristic: TitleCase words
      if (/^[A-Z][A-Za-z0-9_]*$/.test(m) && m.length > 1) return `<span class="ty">${m}</span>`;
      return m;
    });
    return src;
  }

  // Apply highlight + copy button to every .code pre
  document.querySelectorAll('.code pre').forEach(pre => {
    const raw = pre.textContent;
    pre.dataset.raw = raw;
    pre.innerHTML = highlight(raw);
  });

  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const code = btn.closest('.code')?.querySelector('pre');
      if (!code) return;
      const text = code.dataset.raw || code.textContent;
      const orig = btn.textContent;
      const ok = async () => {
        btn.classList.add('copied');
        btn.textContent = 'Скопировано';
        setTimeout(() => { btn.classList.remove('copied'); btn.textContent = orig; }, 1500);
      };
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.focus();
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
        }
        await ok();
      } catch (e) {
        btn.textContent = 'Ошибка';
        setTimeout(() => { btn.textContent = orig; }, 1500);
      }
    });
  });

  // ---- Reading progress ---------------------------------------------------
  const bar = document.querySelector('.progress-rail .bar');
  function updateProgress() {
    if (!bar) return;
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const p = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    bar.style.width = Math.min(100, Math.max(0, p)) + '%';
  }
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();

  // ---- Sticky TOC active state -------------------------------------------
  const links = Array.from(document.querySelectorAll('.toc-rail nav a[href^="#"]'));
  const targets = links.map(a => {
    const id = a.getAttribute('href').slice(1);
    return { a, el: document.getElementById(id) };
  }).filter(t => t.el);

  function updateActive() {
    const y = window.scrollY + 200;
    let current = targets[0];
    for (const t of targets) {
      if (t.el.offsetTop <= y) current = t;
      else break;
    }
    links.forEach(a => a.classList.remove('active'));
    if (current) current.a.classList.add('active');
  }
  window.addEventListener('scroll', updateActive, { passive: true });
  updateActive();

  // ---- TOC collapse / expand ----------------------------------------------
  const tocRail = document.getElementById('tocRail');
  const tocToggle = document.getElementById('tocToggle');
  if (tocRail && tocToggle) {
    const icon = tocToggle.querySelector('.toc-toggle-icon');
    tocToggle.addEventListener('click', () => {
      const open = tocRail.classList.toggle('open');
      tocToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (icon) icon.textContent = open ? '✕' : '☰';
    });
  }

  // ---- Smooth-scroll for TOC clicks --------------------------------------
  links.forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.offsetTop - 24, behavior: 'smooth' });
      history.replaceState(null, '', href);
    });
  });
})();
