/* ───────── i18n ───────── */
const I18N = {
  de: {
    'meta.title': 'EL Tech · Mach es nicht. Lass es machen.',
    'nav.work': 'Projekte', 'nav.about': 'Über uns', 'nav.cta': 'Aufgabe zeigen',
    'slot.open': 'Wir nehmen aktuell neue Projekte an',
    'slot.closed': 'Aktuell ausgebucht. Wir notieren dich gern vor.',
    'hero.eyebrow': 'Automatisierung & KI',
    'hero.h1': '<span class="hl"><span>Mach es nicht.</span></span><span class="hl"><span><em>Lass es machen.</em></span></span>',
    'hero.sub': 'Wir automatisieren, was dir die Zeit raubt.<br>Du machst das, was zählt.',
    'hero.cta': 'Zeig uns, was dir die Zeit raubt', 'scroll': 'Scroll',
    'task.eyebrow': 'Denk an deine letzte Woche',
    'task.q': 'Welche Aufgabe raubt dir gerade Zeit?',
    'task.hint': 'Tippen & Enter',
    'task.ack': 'Schau, was dich das wirklich kostet.',
    'solution.lead': 'Es muss nicht von dir kommen.',
    'task.examples': ['Angebote schreiben','Daten von A nach B kopieren','Reports zusammenbauen','Rechnungen sortieren','Termine nachfassen','Tabellen pflegen'],
    'pipe.caption': 'Das baut EL Tech für dich',
    'pipe.n1': 'Auslöser', 'pipe.n1s': 'Mail, Formular, Zeit',
    'pipe.n2': 'Konzeption', 'pipe.n2s': 'prüfen, entscheiden',
    'pipe.n3': 'Aktion', 'pipe.n3s': 'eintragen, senden',
    'pipe.n4': 'Erledigt', 'pipe.n4s': 'ohne dich',
    'pipe.result': 'Läuft jetzt <b>von selbst</b>. Jede Woche aufs Neue.',
    'scene.label': 'Deine Zeit',
    'scene.task_label': 'Deine Aufgabe:',
    'scene.b1': 'Dieselbe Aufgabe. Wieder. Und wieder.',
    'scene.b2': 'So verrinnt deine Zeit.',
    'scene.b3': 'Und die Zeit bekommst du <b>zurück</b>.',
    'proof.eyebrow': 'Bereits im Einsatz',
    'proof.h2': 'Läuft bereits.',
    'proof.line': 'Keine Theorie. Diese Systeme arbeiten täglich.',
    'proof.lead': 'Bevor wir für andere gebaut haben, haben wir <em>uns selbst</em> automatisiert.',
    'case1.title': 'Kundenanlage und Berechnungen kosteten Stunden. Heute übernimmt sie ein System.',
    'case2.title': 'Berichte, früher von Hand, schreiben sich heute selbst.',
    'case3.a': 'Unser eigener Kanal läuft von allein.', 'case3.b': 'Follower, kein Video von uns.',
    'case.more': 'Jeder Prozess ist anders. Auch <em>deiner</em>.',
    'founders.kicker': 'Wer dahintersteckt',
    'founders.lead': 'Wir haben Automatisierung nicht studiert. Wir haben sie <em>gebraucht</em>.',
    'founders.p1': 'Angefangen hat alles mit Content. Erel wollte nicht länger jeden Handgriff selbst machen und dachte sich: Das muss doch auch anders gehen — einfacher, automatisch. Lukas kam mit ins Boot und baute eine eigene Pipeline, die den ganzen Prozess übernimmt.',
    'founders.p2': 'Das Ergebnis: über <b>50.000 Follower</b> — mit vollautomatisierter Content-Erstellung. Kein Video, hinter dem wir noch selbst sitzen.',
    'founders.p3': 'Dabei wurde uns klar: Denselben Schmerz haben andere längst. Ein Vermögensberater, ein Industriekonzern — überall dieselben Aufgaben, die Stunden und viel Geld kosten. Genau die haben wir auf Knopfdruck automatisiert. Seitdem bauen wir das für alle, die ihre Zeit zurückwollen.',
    'founders.erel.role': 'Mitgründer & CFO',
    'founders.erel.bio': 'Kommt aus dem Content und hat das Ganze angezettelt: Wenn es nervt und sich wiederholt, muss es sich automatisieren lassen.',
    'founders.lukas.role': 'Mitgründer & CTO',
    'founders.lukas.bio': 'Baut die Systeme dahinter. Aus einer Pipeline für unseren eigenen Content wurde die Technik, die heute für Kunden läuft.',
    'contact.kicker': 'Kontakt',
    'contact.h2': 'Zeig uns, was dir die <span class="u-accent">Zeit</span> raubt.',
    'contact.p': 'Beschreib kurz, was bei dir gerade Zeit frisst. Wir melden uns unverbindlich mit einer ersten Einschätzung.',
    'form.name': 'Name', 'form.name_ph': 'Dein Name',
    'form.email': 'E-Mail', 'form.email_ph': 'name@firma.de',
    'form.task': 'Die Aufgabe', 'form.task_ph': 'Was passiert heute von Hand — und welche Tools sind im Spiel?',
    'form.send': 'Absenden',
    'form.status': 'Danke, wir melden uns innerhalb von 48 Stunden bei dir.',
    'legal.back': '← Zurück',
    'nav.services': 'Leistungen',
    'services.kicker': 'Was wir machen',
    'work.kicker': 'Bereits im Einsatz',
    'footer.contact': 'Kontakt',
    'cta.h2': 'Bereit, eine Aufgabe <em>loszuwerden</em>?',
    'cta.p': 'Zeig uns die eine Aufgabe, die dir Zeit raubt. Erste Einschätzung unverbindlich.',
    'cta.btn': 'Aufgabe zeigen',
    'services.title': 'Leistungen',
    'services.lead': 'Von der einen nervigen Aufgabe bis zum durchgängigen Prozess — wir automatisieren, was dich aufhält.',
    'services.s1.t': 'Prozessautomatisierung',
    'services.s1.d': 'Wir analysieren wiederkehrende Handgriffe und ersetzen sie durch Systeme, die zuverlässig im Hintergrund laufen.',
    'services.s2.t': 'Workflow- & Hyperautomatisierung',
    'services.s2.d': 'Wir verketten Tools, APIs und KI zu einem durchgängigen Prozess — vom Auslöser bis zum erledigten Ergebnis.',
    'services.s3.t': 'KI-Integration',
    'services.s3.d': 'Wir bringen KI dahin, wo sie echte Arbeit abnimmt: Dokumente verstehen, Texte erzeugen, Entscheidungen vorbereiten.',
    'services.s4.t': 'IT-Dienstleistungen',
    'services.s4.d': 'Konzeption, Umsetzung, Wartung. Wir bauen und betreuen die digitalen Systeme, auf die du dich verlässt.',
    'work.title': 'Projekte',
    'work.lead': 'Keine Theorie. Diese Systeme arbeiten täglich — bei anderen und bei uns selbst.',
    'footer.privacy': 'Datenschutz', 'footer.terms': 'AGB', 'footer.deletion': 'Datenlöschung', 'footer.imprint': 'Impressum'
  },
  en: {
    'meta.title': "EL Tech · Don't do it. Let it run.",
    'nav.work': 'Projects', 'nav.about': 'About', 'nav.cta': 'Show us the task',
    'slot.open': "We currently take on new projects",
    'slot.closed': "Fully booked. We'll gladly add you to the list.",
    'hero.eyebrow': 'Automation & AI',
    'hero.h1': '<span class="hl"><span>Don\'t do it.</span></span><span class="hl"><span><em>Let it run.</em></span></span>',
    'hero.sub': 'We automate what steals your time.<br>You focus on what matters.',
    'hero.cta': "Show us what's stealing your time", 'scroll': 'Scroll',
    'task.eyebrow': 'Think of your last week',
    'task.q': 'Which task is stealing your time right now?',
    'task.hint': 'Type & Enter',
    'task.ack': "Let's look at what it's really costing you.",
    'solution.lead': "It doesn't have to be you.",
    'task.examples': ['Writing proposals','Copying data from A to B','Building reports','Sorting invoices','Chasing follow-ups','Updating spreadsheets'],
    'pipe.caption': 'This is what EL Tech builds for you',
    'pipe.n1': 'Trigger', 'pipe.n1s': 'mail, form, time',
    'pipe.n2': 'Blueprint', 'pipe.n2s': 'check, decide',
    'pipe.n3': 'Action', 'pipe.n3s': 'log, send',
    'pipe.n4': 'Done', 'pipe.n4s': 'without you',
    'pipe.result': 'Now runs <b>on its own</b>, week after week.',
    'scene.label': 'Your time',
    'scene.task_label': 'Your task:',
    'scene.b1': 'The same task. Again. And again.',
    'scene.b2': 'This is how your time slips away.',
    'scene.b3': 'And the time? You get it <b>back</b>.',
    'proof.eyebrow': 'Already in use',
    'proof.h2': 'Already running.',
    'proof.line': 'No theory. These systems work every day.',
    'proof.lead': 'Before we built for others, we automated <em>ourselves</em>.',
    'case1.title': 'Client setup and calculations took hours. Today a system does it.',
    'case2.title': 'Reports once done by hand now write themselves.',
    'case3.a': 'Our own channel runs itself.', 'case3.b': 'followers, not one video from us.',
    'case.more': 'Every process is different. <em>Yours</em> too.',
    'founders.kicker': 'Who’s behind it',
    'founders.lead': 'We didn’t study automation. We <em>needed</em> it.',
    'founders.p1': 'It all started with content. Erel didn’t want to do every step by hand anymore and thought: there has to be a better way — simpler, automatic. Lukas came on board and built a pipeline that runs the whole process.',
    'founders.p2': 'The result: over <b>50,000 followers</b> — with fully automated content creation. Not one video we still sit behind ourselves.',
    'founders.p3': 'That’s when it clicked: others have the exact same pain. A wealth advisor, an industrial company — the same tasks everywhere, eating hours and serious money. We automated them at the push of a button. Since then we build that for anyone who wants their time back.',
    'founders.erel.role': 'Co-Founder & CFO',
    'founders.erel.bio': 'Comes from content and started it all: if it’s annoying and repeats, it should automate itself.',
    'founders.lukas.role': 'Co-Founder & CTO',
    'founders.lukas.bio': 'Builds the systems behind it. A pipeline for our own content became the tech that now runs for clients.',
    'contact.kicker': 'Contact us',
    'contact.h2': "Show us what's stealing your <span class=\"u-accent\">time</span>.",
    'contact.p': "Tell us briefly what's eating your time. We'll get back to you with a first take, no strings attached.",
    'form.name': 'Name', 'form.name_ph': 'Your name',
    'form.email': 'Email', 'form.email_ph': 'name@company.com',
    'form.task': 'The task', 'form.task_ph': 'What happens by hand today — and which tools are involved?',
    'form.send': 'Send',
    'form.status': "Thanks — we'll get back to you within 48 hours.",
    'legal.back': '← Back',
    'nav.services': 'Services',
    'services.kicker': 'What we do',
    'work.kicker': 'Already in use',
    'footer.contact': 'Contact',
    'cta.h2': 'Ready to <em>lose</em> a task?',
    'cta.p': 'Show us the one task that steals your time. First take, no strings attached.',
    'cta.btn': 'Show us the task',
    'services.title': 'Services',
    'services.lead': 'From the one annoying task to the end-to-end process — we automate what slows you down.',
    'services.s1.t': 'Process automation',
    'services.s1.d': 'We analyse recurring manual steps and replace them with systems that run reliably in the background.',
    'services.s2.t': 'Workflow & hyperautomation',
    'services.s2.d': 'We chain tools, APIs and AI into one end-to-end process — from trigger to finished result.',
    'services.s3.t': 'AI integration',
    'services.s3.d': 'We put AI where it takes real work off your plate: understanding documents, generating text, preparing decisions.',
    'services.s4.t': 'IT services',
    'services.s4.d': 'Design, build, maintain. We create and look after the digital systems you rely on.',
    'work.title': 'Projects',
    'work.lead': 'No theory. These systems work every day — for others and for ourselves.',
    'footer.privacy': 'Privacy', 'footer.terms': 'Terms', 'footer.deletion': 'Data deletion', 'footer.imprint': 'Imprint'
  }
};

