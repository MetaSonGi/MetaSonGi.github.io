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
    galleryEl.innerHTML = list.map((p) => `
      <a class="card" href="${p.url}" target="_blank" rel="noopener">
        <div class="card-art" style="background: linear-gradient(135deg, ${p.hue[0]}, ${p.hue[1]});">
          <span>${p.emoji}</span><span class="ext">↗</span>
        </div>
        <div class="card-body">
          <h3>${p.title}</h3>
          <p class="url">${p.url.replace('https://', '')}</p>
          <p>${p.desc}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </a>`).join('');
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

  /* ---------- 판교 야경 스카이라인 ---------- */
  const cv = document.getElementById('skyline');
  const ctx = cv.getContext('2d');
  let W, H, buildings = [], stars = [];

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
  }

  function draw(t) {
    ctx.clearRect(0, 0, W, H);
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#070b16'); g.addColorStop(0.7, '#0c1430'); g.addColorStop(1, '#101c3f');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    // 별
    stars.forEach((s) => {
      ctx.globalAlpha = 0.25 + 0.55 * Math.abs(Math.sin(t * 0.001 * s.sp + s.tw));
      ctx.fillStyle = '#cfe0ff';
      ctx.fillRect(s.x, s.y, 1.6, 1.6);
    });
    ctx.globalAlpha = 1;
    // 달
    ctx.beginPath(); ctx.arc(W * 0.82, H * 0.18, 34, 0, 7);
    ctx.fillStyle = '#f4f0dc'; ctx.globalAlpha = 0.9; ctx.fill(); ctx.globalAlpha = 1;
    // 빌딩
    buildings.forEach((b) => {
      const y0 = H - b.h;
      ctx.fillStyle = '#0a0f22';
      ctx.fillRect(b.x, y0, b.w, b.h);
      ctx.fillStyle = '#131c38';
      ctx.fillRect(b.x, y0, b.w, 4);
      b.wins.forEach((wn) => {
        const a = 0.25 + 0.65 * Math.abs(Math.sin(t * 0.001 * wn.sp + wn.tw));
        ctx.globalAlpha = a;
        ctx.fillStyle = Math.random() < 0.001 ? '#00e5a0' : '#ffd88a';
        ctx.fillRect(b.x + 6 + wn.c * 14, y0 + 10 + wn.r * 18, 7, 10);
      });
      ctx.globalAlpha = 1;
      // 옥상 안테나
      if (b.w > 70) {
        ctx.fillStyle = '#1a2440';
        ctx.fillRect(b.x + b.w / 2 - 1.5, y0 - 22, 3, 22);
        ctx.fillStyle = '#ff4d5e';
        ctx.globalAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.003 + b.x));
        ctx.beginPath(); ctx.arc(b.x + b.w / 2, y0 - 24, 3, 0, 7); ctx.fill();
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
    requestAnimationFrame(draw);
  }

  build();
  window.addEventListener('resize', build);
  requestAnimationFrame(draw);
})();
