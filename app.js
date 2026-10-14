/* 성남 AI 랩 — 갤러리 데이터 + 필터 + 스카이라인 애니메이션 */
(function () {
  'use strict';

  const PROJECTS = [
    {
      emoji: '🏭', title: '스마트공장 검증장비 시뮬레이터',
      url: 'https://metasongi.github.io/smart-factory-trainer/',
      desc: '3D 가상 장비로 배우는 차시형 실습 — 설비 기동부터 비전 검사·불량 분류, 이해도 평가까지.',
      tags: ['디지털트윈', '교육', '3D'],
      hue: ['#0e2a5e', '#123a7a'],
    },
    {
      emoji: '🧠', title: '디지털트윈 AI 랩',
      url: 'https://metasongi.github.io/digital-twin-ai-lab/',
      desc: '3D 트윈 + AI 이상탐지 · 2025–2026 트렌드 분석 · 인기 AI 서비스(챗봇·리포트) 체험.',
      tags: ['AI', '디지털트윈', '분석'],
      hue: ['#3a1060', '#5b1a8a'],
    },
    {
      emoji: '📷', title: '카메라 3D 뷰어',
      url: 'https://metasongi.github.io/camera-to-3d-viewer/',
      desc: '스마트폰 카메라로 촬영하면 즉시 깊이 맵과 Three.js 3D 모델로 변환.',
      tags: ['3D', 'AI'],
      hue: ['#0b3d2e', '#0e5a40'],
    },
    {
      emoji: '🖼️', title: '이미지 3D 뷰어',
      url: 'https://metasongi.github.io/image-to-3d-viewer/',
      desc: '사진 한 장을 밝기 기반 깊이 맵으로 3D 입체 모델로 변환. 회전·와이어프레임 지원.',
      tags: ['3D'],
      hue: ['#4a2a08', '#7a4a10'],
    },
    {
      emoji: '🎨', title: 'AI 미디어아트 생성기',
      url: 'https://metasongi.github.io/ai-media-art-generator/',
      desc: '플로우 필드 · 오디오 반응형 · 만다라 — 생성형 아트를 만들고 PNG로 저장.',
      tags: ['AI', '아트'],
      hue: ['#5e0e3a', '#8a1a54'],
    },
    {
      emoji: '⚙️', title: '디지털트윈 미니 시뮬레이터',
      url: 'https://metasongi.github.io/digital-twin-mini-sim/',
      desc: '컨베이어 + 로봇팔 픽앤플레이스 + 센서 4종 + 고장 주입과 경보 시뮬레이션.',
      tags: ['디지털트윈', '3D'],
      hue: ['#0e3a4a', '#155a70'],
    },
    {
      emoji: '🏭', title: '컨베이어 분류 퍼즐',
      url: 'https://metasongi.github.io/loop-sort-factory/',
      desc: '2026 대세 Sort 메카닉 — 흘러오는 제품을 같은 색 분류함에! 콤보와 레벨업.',
      tags: ['게임'],
      hue: ['#5e3a0e', '#8a5a1a'],
    },
    {
      emoji: '🧱', title: '블록 블라스트 미니',
      url: 'https://metasongi.github.io/block-blast-mini/',
      desc: '2026 대세 Block 메카닉 — 8×8 보드에 블록을 놓고 한 줄씩 터뜨리자.',
      tags: ['게임'],
      hue: ['#1a2a5e', '#2a3a8a'],
    },
    {
      emoji: '🗼', title: '타워 스택',
      url: 'https://metasongi.github.io/stack-tower/',
      desc: '원터치 하이퍼캐주얼 — 움직이는 블록을 터치로 떨어뜨려 높이 쌓기.',
      tags: ['게임'],
      hue: ['#2a0e4a', '#4a1a7a'],
    },
    {
      emoji: '⏱️', title: '집중 타이머',
      url: 'https://metasongi.github.io/focus-timer/',
      desc: '뽀모도로 타이머 + 세션 기록 — 오늘 집중 시간·연속 일수·주간 차트.',
      tags: ['생산성'],
      hue: ['#0e4a3a', '#1a6a54'],
    },
    {
      emoji: '📊', title: '스마트공장 KPI 대시보드',
      url: 'https://metasongi.github.io/factory-kpi-dashboard/',
      desc: 'OEE 게이지 · 생산량 추이 · 설비 상태 · 알람 — 실시간 공장 모니터링.',
      tags: ['디지털트윈', '분석'],
      hue: ['#3a0e2a', '#5a1a40'],
    },
    {
      emoji: '🖼️', title: '이미지 편집 스튜디오',
      url: 'https://metasongi.github.io/image-toolkit/',
      desc: '비율 변환(4:3·16:9) · 픽셀 자르기 · 격자 분할 · 모양 자르기 · 배경 제거.',
      tags: ['생산성'],
      hue: ['#0e2a3a', '#1a4a5a'],
    },
    {
      emoji: '📺', title: '유튜브 트렌드 랩',
      url: 'https://metasongi.github.io/youtube-trend-lab/',
      desc: '인기 영상·뜨는 키워드·조회수 실시간 분석. 무료 API 키로 동작.',
      tags: ['분석', 'AI'],
      hue: ['#3a0e0e', '#5a1a1a'],
    },
    {
      emoji: '🎨', title: '메타송이 클래스',
      url: 'https://metasongi.github.io/metasongi-class/',
      desc: '실시간 강의 플랫폼 — 함께 그리는 화이트보드, 승인제 반 관리, 주차별 자료, 과제.',
      tags: ['교육'],
      hue: ['#4a0e2e', '#6a1a44'],
    },
    {
      emoji: '🗜️', title: '이미지 압축기',
      url: 'https://metasongi.github.io/image-compressor/',
      desc: '사진 용량 줄이기 — WebP/JPG/PNG 변환, 품질·크기 조절, 일괄 압축.',
      tags: ['생산성'],
      hue: ['#0e3a2a', '#1a5a3a'],
    },
    {
      emoji: '📄', title: 'PDF 합치기',
      url: 'https://metasongi.github.io/pdf-merger/',
      desc: '여러 PDF를 순서대로 하나로 — 순서 변경, 페이지 수 표시.',
      tags: ['생산성'],
      hue: ['#2a0e3a', '#3a1a4a'],
    },
    {
      emoji: '🛰️', title: 'HRD 데이터랩',
      url: 'https://metasongi.github.io/hrd-data-lab/',
      desc: '한국산업인력공단 MCP 실시간 조회 — 국가자격 시험일정·합격률·수수료, 해외취업·NCS·EPS 42종 도구.',
      tags: ['데이터'],
      hue: ['#0e2a4a', '#1a3a6a'],
    },
    {
      emoji: '🍉', title: '드롭 머지 퍼즐',
      url: 'https://metasongi.github.io/drop-merge-puzzle/',
      desc: '수박게임류 과일 합성 — 같은 과일을 합쳐 11단계 진화! 콤보 폭발.',
      tags: ['게임'],
      hue: ['#2a5e0e', '#4a8a1a'],
    },
    {
      emoji: '🚇', title: '메트로 라인',
      url: 'https://metasongi.github.io/metro-lines/',
      desc: '지하철 노선 잇기 — 승객을 목적지까지 배달하는 노선 퍼즐.',
      tags: ['게임'],
      hue: ['#0e2a5e', '#1a4a8a'],
    },
    {
      emoji: '🧹', title: '청소 시뮬레이터',
      url: 'https://metasongi.github.io/cleaning-simulator/',
      desc: '문질러 닦는 청소 게임 — 5 스테이지, 별점 도전.',
      tags: ['게임'],
      hue: ['#3a5e5e', '#5a8a8a'],
    },
    {
      emoji: '🃏', title: '로그라이크 카드 배틀',
      url: 'https://metasongi.github.io/roguelike-card-battle/',
      desc: '발라트로류 포커 덱빌딩 — 8 라운드 생존, 조커 8종 수집.',
      tags: ['게임'],
      hue: ['#4a0e3a', '#6a1a54'],
    },
    {
      emoji: '🏭', title: '방치형 공장 타이쿤',
      url: 'https://metasongi.github.io/idle-factory-tycoon/',
      desc: '방치형 공장 경영 — 기계 6종 자동 생산, 오프라인 보상.',
      tags: ['게임'],
      hue: ['#5e4a0e', '#8a6a1a'],
    },
    {
      emoji: '🖌️', title: '그림 3D 변환기',
      url: 'https://metasongi.github.io/draw-to-3d/',
      desc: '그림·이미지를 높이맵 릴리프 3D로 변환. STL/OBJ/GLB 다운로드, OctoPrint 프린터 전송.',
      tags: ['3D', 'AI'],
      hue: ['#0e3a5e', '#1a5a8a'],
    },
    {
      emoji: '☁️', title: '포인트 클라우드 스튜디오',
      url: 'https://metasongi.github.io/point-cloud-studio/',
      desc: '이미지·영상에서 AI 깊이 추정으로 3D 포인트 클라우드 생성. PLY/깊이맵 내보내기.',
      tags: ['3D', 'AI'],
      hue: ['#2a0e5e', '#4a1a8a'],
    },
    {
      emoji: '🎬', title: 'AI 영상 스튜디오',
      url: 'https://metasongi.github.io/ai-video-studio/',
      desc: '프롬프트로 AI 영상 생성 — 본인 API 키로 직접 호출(BYOK), 화면비율·길이·모델 선택, MP4 다운로드.',
      tags: ['AI', '생산성'],
      hue: ['#5e0e2a', '#8a1a44'],
    },
    {
      emoji: '🎞️', title: '모션 스튜디오',
      url: 'https://metasongi.github.io/motion-studio/',
      desc: '배경 영상·이미지 위에 움직이는 글자 — 키네틱 타이포·로어 서드·자막, 텍스트 스타일·위치·타자기 효과, MP4/WebM 다운로드.',
      tags: ['생산성', '아트'],
      hue: ['#0e3a2a', '#1a5a3a'],
    },
    {
      emoji: '🖥️', title: '웹 디자인 스튜디오',
      url: 'https://metasongi.github.io/web-design-studio/',
      desc: '비주얼 월드 6종으로 랜딩페이지 제작 — 섹션 8종·폰트·컬러 커스텀, 이미지 내장, 독립 실행 html 다운로드.',
      tags: ['생산성', '아트'],
      hue: ['#2a0e4a', '#4a1a7a'],
    },
  ];

  const ALL = '전체';
  const TAG_IMG = {
    '게임': 'game.jpg', '3D': '3d.jpg', 'AI': 'ai.jpg',
    '디지털트윈': 'twin.jpg', '교육': 'edu.jpg', '아트': 'art.jpg',
    '생산성': 'productivity.jpg', '분석': 'analytics.jpg', '데이터': 'data.jpg',
  };
  const filters = [ALL, ...new Set(PROJECTS.flatMap((p) => p.tags))];
  const filtersEl = document.getElementById('filters');
  const galleryEl = document.getElementById('gallery');
  let active = ALL;

  function renderFilters() {
    filtersEl.innerHTML = filters.map((f) =>
      `<button class="chip${f === active ? ' active' : ''}" data-f="${f}">${f}</button>`).join('');
    filtersEl.querySelectorAll('.chip').forEach((b) =>
      b.addEventListener('click', () => { active = b.dataset.f; renderFilters(); renderGallery(); }));
  }

  function renderGallery() {
    const list = PROJECTS.filter((p) => active === ALL || p.tags.includes(active));
    galleryEl.innerHTML = list.map((p) => {
      const img = 'img/' + (TAG_IMG[p.tags[0]] || 'ai.jpg');
      return `
      <a class="card" href="${p.url}" target="_blank" rel="noopener">
        <div class="card-art">
          <img src="${img}" alt="${p.title}" loading="lazy" />
          <div class="card-shade"></div>
          <span class="card-emoji">${p.emoji}</span>
          <span class="ext">↗</span>
        </div>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p class="url">${p.url.replace('https://', '')}</p>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </a>`;
    }).join('');
  }
  renderFilters();
  renderGallery();

  /* ---------- 스탯 카운트업 ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target, target = parseInt(el.dataset.count, 10);
      const t0 = performance.now(), dur = 1200;
      (function tick(t) {
        const k = Math.min(1, (t - t0) / dur);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.stat-num').forEach((el) => io.observe(el));

  /* ---------- 판교 야경 스카이라인 + 스마트공장 + 게임 요소 ---------- */
  const cv = document.getElementById('skyline');
  const ctx = cv.getContext('2d');
  let W, H, buildings = [], stars = [];
  let factory = null, smokes = [], coins = [], bot = null, bursts = [], popups = [];
  let auroras = [], meteors = [], chips = [];
  const CHIP_DEFS = [
    { e: '⚙️', label: 'IoT' }, { e: '🤖', label: 'AI' },
    { e: '🏭', label: 'Factory' }, { e: '🧊', label: '3D' },
  ];
  let clickScore = 0, combo = 0, lastClickT = 0, bestScore = 0;
  try { bestScore = parseInt(localStorage.getItem('hub_best') || '0', 10) || 0; } catch (e) {}
  let mTX = 0, mTY = 0, parX = 0, parY = 0; // 마우스 패럴랙스

  const heroEl = document.querySelector('.hero');
  heroEl.addEventListener('pointermove', (e) => {
    const r = cv.getBoundingClientRect();
    mTX = (e.clientX - r.left) / r.width - 0.5;
    mTY = (e.clientY - r.top) / r.height - 0.5;
  });
  heroEl.addEventListener('pointerleave', () => { mTX = 0; mTY = 0; });

  function rr(x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }

  function newCoin(anyY) {
    return {
      x: Math.random() * W,
      y: anyY ? Math.random() * H * 0.65 : H * 0.7 + Math.random() * H * 0.25,
      r: 5 + Math.random() * 4,
      vy: 0.25 + Math.random() * 0.45,
      tw: Math.random() * 6.28,
      sp: 1 + Math.random() * 2,
    };
  }

  function newChip(anyY) {
    const d = CHIP_DEFS[Math.floor(Math.random() * CHIP_DEFS.length)];
    return {
      e: d.e, label: d.label,
      x: Math.random() * W,
      y: anyY ? Math.random() * H * 0.6 : H + 40,
      vy: 0.2 + Math.random() * 0.3,
      tw: Math.random() * 6.28,
      _sx: 0, _sy: 0,
    };
  }

  function build() {
    W = cv.width = cv.offsetWidth;
    H = cv.height = cv.offsetHeight;
    buildings = [];
    let x = -20;
    while (x < W + 20) {
      const w = 40 + Math.random() * 90;
      const h = H * (0.25 + Math.random() * 0.45);
      const wins = [];
      const cols = Math.floor(w / 14), rows = Math.floor(h / 18);
      for (let c = 0; c < cols; c++) for (let r = 0; r < rows; r++) {
        if (Math.random() < 0.42) wins.push({ c, r, tw: Math.random() * 6.28, sp: 0.5 + Math.random() * 2 });
      }
      buildings.push({ x, w, h, wins });
      x += w + 6 + Math.random() * 26;
    }
    stars = Array.from({ length: 90 }, () => ({
      x: Math.random() * W, y: Math.random() * H * 0.5,
      tw: Math.random() * 6.28, sp: 0.3 + Math.random() * 1.2,
    }));
    // 스마트공장 (하단 우측)
    const fw = Math.max(200, Math.min(430, W * 0.42));
    const fh = Math.max(120, H * 0.24);
    const fx = W - fw - Math.max(8, W * 0.03);
    factory = {
      x: fx, y: H - fh, w: fw, h: fh,
      stacks: [
        { x: fx + fw * 0.16, w: 26, h: fh * 0.8 },
        { x: fx + fw * 0.30, w: 22, h: fh * 0.62 },
      ],
      winCols: Math.max(3, Math.floor(fw / 36)),
    };
    smokes = []; bursts = []; popups = [];
    coins = Array.from({ length: 7 }, () => newCoin(true));
    chips = Array.from({ length: 4 }, () => newChip(true));
    meteors = [];
    const ar = Math.min(W, H);
    auroras = [
      { x: W * 0.25, y: H * 0.28, r: ar * 0.5, c: '106,92,255', a: 0.16, sp: 0.00012, ph: 0 },
      { x: W * 0.68, y: H * 0.34, r: ar * 0.44, c: '0,229,160', a: 0.12, sp: 0.0001, ph: 2 },
      { x: W * 0.48, y: H * 0.14, r: ar * 0.38, c: '88,166,255', a: 0.12, sp: 0.00014, ph: 4 },
    ];
    bot = { x: -60, speed: 0.6 + Math.random() * 0.5, jy: 0, jv: 0 };
  }

  // 오로라 배경
  function drawAuroras(t) {
    auroras.forEach((a) => {
      const x = a.x + Math.sin(t * a.sp + a.ph) * 46;
      const y = a.y + Math.cos(t * a.sp * 1.3 + a.ph) * 26;
      const g = ctx.createRadialGradient(x, y, 0, x, y, a.r);
      g.addColorStop(0, 'rgba(' + a.c + ',' + a.a + ')');
      g.addColorStop(1, 'rgba(' + a.c + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(x - a.r, y - a.r, a.r * 2, a.r * 2);
    });
  }

  // 신스웨이브 그리드 플로어
  function drawGridFloor(t) {
    const top = H - 70;
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, top, W, H - top);
    ctx.clip();
    const gap = 34;
    const off = (t * 0.03) % gap;
    for (let y = top + off; y < H + gap; y += gap) {
      ctx.globalAlpha = 0.08 + 0.22 * ((y - top) / (H - top));
      ctx.strokeStyle = '#00e5a0';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }
    ctx.globalAlpha = 0.12;
    ctx.strokeStyle = '#58a6ff';
    const cx = W / 2 + parX * 40;
    for (let i = -10; i <= 10; i++) {
      ctx.beginPath();
      ctx.moveTo(cx + i * 44, top);
      ctx.lineTo(cx + i * 170, H);
      ctx.stroke();
    }
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  // 유성
  function drawMeteors() {
    if (Math.random() < 0.006 && meteors.length < 3) {
      meteors.push({
        x: Math.random() * W * 0.8 + W * 0.1,
        y: Math.random() * H * 0.3,
        vx: -(4 + Math.random() * 3), vy: 2 + Math.random() * 2,
        life: 1,
      });
    }
    meteors = meteors.filter((m) => m.life > 0);
    meteors.forEach((m) => {
      m.x += m.vx; m.y += m.vy; m.life -= 0.02;
      const tx = m.x - m.vx * 12, ty = m.y - m.vy * 12;
      const g = ctx.createLinearGradient(m.x, m.y, tx, ty);
      g.addColorStop(0, 'rgba(255,255,255,' + (0.9 * Math.max(0, m.life)).toFixed(2) + ')');
      g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = g;
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(m.x, m.y); ctx.lineTo(tx, ty); ctx.stroke();
    });
  }

  // 게임 요소: 떠다니는 테크 칩 (클릭하면 +3)
  function drawChips(t) {
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    chips.forEach((ch) => {
      ch.y -= ch.vy;
      if (ch.y < -40) Object.assign(ch, newChip(false));
      const x = ch.x + Math.sin(t * 0.0008 + ch.tw) * 14;
      const y = ch.y + Math.cos(t * 0.001 + ch.tw) * 6;
      ch._sx = x; ch._sy = y;
      ctx.globalAlpha = 0.8;
      ctx.fillStyle = 'rgba(20,28,50,0.55)';
      rr(x - 38, y - 15, 76, 30, 15); ctx.fill();
      ctx.globalAlpha = 0.9;
      ctx.strokeStyle = 'rgba(88,166,255,0.35)';
      ctx.lineWidth = 1;
      rr(x - 38, y - 15, 76, 30, 15); ctx.stroke();
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#eaf2f8';
      ctx.font = '12px sans-serif';
      ctx.fillText(ch.e + ' ' + ch.label, x, y + 1);
    });
  }

  function drawFactory(t) {
    const f = factory;
    if (!f) return;
    const { x, y, w, h } = f;
    // 본관
    ctx.fillStyle = '#0d1326';
    ctx.fillRect(x, y, w, h);
    // 톱니 지붕
    ctx.fillStyle = '#141d36';
    const teeth = 5, tw = w / teeth;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let i = 0; i < teeth; i++) {
      ctx.lineTo(x + i * tw + tw * 0.5, y - 24);
      ctx.lineTo(x + (i + 1) * tw, y);
    }
    ctx.lineTo(x + w, y + h);
    ctx.lineTo(x, y + h);
    ctx.closePath();
    ctx.fill();
    // 창문 (따뜻한 불빛, 일부는 깜빡임)
    for (let c = 0; c < f.winCols; c++) {
      for (let r = 0; r < 2; r++) {
        const wx = x + 14 + c * 36, wy = y + 30 + r * 32;
        const on = Math.sin(t * 0.001 + c * 1.7 + r * 3.1) > -0.2;
        ctx.globalAlpha = on ? 0.9 : 0.22;
        ctx.fillStyle = on ? '#ffd88a' : '#1c2742';
        ctx.fillRect(wx, wy, 18, 14);
      }
    }
    ctx.globalAlpha = 1;
    // 굴뚝 + 연기 + 경광등
    f.stacks.forEach((s, si) => {
      const sx = s.x, sy = y - s.h;
      ctx.fillStyle = '#141c33';
      ctx.fillRect(sx, sy, s.w, s.h);
      ctx.fillStyle = '#1d2745';
      ctx.fillRect(sx - 3, sy, s.w + 6, 8);
      if (smokes.length < 150 && Math.random() < 0.3) {
        smokes.push({
          x: sx + s.w / 2, y: sy - 4,
          r: 6 + Math.random() * 5,
          vx: (Math.random() - 0.5) * 0.4, vy: 0.5 + Math.random() * 0.5,
          life: 1,
        });
      }
      const blink = Math.sin(t * 0.004 + si * 2.4) > 0;
      if (blink) {
        ctx.globalAlpha = 0.25;
        ctx.fillStyle = '#ff4d5e';
        ctx.beginPath(); ctx.arc(sx + s.w / 2, sy - 8, 11, 0, 7); ctx.fill();
        ctx.globalAlpha = 1;
      }
      ctx.fillStyle = blink ? '#ff4d5e' : '#5a1f28';
      ctx.beginPath(); ctx.arc(sx + s.w / 2, sy - 8, 4, 0, 7); ctx.fill();
    });
    // 컨베이어 벨트 + 움직이는 박스
    const beltY = y + h - 24;
    ctx.fillStyle = '#0a0f20';
    ctx.fillRect(x, beltY, w, 10);
    ctx.fillStyle = '#22304f';
    const off = (t * 0.05) % 18;
    for (let bx = -18; bx < w + 18; bx += 18) {
      ctx.fillRect(x + bx + off, beltY + 4, 8, 2);
    }
    for (let i = 0; i < 3; i++) {
      const px = x + ((i * w / 3 + t * 0.035) % w);
      ctx.fillStyle = '#2f81f7';
      ctx.fillRect(px, beltY - 17, 14, 14);
      ctx.fillStyle = '#1f6feb';
      ctx.fillRect(px, beltY - 17, 14, 4);
    }
    // 간판
    ctx.globalAlpha = 0.75 + 0.25 * Math.sin(t * 0.002);
    ctx.fillStyle = '#00e5a0';
    ctx.font = 'bold 13px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.fillText('SMART FACTORY', x + w / 2, y + 18);
    ctx.globalAlpha = 1;
  }

  function drawSmokes() {
    smokes = smokes.filter((s) => s.life > 0);
    smokes.forEach((s) => {
      s.x += s.vx; s.y -= s.vy; s.r += 0.12; s.life -= 0.008;
      ctx.globalAlpha = Math.max(0, s.life) * 0.32;
      ctx.fillStyle = '#8b9bb4';
      ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
    });
    ctx.globalAlpha = 1;
  }

  // 게임 요소 1: 하늘에 떠다니는 코인
  function drawCoins(t) {
    coins.forEach((c) => {
      c.y -= c.vy;
      if (c.y < -20) Object.assign(c, newCoin(false));
      const tw = 0.5 + 0.5 * Math.abs(Math.sin(t * 0.001 * c.sp + c.tw));
      ctx.save();
      ctx.translate(c.x, c.y);
      ctx.scale(Math.abs(Math.cos(t * 0.002 * c.sp + c.tw)) * 0.7 + 0.3, 1);
      ctx.globalAlpha = 0.35 + 0.55 * tw;
      ctx.fillStyle = '#ffd166';
      ctx.beginPath(); ctx.arc(0, 0, c.r, 0, 7); ctx.fill();
      ctx.fillStyle = '#8a5a00';
      ctx.font = 'bold ' + Math.round(c.r) + 'px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText('★', 0, 1);
      ctx.restore();
    });
    ctx.globalAlpha = 1;
  }

  // 게임 요소 2: 하단을 걸어다니는 작은 로봇 (클릭하면 점프!)
  function drawBot(t) {
    const b = bot;
    if (!b) return;
    b.x += b.speed;
    if (b.x > W + 60) { b.x = -60; b.speed = 0.5 + Math.random() * 0.6; }
    // 점프 물리
    if (b.jv || b.jy) {
      b.jy += b.jv; b.jv += 0.45;
      if (b.jy >= 0) { b.jy = 0; b.jv = 0; }
    }
    const bob = Math.abs(Math.sin(t * 0.008)) * 4;
    const y = H - 40 - bob + b.jy, x = b.x;
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = '#000';
    ctx.beginPath(); ctx.ellipse(x, H - 32, 16, 4, 0, 0, 7); ctx.fill();
    ctx.globalAlpha = 1;
    // 다리
    const swing = Math.sin(t * 0.02) * 5;
    ctx.strokeStyle = '#1f6feb'; ctx.lineWidth = 4; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(x - 5, y); ctx.lineTo(x - 5 + swing, y + 12); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(x + 5, y); ctx.lineTo(x + 5 - swing, y + 12); ctx.stroke();
    // 몸통
    ctx.fillStyle = '#2f81f7';
    rr(x - 12, y - 22, 24, 24, 6); ctx.fill();
    ctx.fillStyle = '#1f6feb';
    ctx.fillRect(x - 12, y - 8, 24, 4);
    // 머리
    ctx.fillStyle = '#58a6ff';
    rr(x - 9, y - 38, 18, 14, 5); ctx.fill();
    // 눈 (깜빡임)
    ctx.fillStyle = '#0d1117';
    if (Math.sin(t * 0.003) > 0.96) {
      ctx.fillRect(x - 6, y - 32, 12, 2);
    } else {
      ctx.fillRect(x - 6, y - 33, 4, 4);
      ctx.fillRect(x + 2, y - 33, 4, 4);
    }
    // 안테나
    ctx.strokeStyle = '#58a6ff'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(x, y - 38); ctx.lineTo(x, y - 46); ctx.stroke();
    ctx.fillStyle = '#ff4d5e';
    ctx.globalAlpha = 0.5 + 0.5 * Math.abs(Math.sin(t * 0.005));
    ctx.beginPath(); ctx.arc(x, y - 48, 3, 0, 7); ctx.fill();
    ctx.globalAlpha = 1;
  }

  // 게임 요소 3: 클릭 파티클 + 점수 팝업
  function drawBursts() {
    bursts = bursts.filter((p) => p.life > 0);
    bursts.forEach((p) => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.08; p.life -= 0.02;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = p.color;
      ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
    });
    ctx.globalAlpha = 1;
    popups = popups.filter((p) => p.life > 0);
    popups.forEach((p) => {
      p.y -= 0.8; p.life -= 0.015;
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.fillStyle = '#ffd166';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
      ctx.fillText(p.text, p.x, p.y);
    });
    ctx.globalAlpha = 1;
  }

  // 게임 요소 3: 클릭 파티클 + 점수 팝업 + 코인/로봇 맞추기 + 콤보
  function burst(x, y, color) {
    const colors = color ? [color] : ['#ffd166', '#00e5a0', '#58a6ff', '#ff7ab8'];
    for (let i = 0; i < 12; i++) {
      const a = Math.random() * Math.PI * 2, sp = 1 + Math.random() * 3;
      bursts.push({
        x, y,
        vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1,
        life: 1, color: colors[i % colors.length],
      });
    }
  }

  heroEl.addEventListener('pointerdown', (e) => {
    const r = cv.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (x < 0 || y < 0 || x > r.width || y > r.height) return;
    // 콤보: 1.5초 안에 연속 클릭하면 콤보 상승 (최대 x5)
    const now = performance.now();
    combo = (now - lastClickT < 1500) ? combo + 1 : 1;
    lastClickT = now;
    const mult = Math.min(combo, 5);

    const ox = parX * 36, oy = parY * 14; // 코인·로봇 레이어 오프셋
    let pts = 1, label = null, color = null;
    // 코인 맞추기 (+10)
    for (const c of coins) {
      const dx = x - (c.x + ox), dy = y - (c.y + oy);
      if (dx * dx + dy * dy < (c.r + 14) * (c.r + 14)) {
        pts = 10; label = '🪙'; color = '#ffd166';
        Object.assign(c, newCoin(false)); // 먹은 코인은 새 위치에 리스폰
        break;
      }
    }
    // 로봇 맞추기 (+5, 점프!)
    if (!label && bot) {
      const bx = bot.x + ox, by = H - 40 + oy;
      if (Math.abs(x - bx) < 36 && Math.abs(y - by) < 48) {
        if (!bot.jv && !bot.jy) bot.jv = -7.5;
        pts = 5; label = '🤖 뿅!'; color = '#58a6ff';
      }
    }
    // 테크 칩 맞추기 (+3)
    if (!label) {
      for (const ch of chips) {
        const dx = x - (ch._sx + ox), dy = y - (ch._sy + oy);
        if (dx * dx + dy * dy < 42 * 42) {
          pts = 3; label = ch.e; color = '#00e5a0';
          Object.assign(ch, newChip(false));
          break;
        }
      }
    }
    burst(x, y, color);
    const gained = pts * mult;
    clickScore += gained;
    popups.push({
      x, y: y - 12,
      text: (label ? label + ' ' : '') + '+' + gained + (mult > 1 ? ' x' + mult : ''),
      life: 1,
    });
    const badge = document.getElementById('clickScore');
    if (badge) badge.textContent = clickScore;
    if (clickScore > bestScore) {
      bestScore = clickScore;
      try { localStorage.setItem('hub_best', String(bestScore)); } catch (err) {}
      const bb = document.getElementById('bestScore');
      if (bb) bb.textContent = bestScore;
    }
  });
  // 최고점수 표시 초기화
  (function () {
    const bb = document.getElementById('bestScore');
    if (bb) bb.textContent = bestScore;
  })();

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    // 패럴랙스 보간 (마우스를 따라 레이어별 시차)
    parX += (mTX - parX) * 0.06;
    parY += (mTY - parY) * 0.06;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#070b16'); g.addColorStop(0.7, '#0c1430'); g.addColorStop(1, '#101c3f');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    drawAuroras(t);
    drawMeteors();
    // 별
    stars.forEach((s) => {
      ctx.globalAlpha = 0.25 + 0.55 * Math.abs(Math.sin(t * 0.001 * s.sp + s.tw));
      ctx.fillStyle = '#cfe0ff';
      ctx.fillRect(s.x + parX * 10, s.y + parY * 6, 1.6, 1.6);
    });
    ctx.globalAlpha = 1;
    // 달
    ctx.beginPath(); ctx.arc(W * 0.82 + parX * 14, H * 0.18 + parY * 8, 34, 0, 7);
    ctx.fillStyle = '#f4f0dc'; ctx.globalAlpha = 0.9; ctx.fill(); ctx.globalAlpha = 1;
    // 빌딩
    buildings.forEach((b) => {
      const bx = b.x + parX * 22, by = parY * 8;
      const y0 = H - b.h + by;
      ctx.fillStyle = '#0a0f22';
      ctx.fillRect(bx, y0, b.w, b.h);
      ctx.fillStyle = '#131c38';
      ctx.fillRect(bx, y0, b.w, 4);
      b.wins.forEach((wn) => {
        const a = 0.25 + 0.65 * Math.abs(Math.sin(t * 0.001 * wn.sp + wn.tw));
        ctx.globalAlpha = a;
        ctx.fillStyle = Math.random() < 0.001 ? '#00e5a0' : '#ffd88a';
        ctx.fillRect(bx + 6 + wn.c * 14, y0 + 10 + wn.r * 18, 7, 10);
      });
      ctx.globalAlpha = 1;
      // 옥상 안테나
      if (b.w > 70) {
        ctx.fillStyle = '#1a2440';
        ctx.fillRect(bx + b.w / 2 - 1.5, y0 - 22, 3, 22);
        ctx.fillStyle = '#ff4d5e';
        ctx.globalAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.003 + b.x));
        ctx.beginPath(); ctx.arc(bx + b.w / 2, y0 - 24, 3, 0, 7); ctx.fill();
        ctx.globalAlpha = 1;
      }
    });
    // 네온 지평선
    const ng = ctx.createLinearGradient(0, 0, W, 0);
    ng.addColorStop(0, 'rgba(79,124,255,0)');
    ng.addColorStop(0.5, 'rgba(0,229,160,0.5)');
    ng.addColorStop(1, 'rgba(160,107,255,0)');
    ctx.fillStyle = ng;
    ctx.fillRect(0, H - 2, W, 2);
    drawGridFloor(t);
    // 게임 요소: 칩 → 코인 → 로봇(공장 뒤) → 공장 → 연기 → 클릭 파티클
    ctx.save();
    ctx.translate(parX * 36, parY * 14);
    drawChips(t);
    drawCoins(t);
    drawBot(t);
    ctx.restore();
    ctx.save();
    ctx.translate(parX * 28, parY * 10);
    drawFactory(t);
    drawSmokes();
    ctx.restore();
    drawBursts();
    requestAnimationFrame(draw);
  }

  build();
  window.addEventListener('resize', build);
  requestAnimationFrame(draw);
})();
