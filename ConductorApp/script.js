const translations = {
    tr: {
        appName: "Kondüktör App",
        navSupport: "Destek",
        heroTitle: "Ulaşım Bütçeni Akıllıca Yönet",
        heroDesc: "Kondüktör App ile ulaşım bütçeni kolayca yönet. Tüm yolculuk masraflarını takip et, harcamalarını analiz et ve ulaşım giderlerini kontrol altında tut. Hemen App Store veya Google Play'den indirin!",
        appStoreLink: "https://apps.apple.com/tr/app/conductor-fare-assistant/id6758008397?l=tr",
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.burakcekuc.conductor",
        appStoreImg: "img/app_store_tr.png",
        googlePlayImg: "img/google_play_tr.png",
        copyright: "© 2026 Burak Çeküç Tüm hakları saklıdır.",
        privacy: "Gizlilik Politikası",
        terms: "Kullanım Koşulları"
    },
    en: {
        appName: "Conductor App",
        navSupport: "Support",
        heroTitle: "Manage Your Transport Budget Smarter",
        heroDesc: "Manage your transportation budget easily with Conductor App. Track all your travel expenses, analyze your spending, and keep your transport costs under control. Download now from the App Store or Google Play!",
        appStoreLink: "https://apps.apple.com/us/app/conductor-fare-assistant/id6758008397",
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.burakcekuc.conductor",
        appStoreImg: "img/app_store_en.png",
        googlePlayImg: "img/google_play_en.png",
        copyright: "© 2026 Burak Çeküç All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Use"
    },
    es: {
        appName: "Revisor App",
        navSupport: "Soporte",
        heroTitle: "Gestiona tu Presupuesto de Transporte con Inteligencia",
        heroDesc: "Gestiona fácilmente tu presupuesto de transporte con Revisor App. Realiza un seguimiento de todos tus gastos de viaje, analiza tus gastos y mantén bajo control tus costos de transporte. ¡Descárgalo ahora desde App Store o Google Play!",
        appStoreLink: "https://apps.apple.com/us/app/conductor-fare-assistant/id6758008397",
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.burakcekuc.conductor",
        appStoreImg: "img/app_store_en.png",
        googlePlayImg: "img/google_play_en.png",
        copyright: "© 2026 Burak Çeküç Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Uso"
    },
    fr: {
        appName: "Contrôleur App",
        navSupport: "Support",
        heroTitle: "Gérez Votre Budget Transport Plus Intelligemment",
        heroDesc: "Gérez facilement votre budget de transport avec Contrôleur App. Suivez toutes vos dépenses de voyage, analysez vos dépenses et gardez vos coûts de transport sous contrôle. Téléchargez maintenant sur l'App Store ou Google Play !",
        appStoreLink: "https://apps.apple.com/us/app/conductor-fare-assistant/id6758008397",
        googlePlayLink: "https://play.google.com/store/apps/details?id=com.burakcekuc.conductor",
        appStoreImg: "img/app_store_en.png",
        googlePlayImg: "img/google_play_en.png",
        copyright: "© 2026 Burak Çeküç Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d'Utilisation"
    }
};

function setLanguage(lang) {
    const select = document.getElementById('lang-select');
    if (select) select.value = lang;

    document.getElementById('app-name').textContent = translations[lang].appName;
    document.getElementById('nav-support').textContent = translations[lang].navSupport;
    document.getElementById('hero-title').textContent = translations[lang].heroTitle;
    document.getElementById('hero-desc').textContent = translations[lang].heroDesc;

    const appStoreLink = document.getElementById('link-appstore');
    if (appStoreLink) appStoreLink.href = translations[lang].appStoreLink;

    const googlePlayLink = document.getElementById('link-googleplay');
    if (googlePlayLink) googlePlayLink.href = translations[lang].googlePlayLink;

    document.getElementById('copyright').textContent = translations[lang].copyright;
    document.getElementById('link-privacy').textContent = translations[lang].privacy;
    document.getElementById('link-terms').textContent = translations[lang].terms;

    document.getElementById('btn-appstore').src = translations[lang].appStoreImg;
    document.getElementById('btn-googleplay').src = translations[lang].googlePlayImg;

    localStorage.setItem('conductor-lang', lang);
    document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('conductor-lang') || 'en';
    setLanguage(savedLang);

    document.getElementById('lang-select').addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });
});