let LANG = 'de';
window.__taskExamples = I18N.de['task.examples'];
window.__userTask = '';

function detectLang() {
  const stored = localStorage.getItem('eltech_lang');
  if (stored && I18N[stored]) return stored;
  try { const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; if (/Berlin|Vienna|Zurich|Busingen/i.test(tz)) return 'de'; } catch (e) {}
  const n = ((navigator.languages && navigator.languages[0]) || navigator.language || '').toLowerCase();
  return n.startsWith('de') ? 'de' : 'en';
}
function setLang(lang) {
  const d = I18N[lang]; if (!d) return;
  LANG = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => { const k = el.dataset.i18n; if (d[k] != null) el.textContent = d[k]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { const k = el.dataset.i18nHtml; if (d[k] != null) el.innerHTML = d[k]; });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { const k = el.dataset.i18nPh; if (d[k] != null) el.placeholder = d[k]; });
  var __pt = document.body.getAttribute('data-title-' + lang); if (__pt) document.title = __pt;
  window.__taskExamples = d['task.examples'];
  if (window.__resetTask) window.__resetTask();
  renderSceneTask();
  updateSlots();
  const tg = document.getElementById('langToggle'); if (tg) tg.textContent = lang === 'de' ? 'EN' : 'DE';
  localStorage.setItem('eltech_lang', lang);
}
function toggleLang() { setLang(LANG === 'de' ? 'en' : 'de'); }

