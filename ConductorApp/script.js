const translations = {
    tr: {
        appName: "Kondüktör App",
        navSupport: "Destek",
        heroTitle: "Ulaşım Bütçeni Akıllıca Yönet",
        heroDesc: "Kondüktör App ile ulaşım bütçeni kolayca yönet. Tüm yolculuk masraflarını takip et, harcamalarını analiz et ve ulaşım giderlerini kontrol altında tut. Çok yakında App Store ve Google Play'de.",
        comingSoon: "Çok Yakında",
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
        heroDesc: "Manage your transportation budget easily with Conductor App. Track all your travel expenses, analyze your spending, and keep your transport costs under control. Coming soon to App Store and Google Play.",
        comingSoon: "Coming Soon",
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

    const badges = document.querySelectorAll('.coming-soon-badge');
    badges.forEach(badge => badge.textContent = translations[lang].comingSoon);

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
