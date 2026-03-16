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
    }
};

function setLanguage(lang) {
    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Update text content
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

    // Update images
    document.getElementById('btn-appstore').src = translations[lang].appStoreImg;
    document.getElementById('btn-googleplay').src = translations[lang].googlePlayImg;

    // Save preference
    localStorage.setItem('conductor-lang', lang);
    document.documentElement.lang = lang;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Default language is 'en' if no preference is saved
    const savedLang = localStorage.getItem('conductor-lang') || 'en';
    setLanguage(savedLang);

    // Event listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