/* ───────── Navigation / Legal ───────── */
function showPage(e, id) { e.preventDefault(); document.getElementById('home').style.display = 'none'; document.querySelectorAll('.legal-page').forEach(p => p.classList.remove('active')); document.getElementById(id).classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }
function showHome(e) {
  e.preventDefault();
  document.querySelectorAll('.legal-page').forEach(p => p.classList.remove('active'));
  document.getElementById('home').style.display = 'block';
  const href = e.currentTarget.getAttribute('href');
  if (href && href.startsWith('#') && href.length > 1) { setTimeout(() => { document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }, 80); }
  else { window.scrollTo({ top: 0, behavior: 'smooth' }); }
  closeMenu();
}
function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
function closeMenu() { document.getElementById('navLinks').classList.remove('open'); }
async function handleContact(e) {
  e.preventDefault();
  const f = e.target;
  const status = document.getElementById('formStatus');
  const btn = f.querySelector('button[type="submit"]');
  btn.disabled = true;
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: new FormData(f)
    });
    const data = await res.json();
    if (data.success) {
      status.textContent = LANG === 'de'
        ? 'Danke, wir melden uns innerhalb von 48 Stunden bei dir.'
        : 'Thanks — we’ll get back to you within 48 hours.';
      status.style.display = 'block';
      f.reset();
    } else {
      throw new Error(data.message || 'Fehler');
    }
  } catch (err) {
    // Fallback: öffnet das Mailprogramm, falls der Versand scheitert
    const subj = LANG === 'de' ? 'Anfrage' : 'Inquiry';
    const body = `Name: ${f.name.value}%0AEmail: ${f.email.value}%0A%0A${encodeURIComponent(f.message.value)}`;
    window.location.href = `mailto:hallo@el-tech.io?subject=${encodeURIComponent(subj)}&body=${body}`;
  } finally {
    btn.disabled = false;
  }
}

