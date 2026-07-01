# EL Tech — statische Website in nginx
FROM nginx:1.27-alpine

# nginx-Konfiguration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# nur die Website-Dateien ins Web-Root (keine internen Dateien)
COPY index.html leistungen.html projekte.html ueber-uns.html kontakt.html \
     impressum.html datenschutz.html agb.html datenloeschung.html \
     styles.css app.js robots.txt sitemap.xml llms.txt og.png \
     /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/

EXPOSE 80

# Healthcheck: liefert die Startseite aus?
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1
