const grid = document.getElementById('grid');
const empty = document.getElementById('empty');
const player = document.getElementById('player');
const frame = document.getElementById('frame');
const closeBtn = document.getElementById('close');

const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let current = -1;

function showVideo(i) {
  current = i;
  frame.src = 'https://drive.google.com/file/d/' + VIDEOS[i].id + '/preview';
  prevBtn.disabled = i === 0;
  nextBtn.disabled = i === VIDEOS.length - 1;
}

function openVideo(i) {
  showVideo(i);
  player.hidden = false;
  document.body.style.overflow = 'hidden';
  history.pushState({ player: true }, '');
  if (player.requestFullscreen) player.requestFullscreen().catch(() => {});
}

function hidePlayer() {
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

VIDEOS.forEach((v, index) => {
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

empty.hidden = VIDEOS.length > 0;

closeBtn.addEventListener('click', closeVideo);
prevBtn.addEventListener('click', () => { if (current > 0) showVideo(current - 1); });
nextBtn.addEventListener('click', () => { if (current < VIDEOS.length - 1) showVideo(current + 1); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeVideo(); });
window.addEventListener('popstate', hidePlayer);