/* ───────── Hero cursor follow (smooth rAF lerp, moves toward cursor) ───────── */
(function () {
  const hero = document.getElementById('hero');
  if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches || matchMedia('(pointer: coarse)').matches) return;
  const content = hero.querySelector('.hero-content'), cta = hero.querySelector('.hero-cta-wrap .btn');
  let tcx = 0, tcy = 0, ccx = 0, ccy = 0, tbx = 0, tby = 0, cbx = 0, cby = 0, raf = null, active = false;
  function loop() {
    ccx += (tcx - ccx) * 0.14; ccy += (tcy - ccy) * 0.14;
    cbx += (tbx - cbx) * 0.2; cby += (tby - cby) * 0.2;
    if (content) content.style.transform = `translate(${ccx.toFixed(2)}px, ${ccy.toFixed(2)}px)`;
    if (cta) cta.style.transform = `translate(${cbx.toFixed(2)}px, ${cby.toFixed(2)}px)`;
    const idle = !active && Math.abs(tcx - ccx) < 0.1 && Math.abs(tcy - ccy) < 0.1 && Math.abs(tbx - cbx) < 0.1 && Math.abs(tby - cby) < 0.1;
    if (idle) { raf = null; return; }
    raf = requestAnimationFrame(loop);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(loop); }
  hero.addEventListener('pointermove', e => {
    active = true;
    const nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5;
    tcx = nx * 18; tcy = ny * 12;
    if (cta) {
      const r = cta.getBoundingClientRect(), dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
      const dist = Math.hypot(dx, dy), R = 190;
      if (dist < R) { const f = 1 - dist / R; tbx = dx * 0.3 * f; tby = dy * 0.4 * f; } else { tbx = 0; tby = 0; }
    }
    kick();
  });
  hero.addEventListener('pointerleave', () => { active = false; tcx = tcy = tbx = tby = 0; kick(); });
})();

