# EL Tech — Website

Marketing-Website der **EL Tech GbR** (Automatisierung & IT-Dienstleistungen, Nürnberg) — [el-tech.io](https://el-tech.io).

## Aufbau
Statische Multipage-Site, **kein Build-Step, kein Framework** — reines HTML/CSS/JS.

- `index.html` … Startseite (Hero + interaktive „Zeit"-Journey)
- `leistungen.html`, `projekte.html`, `ueber-uns.html`, `kontakt.html`
- `impressum.html`, `datenschutz.html`, `agb.html`, `datenloeschung.html`
- `styles.css` … gemeinsames CSS für alle Seiten
- `app.js` … gemeinsames JS (i18n DE/EN, Animationen, Kontaktformular)
- `assets/` … Bilder · `robots.txt`, `sitemap.xml`, `llms.txt`, `og.png`

## Deployment
Alle Dateien (außer `_backups/`) ins Web-Root, `index.html` als Standard-Index, HTTPS via Let's Encrypt. Keine Rewrites nötig.

## Bearbeiten
Inhalte/Texte direkt in den `.html`-Dateien bzw. dem `I18N`-Objekt in `app.js`. Die Seiten teilen sich Header/Footer (pro Datei dupliziert).
