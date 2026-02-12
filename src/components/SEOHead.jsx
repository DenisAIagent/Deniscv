import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const BASE_URL = 'https://adam-denis.com';

const SEO_DATA = {
  fr: {
    title: 'Denis Adam - Manager operationnel & Gestion de projets numeriques',
    description:
      "Manager operationnel avec 8+ ans d'experience en gestion de projets et accompagnement d'equipes. Fondateur MDMC Music Ads (500+ clients, 34M vues). Photographe accredite Rolling Stone France & Forbes.",
    locale: 'fr_FR',
  },
  en: {
    title: 'Denis Adam - Operational Manager & Digital Project Management',
    description:
      'Operational manager with 8+ years of experience in project management and team support. Founder of MDMC Music Ads (500+ clients, 34M views). Accredited photographer Rolling Stone France & Forbes.',
    locale: 'en_US',
  },
  es: {
    title: 'Denis Adam - Manager operativo & Gestion de proyectos digitales',
    description:
      'Manager operativo con mas de 8 anos de experiencia en gestion de proyectos y acompanamiento de equipos. Fundador MDMC Music Ads (500+ clientes, 34M visualizaciones).',
    locale: 'es_ES',
  },
  pt: {
    title: 'Denis Adam - Manager operacional & Gestao de projetos digitais',
    description:
      'Manager operacional com mais de 8 anos de experiencia em gestao de projetos e acompanhamento de equipas. Fundador MDMC Music Ads (500+ clientes, 34M visualizacoes).',
    locale: 'pt_PT',
  },
};

const LANGUAGES = ['fr', 'en', 'es', 'pt'];
const OG_IMAGE = 'https://adam-denis.com/og-denis-adam.jpg';

const SEOHead = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.substring(0, 2) || 'fr';
  const seo = SEO_DATA[lang] || SEO_DATA.fr;
  const langUrl = `${BASE_URL}?lang=${lang}`;

  useEffect(() => {
    // Title & lang
    document.title = seo.title;
    document.documentElement.lang = lang;

    // Helper: update or create meta
    const updateMeta = (name, content, attr = 'name') => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: update or create link
    const updateLink = (rel, href, attrs = {}) => {
      const selector = Object.entries(attrs)
        .map(([k, v]) => `[${k}="${v}"]`)
        .join('');
      let el = document.querySelector(`link[rel="${rel}"]${selector}`);
      if (!el) {
        el = document.createElement('link');
        el.rel = rel;
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      el.href = href;
    };

    // Standard meta
    updateMeta('description', seo.description);

    // Open Graph
    updateMeta('og:title', seo.title, 'property');
    updateMeta('og:description', seo.description, 'property');
    updateMeta('og:url', langUrl, 'property');
    updateMeta('og:image', OG_IMAGE, 'property');
    updateMeta('og:locale', seo.locale, 'property');

    // OG locale alternates
    LANGUAGES.filter((l) => l !== lang).forEach((l) => {
      const altLocale = SEO_DATA[l]?.locale;
      if (altLocale) {
        let el = document.querySelector(`meta[property="og:locale:alternate"][content="${altLocale}"]`);
        if (!el) {
          el = document.createElement('meta');
          el.setAttribute('property', 'og:locale:alternate');
          el.setAttribute('content', altLocale);
          document.head.appendChild(el);
        }
      }
    });

    // Twitter
    updateMeta('twitter:title', seo.title);
    updateMeta('twitter:description', seo.description);
    updateMeta('twitter:image', OG_IMAGE);

    // Canonical
    updateLink('canonical', langUrl);

    // Hreflang per language
    LANGUAGES.forEach((l) => {
      updateLink('alternate', `${BASE_URL}?lang=${l}`, { hreflang: l });
    });
    updateLink('alternate', BASE_URL, { hreflang: 'x-default' });
  }, [lang, seo, langUrl]);

  return null;
};

export default SEOHead;
