/* 성남 AI 랩 — 모션 레이어. app.js 다음에 로드 (window.HUB_PROJECTS 사용) */
(function () {
  'use strict';
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(pointer: fine)').matches;
  const lerp = (a, b, k) => a + (b - a) * k;

  /* ---------- 스크롤 진행 바 ---------- */
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.appendChild(bar);
  function onScroll() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(1, scrollY / max) : 0})`;
  }
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 커서 오라 + 점 (마우스 환경) ---------- */
  if (finePointer && !reduce) {
    const aura = document.createElement('div'); aura.className = 'cursor-aura';
    const dot = document.createElement('div'); dot.className = 'cursor-dot';
    document.body.append(aura, dot);
    let tx = innerWidth / 2, ty = innerHeight / 2, ax = tx, ay = ty;
    addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      aura.classList.add('on'); dot.classList.add('on');
      dot.style.transform = `translate(${tx}px, ${ty}px)`;
      dot.classList.toggle('hover', !!e.target.closest('a, button'));
    }, { passive: true });
    document.addEventListener('pointerleave', () => { aura.classList.remove('on'); dot.classList.remove('on'); });
    (function loop() {
      ax = lerp(ax, tx, 0.12); ay = lerp(ay, ty, 0.12);
      aura.style.transform = `translate(${ax}px, ${ay}px)`;
      requestAnimationFrame(loop);
    })();
  }

  /* ---------- 헤드라인 글자 스크램블 ---------- */
  const GLYPHS = '01<>/{}[]#*+=アイウエオ▲◆●■';
  function scramble(root) {
    const nodes = [];
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) if (walker.currentNode.nodeValue.trim()) nodes.push(walker.currentNode);
    const finals = nodes.map((n) => n.nodeValue);
    const total = finals.reduce((s, t) => s + t.length, 0);
    const t0 = performance.now(), dur = 1100;
    (function frame(t) {
      const k = Math.min(1, (t - t0) / dur);
      let shown = Math.floor(k * total);
      nodes.forEach((n, i) => {
        const f = finals[i];
        const keep = Math.max(0, Math.min(f.length, shown));
        shown -= f.length;
        let out = f.slice(0, keep);
        for (let j = keep; j < f.length; j++) {
          out += f[j] === ' ' ? ' ' : (j < keep + 3 ? GLYPHS[(Math.random() * GLYPHS.length) | 0] : f[j]);
        }
        n.nodeValue = out;
      });
      if (k < 1) requestAnimationFrame(frame);
      else nodes.forEach((n, i) => { n.nodeValue = finals[i]; });
    })(t0);
  }
  const h1 = document.querySelector('.hero h1');
  if (h1 && !reduce) scramble(h1);

  /* ---------- 섹션 제목 글자 순차 등장 ---------- */
  function splitText(el) {
    const text = el.firstChild && el.firstChild.nodeType === 3 ? el.firstChild : null;
    if (!text) return;
    const frag = document.createDocumentFragment();
    [...text.nodeValue].forEach((ch, i) => {
      const s = document.createElement('span');
      s.className = 'split-ch'; s.style.setProperty('--i', i);
      s.textContent = ch === ' ' ? ' ' : ch;
      frag.appendChild(s);
    });
    el.replaceChild(frag, text);
    el.setAttribute('aria-label', text.nodeValue);
  }
  const headIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('split-in'); headIO.unobserve(e.target); }
  }), { threshold: 0.4 });
  document.querySelectorAll('.section-head h2').forEach((h) => { splitText(h); headIO.observe(h); });

  /* ---------- 카드 등장 (필터 바뀔 때마다 다시) ---------- */
  const gallery = document.getElementById('gallery');
  const cardIO = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); cardIO.unobserve(e.target); }
  }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  function prepCards() {
    const cards = gallery.querySelectorAll('.card:not(.reveal)');
    const cols = Math.max(1, Math.round(gallery.clientWidth / 340));
    cards.forEach((c, i) => {
      c.classList.add('reveal');
      if (reduce) { c.classList.add('in'); return; }
      c.style.setProperty('--d', `${(i % cols) * 0.08}s`);
      cardIO.observe(c);
    });
  }
  if (gallery) {
    prepCards();
    new MutationObserver(prepCards).observe(gallery, { childList: true });
  }

  /* ---------- 카드 3D 틸트 + 글레어 (이벤트 위임) ---------- */
  if (gallery && finePointer && !reduce) {
    gallery.addEventListener('pointermove', (e) => {
      const c = e.target.closest('.card'); if (!c) return;
      const r = c.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
      c.style.setProperty('--mx', `${px * 100}%`);
      c.style.setProperty('--my', `${py * 100}%`);
      c.style.setProperty('--ry', `${(px - 0.5) * 9}deg`);
      c.style.setProperty('--rx', `${(0.5 - py) * 7}deg`);
      c.classList.add('tilting');
    });
    gallery.addEventListener('pointerout', (e) => {
      const c = e.target.closest('.card');
      if (!c || c.contains(e.relatedTarget)) return;
      c.classList.remove('tilting');
      c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg');
    });
  }

  /* ---------- 자석 버튼 ---------- */
  if (finePointer && !reduce) {
    document.querySelectorAll('.btn').forEach((b) => {
      b.classList.add('magnetic');
      b.addEventListener('pointermove', (e) => {
        const r = b.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        b.style.transform = `translate(${dx * 0.25}px, ${dy * 0.35}px)`;
      });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }

  /* ---------- NEW 3D 회전 쇼케이스 ---------- */
  const items = (window.HUB_PROJECTS || []).filter((p) => p.isNew);
  const stage = document.getElementById('stage');
  if (stage && items.length) {
    const ring = stage.querySelector('.ring');
    const cap = document.getElementById('spotCaption');
    const open = document.getElementById('spotOpen');
    const n = items.length, step = 360 / n;
    const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
    ring.innerHTML = items.map((p, i) => {
      const slug = p.url.split('/').filter(Boolean).pop();
      return `<a class="ring-item" href="${p.url}" target="_blank" rel="noopener" data-i="${i}" aria-label="${esc(p.title)} 열기">
        <img src="img/${slug}.jpg" alt="" loading="lazy" />
        <div class="ri-label"><span>${p.emoji}</span>${esc(p.title)}</div></a>`;
    }).join('');
    const els = [...ring.children];
    let radius = 0;
    function layout() {
      const w = els[0].offsetWidth;
      radius = Math.round((w / 2) / Math.tan(Math.PI / n) + Math.min(160, innerWidth * 0.1));
      els.forEach((el, i) => { el.style.transform = `rotateY(${i * step}deg) translateZ(${radius}px)`; });
    }
    layout();
    addEventListener('resize', layout);

    let angle = 0, vel = 0, target = null, dragging = false, moved = 0, lastX = 0, hover = false, front = -1;
    const auto = reduce ? 0 : -0.12;

    function frontIndex() {
      const a = ((-angle % 360) + 360) % 360;
      return Math.round(a / step) % n;
    }
    function showCaption(i) {
      if (i === front) return;
      front = i;
      els.forEach((el, j) => el.classList.toggle('front', j === i));
      const p = items[i];
      cap.innerHTML = `<h3>${p.emoji} ${esc(p.title)}</h3><p>${esc(p.desc)}</p>`;
      cap.classList.remove('swap'); void cap.offsetWidth; cap.classList.add('swap');
      open.href = p.url;
    }
    function snapTo(i) {
      // 현재 각도에서 가장 가까운 방향으로 i번 카드가 정면에 오게
      const cur = -angle / step;
      let k = Math.round(cur);
      const diff = ((i - k) % n + n) % n;
      k += diff > n / 2 ? diff - n : diff;
      target = -k * step;
    }
    (function tick() {
      if (target !== null) {
        angle = lerp(angle, target, 0.12);
        if (Math.abs(angle - target) < 0.05) { angle = target; target = null; }
      } else if (!dragging) {
        angle += vel; vel *= 0.94;
        if (Math.abs(vel) < 0.02 && !hover) angle += auto;
      }
      ring.style.transform = `translateZ(${-radius}px) rotateX(-9deg) rotateY(${angle}deg)`;
      els.forEach((el, i) => {
        const facing = Math.cos(((i * step + angle) * Math.PI) / 180); // 1 = 정면, -1 = 뒤
        el.style.opacity = (0.25 + 0.75 * Math.max(0, (facing + 1) / 2)).toFixed(3);
        el.style.filter = `brightness(${(0.45 + 0.55 * Math.max(0, facing)).toFixed(3)})`;
        el.style.zIndex = Math.round((facing + 1) * 50);
      });
      showCaption(frontIndex());
      requestAnimationFrame(tick);
    })();

    stage.addEventListener('pointerenter', () => { hover = true; });
    stage.addEventListener('pointerleave', () => { hover = false; });
    stage.addEventListener('pointerdown', (e) => {
      dragging = true; moved = 0; lastX = e.clientX; target = null; vel = 0;
      stage.classList.add('dragging');
    });
    addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX; lastX = e.clientX; moved += Math.abs(dx);
      angle += dx * 0.3; vel = dx * 0.3;
    });
    addEventListener('pointerup', () => {
      if (!dragging) return;
      dragging = false; stage.classList.remove('dragging');
      if (Math.abs(vel) < 0.5) snapTo(frontIndex());
    });
    // 드래그 후 놓을 때 링크가 열리지 않게, 정면이 아닌 카드는 먼저 정면으로
    ring.addEventListener('click', (e) => {
      const a = e.target.closest('.ring-item'); if (!a) return;
      if (moved > 6) { e.preventDefault(); return; }
      const i = +a.dataset.i;
      if (i !== frontIndex()) { e.preventDefault(); snapTo(i); }
    });
    ring.addEventListener('focusin', (e) => {
      const a = e.target.closest('.ring-item'); if (a) snapTo(+a.dataset.i);
    });
    document.getElementById('spotPrev').addEventListener('click', () => snapTo((frontIndex() - 1 + n) % n));
    document.getElementById('spotNext').addEventListener('click', () => snapTo((frontIndex() + 1) % n));
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') snapTo((frontIndex() - 1 + n) % n);
      if (e.key === 'ArrowRight') snapTo((frontIndex() + 1) % n);
    });
  }
})();