/* ───────── Hero wordmark: clock falls from "O", rolls, draws line, ends as the dot ───────── */
(function () {
  const clock = document.getElementById('clockO'), oLetter = document.getElementById('oLetter'), ul = document.getElementById('heroUl');
  const hc = document.querySelector('.hero-content'), ln2 = document.getElementById('ln2');
  if (!clock || !oLetter || !ul || !hc || !ln2) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function compute() {
    const slot = oLetter.getBoundingClientRect(), hcr = hc.getBoundingClientRect(), yr = ln2.getBoundingClientRect();
    if (!slot.width || !yr.width) return null;
    const d = Math.max(10, slot.height * 0.72);
    clock.style.width = d + 'px'; clock.style.height = d + 'px';
    clock.style.left = ((slot.left - hcr.left) + slot.width / 2 - d / 2) + 'px';
    clock.style.top = ((slot.top - hcr.top) + slot.height / 2 - d / 2) + 'px';
    const cx = slot.left + slot.width / 2, cy = slot.top + slot.height / 2;
    const dyFall = yr.bottom - cy - slot.height * 0.05;
    return {
      dxStart: yr.left - cx, dxEnd: yr.right - cx, dyFall: dyFall,
      dxPeriod: (yr.right - cx) + slot.height * 0.14, dyPeriod: dyFall - slot.height * 0.08
    };
  }
  function finalState(dl) {
    oLetter.style.opacity = 1; ul.style.transform = 'scaleX(1)';
    if (dl) { clock.classList.add('live', 'dot'); clock.style.transform = `translate(${dl.dxPeriod}px, ${dl.dyPeriod}px) scale(0.24)`; }
    else clock.style.display = 'none';
  }
  function animate(dl) {
    const T = 2000;
    /* the clock (already the O) drops */
    clock.animate([
      { transform: 'translate(0px,0px) scale(1) rotate(0deg)', offset: 0, easing: 'cubic-bezier(.5,0,.9,.25)' },
      { transform: `translate(0px, ${dl.dyFall}px) scale(0.56) rotate(25deg)`, offset: 0.2, easing: 'cubic-bezier(.4,0,.5,1)' },
      { transform: `translate(${dl.dxStart}px, ${dl.dyFall}px) scale(0.44) rotate(-280deg)`, offset: 0.42, easing: 'cubic-bezier(.2,.5,.2,1)' },
      { transform: `translate(${dl.dxEnd}px, ${dl.dyFall}px) scale(0.32) rotate(720deg)`, offset: 0.86, easing: 'cubic-bezier(.3,1.25,.6,1)' },
      { transform: `translate(${dl.dxPeriod}px, ${dl.dyPeriod}px) scale(0.24) rotate(720deg)`, offset: 1 }
    ], { duration: T, fill: 'forwards' });
    /* clock becomes a solid dot = the period */
    setTimeout(() => { clock.classList.add('dot'); }, T * 0.88);
    /* the o simply appears back in "Automate" */
    setTimeout(() => {
      oLetter.style.opacity = '';
      oLetter.animate([{ opacity: 0, transform: 'scale(0.2)' }, { opacity: 1, transform: 'scale(1)' }], { duration: 380, easing: 'cubic-bezier(.34,1.6,.64,1)', fill: 'both' });
    }, T * 0.24);
    /* line drawn BY the clock — same window + easing as the race right */
    setTimeout(() => {
      ul.animate([{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }], { duration: T * 0.44, easing: 'cubic-bezier(.2,.5,.2,1)', fill: 'forwards' });
    }, T * 0.42);
  }
  function init() {
    const dl = compute();
    if (!dl) { requestAnimationFrame(init); return; } /* wait until the headline has laid out */
    if (reduce) { finalState(dl); return; }
    clock.classList.add('live'); /* clock-O fades in on the SAME frame as the headline */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!clock.dataset.fell) compute(); });
    setTimeout(() => { clock.dataset.fell = '1'; animate(compute() || dl); }, 2000); /* sit ~2s, then drop */
  }
  requestAnimationFrame(init);
})();

