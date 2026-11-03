// 언어 전환(한국어/English). 저장된 값 → 브라우저 언어 순, 한국어가 아니면 영어
(function () {
  const root = document.documentElement;
  function setLang(lang) {
    root.dataset.lang = lang;
    root.lang = lang;
    document.querySelectorAll('[data-set-lang]').forEach(b => {
      const on = b.dataset.setLang === lang;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
    const t = document.querySelector('meta[name="title-' + lang + '"]');
    if (t) document.title = t.content;
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }
  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) {}
  const q = new URLSearchParams(location.search).get('lang');
  setLang(q === 'ko' || q === 'en' ? q
    : saved || ((navigator.language || '').toLowerCase().startsWith('ko') ? 'ko' : 'en'));
  document.querySelectorAll('[data-set-lang]').forEach(b => b.addEventListener('click', () => setLang(b.dataset.setLang)));
})();
