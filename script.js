const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const loading = document.getElementById('loading');
const player = document.getElementById('player');
const frame = document.getElementById('frame');
const closeBtn = document.getElementById('close');
const tapzone = document.getElementById('tapzone');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const HIDE_DELAY = 2500;
let videos = [];
let current = -1;
let hideTimer;

function showControls() {
  player.classList.remove('controls-hidden');
  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => player.classList.add('controls-hidden'), HIDE_DELAY);
}

function showVideo(i) {
  current = i;
  frame.src = 'https://drive.google.com/file/d/' + videos[i].id + '/preview';
  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === videos.length - 1;
}

function openVideo(i) {
  showVideo(i);
  player.hidden = false;
  document.body.style.overflow = 'hidden';
  history.pushState({ player: true }, '');
  if (player.requestFullscreen) player.requestFullscreen().catch(() => {});
  showControls();
}

function hidePlayer() {
  clearTimeout(hideTimer);
  frame.src = 'about:blank';
  player.hidden = true;
  document.body.style.overflow = '';
  if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
}

function closeVideo() {
  if (player.hidden) return;
  if (history.state && history.state.player) history.back();
  else hidePlayer();
}

async function fetchVideos() {
  if (!DRIVE_FOLDER_ID || !DRIVE_API_KEY) return VIDEOS;
  const q = "'" + DRIVE_FOLDER_ID + "' in parents and mimeType contains 'video/' and trashed = false";
  const url = 'https://www.googleapis.com/drive/v3/files?' + new URLSearchParams({
    q,
    fields: 'files(id,name)',
    orderBy: 'name',
    pageSize: '1000',
    supportsAllDrives: 'true',
    includeItemsFromAllDrives: 'true',
    key: DRIVE_API_KEY,
  });
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error('Drive ' + res.status);
  const data = await res.json();
  return data.files.map((f) => ({ id: f.id, title: f.name.replace(/\.[^.]+$/, '') }));
}

function render() {
  grid.textContent = '';
  videos.forEach((v, index) => {
    const card = document.createElement('button');
    card.className = 'card';
    card.type = 'button';

    const img = document.createElement('img');
    img.loading = 'lazy';
    img.alt = v.title || 'Video';
    img.src = 'https://drive.google.com/thumbnail?id=' + v.id + '&sz=w480';
    img.onerror = () => { img.style.display = 'none'; };
    card.appendChild(img);

    if (v.title) {
      const cap = document.createElement('span');
      cap.className = 'caption';
      cap.textContent = v.title;
      card.appendChild(cap);
    }

    card.addEventListener('click', () => openVideo(index));
    grid.appendChild(card);
  });
  empty.hidden = videos.length > 0;
}

fetchVideos()
  .catch(() => [])
  .then((list) => { videos = list; })
  .finally(() => {
    loading.hidden = true;
    render();
  });

closeBtn.addEventListener('click', closeVideo);
prevBtn.addEventListener('click', () => { if (current > 0) { showVideo(current - 1); showControls(); } });
nextBtn.addEventListener('click', () => { if (current < videos.length - 1) { showVideo(current + 1); showControls(); } });
tapzone.addEventListener('click', showControls);
tapzone.addEventListener('touchstart', showControls, { passive: true });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });
window.addEventListener('popstate', hidePlayer);