/* ───────── Task input: capture the pain only (no solution yet) ───────── */
(function () {
  const flow = document.getElementById('flow'), input = document.getElementById('taskInput');
  if (!flow || !input) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let exI = 0, chI = 0, deleting = false, phTimer = null, stopped = false;
  function typePlaceholder() {
    if (stopped) return;
    const list = window.__taskExamples || [];
    if (reduce) { input.placeholder = (list[0] || '') + ' …'; return; }
    const word = list[exI % list.length] || '';
    if (!deleting) { input.placeholder = word.slice(0, chI++) + '▏'; if (chI > word.length) { deleting = true; phTimer = setTimeout(typePlaceholder, 1400); return; } }
    else { input.placeholder = word.slice(0, chI--) + '▏'; if (chI < 0) { deleting = false; chI = 0; exI = (exI + 1) % list.length; } }
    phTimer = setTimeout(typePlaceholder, deleting ? 45 : 80);
  }
  function stopPlaceholder() { stopped = true; clearTimeout(phTimer); input.placeholder = ''; }
  window.doneTask = function (e) {
    e.preventDefault();
    const list = window.__taskExamples || [];
    window.__userTask = (input.value || '').trim() || list[exI % list.length] || '';
    stopPlaceholder();
    renderSceneTask();
    flow.classList.add('done'); input.blur();
    return false;
  };
  window.__resetTask = function () { if (flow.classList.contains('done')) return; stopped = false; exI = 0; chI = 0; deleting = false; clearTimeout(phTimer); typePlaceholder(); };
  input.addEventListener('focus', stopPlaceholder, { once: true });
  typePlaceholder();
})();

/* ───────── Solution pipeline: runs when its section scrolls into view ───────── */
window.__runPipe = function () {
  if (window.__pipeRan) return; window.__pipeRan = true;
  const chip = document.getElementById('pipeChip'), chipText = document.getElementById('pipeChipText'), prog = document.getElementById('pipeProg'), result = document.getElementById('pipeResult');
  const dots = [...document.querySelectorAll('#pipeRail .dot')], labels = [...document.querySelectorAll('.pipe-labels span')];
  const POS = [12.5, 37.5, 62.5, 87.5];
  const list = window.__taskExamples || [];
  if (chipText) chipText.textContent = window.__userTask || list[0] || 'Aufgabe';
  function activate(i) { if (chip) chip.style.left = POS[i] + '%'; if (prog) prog.style.width = (POS[i] - 12.5) + '%'; if (dots[i]) dots[i].classList.add('on'); if (labels[i]) labels[i].classList.add('on'); }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { POS.forEach((_, i) => activate(i)); if (result) result.classList.add('show'); return; }
  let i = 0;
  (function step() { if (i >= POS.length) { if (result) setTimeout(() => result.classList.add('show'), 300); return; } activate(i); i++; setTimeout(step, 700); })();
};

function renderSceneTask() {
  const el = document.getElementById('sceneTask');
  if (!el) return;
  if (!window.__userTask) { el.hidden = true; return; }
  el.hidden = false;
  el.innerHTML = I18N[LANG]['scene.task_label'] + ' <b>«' + window.__userTask.replace(/</g, '&lt;') + '»</b>';
}

/* ───────── Slots ───────── */
const SLOTS_OPEN = true;
function updateSlots() {
  const text = I18N[LANG][SLOTS_OPEN ? 'slot.open' : 'slot.closed'];
  document.querySelectorAll('.slot').forEach(s => { s.classList.toggle('closed', !SLOTS_OPEN); const t = s.querySelector('.slot-text'); if (t) t.textContent = text; });
}

/* ───────── Clock ticks ───────── */
(function () {
  const clock = document.getElementById('clock'); if (!clock) return;
  for (let i = 0; i < 12; i++) { const t = document.createElement('span'); t.className = 'tick'; t.style.transform = `translateX(-50%) rotate(${i * 30}deg)`; clock.insertBefore(t, clock.querySelector('.clock-center')); }
})();

/* ───────── Mini-clock scroll indicator (lean) ───────── */
(function () {
  const mcRing = document.getElementById('mcRing'), mcMin = document.getElementById('mcMin'), mcHour = document.getElementById('mcHour');
  if (!mcMin) return;
  let ticking = false, lastPct = -1;
  function update() {
    const h = document.documentElement, max = (h.scrollHeight - h.clientHeight) || 1;
    const gp = Math.max(0, Math.min(1, h.scrollTop / max));
    const grot = gp < 0.55 ? (gp / 0.55) * 720 : 720 * (1 - (gp - 0.55) / 0.45);
    mcMin.style.transform = `translateX(-50%) rotate(${grot}deg)`;
    if (mcHour) mcHour.style.transform = `translateX(-50%) rotate(${grot * 0.12}deg)`;
    const pct = Math.round(gp * 100);
    if (mcRing && pct !== lastPct) { mcRing.style.setProperty('--p', pct); lastPct = pct; }
    ticking = false;
  }
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  window.addEventListener('resize', update); update();
})();

/* ───────── Scene clock: runs once on enter (no scroll-lock); dark-mode UI ───────── */
(function () {
  const scene = document.getElementById('scene'), stageClock = document.getElementById('clock');
  const hMin = document.getElementById('handMin'), hHour = document.getElementById('handHour');
  const beats = scene ? [...scene.querySelectorAll('.beat')] : [];
  const miniClock = document.getElementById('miniClock'), nav = document.getElementById('nav');
  if (!scene) return;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let played = false;
  function setBeat(i) { beats.forEach((b, k) => b.classList.toggle('on', k === i)); }
  function setHands(rot) {
    if (hMin) hMin.style.transform = `translateX(-50%) rotate(${rot}deg)`;
    if (hHour) hHour.style.transform = `translateX(-50%) rotate(${rot * 0.16}deg)`;
  }
  function run() {
    if (played) return; played = true;
    if (reduce) { if (stageClock) stageClock.classList.add('resolved'); setBeat(2); return; }
    setBeat(0);
    const D1 = 2600, s1 = performance.now();
    (function fwd(now) {
      const t = Math.min((now - s1) / D1, 1);
      setHands((t * t) * 1440);            /* accelerate: time slips */
      setBeat(t < 0.5 ? 0 : 1);
      if (t < 1) requestAnimationFrame(fwd); else back();
    })(s1);
    function back() {
      if (stageClock) stageClock.classList.add('resolved');
      setBeat(2);
      const D2 = 2000, s2 = performance.now();
      (function bwd(now) {
        const t = Math.min((now - s2) / D2, 1);
        setHands(1440 * (1 - (1 - Math.pow(1 - t, 2))));  /* wind back: time returns */
        if (t < 1) requestAnimationFrame(bwd);
      })(s2);
    }
  }
  const proof = document.getElementById('beweis');
  const darkActive = new Set();
  const io = new IntersectionObserver((ents) => {
    ents.forEach(en => {
      if (en.intersectionRatio > 0.5) darkActive.add(en.target); else darkActive.delete(en.target);
      if (en.target === scene && en.isIntersecting && en.intersectionRatio > 0.45) run();
    });
    const on = darkActive.size > 0;
    if (nav) nav.classList.toggle('inv', on);
    if (miniClock) miniClock.classList.toggle('on-dark', on);
  }, { threshold: [0, 0.45, 0.5, 0.75] });
  io.observe(scene);
  if (proof) io.observe(proof);
})();

/* ───────── Reveal + count-up ───────── */
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); en.target.querySelectorAll('[data-count]').forEach(runCount); if (en.target.id === 'solution' && window.__runPipe) window.__runPipe(); io.unobserve(en.target); } });
}, { threshold: 0.18 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
function runCount(el) {
  if (el.dataset.done) return; el.dataset.done = '1';
  const target = parseFloat(el.dataset.count), suffix = el.dataset.suffix || '';
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { el.textContent = target + suffix; return; }
  const dur = 1600, start = performance.now();
  (function tick(now) { const p = Math.min((now - start) / dur, 1), e = 1 - Math.pow(1 - p, 3); el.textContent = Math.round(target * e) + suffix; if (p < 1) requestAnimationFrame(tick); })(start);
}

/* ───────── Init ───────── */
setLang(detectLang());
