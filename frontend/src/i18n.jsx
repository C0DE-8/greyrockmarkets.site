import { createContext, useContext, useMemo, useState } from "react";

const translations = {
  en: {
    language: "Language", home: "Home", logIn: "Log in", getStarted: "Get started", dashboard: "Dashboard",
    why: "Why greyrockmarkets", markets: "Explore markets", how: "How it works", mining: "Mining", news: "News", faqs: "FAQs",
    announcement: "A new perspective on investing.", announcementLink: "Meet your next chapter", heroPill: "YOUR FUTURE. MORE POSSIBILITIES.",
    heroLead: "A little vision.", heroFuture: "A bigger", future: "future.", heroDescription: "Follow Bitcoin and crypto markets, explore trading and investment plans, and see your portfolio in perspective. Your next move starts with a clearer view.",
    startJourney: "Start your journey", explorePlatform: "Explore the platform", heroNote: "A clearer view of your investments", allInOne: "All in one place",
    backHome: "Back to home", nextChapter: "YOUR NEXT CHAPTER", futureCopy: "One space for your digital asset portfolio.", nextCopy: "A clearer perspective on what’s next.",
    builtAround: "Built around your next move.", start: "LET’S GET YOU STARTED", welcome: "GOOD TO SEE YOU AGAIN", loginTitle: "Welcome back.", registerTitle: "Build your account.",
    registerCopy: "Create your account to explore markets and manage your portfolio.", loginCopy: "Sign in to view your portfolio and account activity.", secure: "Secure access to your greyrockmarkets account", secureFoot: "Your information is handled securely.",
    fullName: "Full name", username: "Username", email: "Email address", phone: "Phone number", address: "Street address", city: "City", country: "Country", postal: "Postal code (optional)", password: "Password", identifier: "Email or username",
    risk: "I understand investments involve risk and returns are not guaranteed.", agree: "I have read and agree to the", terms: "Terms & Investment Policy", create: "Create account", signIn: "Sign in", wait: "Please wait…", already: "Already have an account?", newHere: "New to greyrockmarkets?", switchRegister: "Create an account",
  },
  es: {
    language: "Idioma", home: "Inicio", logIn: "Iniciar sesión", getStarted: "Comenzar", dashboard: "Panel", why: "Por qué greyrockmarkets", markets: "Explorar mercados", how: "Cómo funciona", mining: "Minería", news: "Noticias", faqs: "Preguntas",
    announcement: "Una nueva perspectiva de inversión.", announcementLink: "Descubre tu próximo paso", heroPill: "TU FUTURO. MÁS POSIBILIDADES.", heroLead: "Una pequeña visión.", heroFuture: "Un futuro", future: "más amplio.", heroDescription: "Sigue los mercados de Bitcoin y criptomonedas, explora operaciones y planes de inversión, y consulta tu cartera con perspectiva. Tu próximo paso empieza con más claridad.", startJourney: "Empieza tu camino", explorePlatform: "Explora la plataforma", heroNote: "Una visión más clara de tus inversiones", allInOne: "Todo en un solo lugar",
    backHome: "Volver al inicio", nextChapter: "TU PRÓXIMO CAPÍTULO", futureCopy: "Un espacio para tu cartera de activos digitales.", nextCopy: "Una perspectiva más clara de lo que viene.", builtAround: "Pensado para tu próximo paso.", start: "EMPECEMOS", welcome: "QUÉ BUENO VERTE", loginTitle: "Te damos la bienvenida.", registerTitle: "Crea tu cuenta.",
    registerCopy: "Crea una cuenta para explorar los mercados y gestionar tu cartera.", loginCopy: "Inicia sesión para ver tu cartera y la actividad de tu cuenta.", secure: "Acceso seguro a tu cuenta de greyrockmarkets", secureFoot: "Tu información se trata de forma segura.",
    fullName: "Nombre completo", username: "Nombre de usuario", email: "Correo electrónico", phone: "Teléfono", address: "Dirección", city: "Ciudad", country: "País", postal: "Código postal (opcional)", password: "Contraseña", identifier: "Correo o usuario", risk: "Entiendo que invertir implica riesgos y que no se garantizan rendimientos.", agree: "He leído y acepto la", terms: "Política de términos e inversión", create: "Crear cuenta", signIn: "Iniciar sesión", wait: "Un momento…", already: "¿Ya tienes una cuenta?", newHere: "¿Nuevo en greyrockmarkets?", switchRegister: "Crear una cuenta",
  },
  fr: {
    language: "Langue", home: "Accueil", logIn: "Connexion", getStarted: "Commencer", dashboard: "Tableau de bord", why: "Pourquoi greyrockmarkets", markets: "Explorer les marchés", how: "Fonctionnement", mining: "Minage", news: "Actualités", faqs: "FAQ",
    announcement: "Une nouvelle perspective sur l’investissement.", announcementLink: "Découvrez la suite", heroPill: "VOTRE AVENIR. PLUS DE POSSIBILITÉS.", heroLead: "Une vision claire.", heroFuture: "Un avenir", future: "plus grand.", heroDescription: "Suivez les marchés du Bitcoin et des cryptomonnaies, découvrez le trading et les plans d’investissement, et gardez une vue d’ensemble de votre portefeuille. Votre prochain pas commence par plus de clarté.", startJourney: "Commencer", explorePlatform: "Explorer la plateforme", heroNote: "Une vue plus claire de vos investissements", allInOne: "Tout au même endroit",
    backHome: "Retour à l’accueil", nextChapter: "VOTRE PROCHAIN CHAPITRE", futureCopy: "Un espace pour votre portefeuille d’actifs numériques.", nextCopy: "Une perspective plus claire sur la suite.", builtAround: "Conçu pour votre prochain pas.", start: "C’EST PARTI", welcome: "HEUREUX DE VOUS REVOIR", loginTitle: "Bon retour.", registerTitle: "Créez votre compte.",
    registerCopy: "Créez un compte pour explorer les marchés et gérer votre portefeuille.", loginCopy: "Connectez-vous pour consulter votre portefeuille et l’activité du compte.", secure: "Accès sécurisé à votre compte greyrockmarkets", secureFoot: "Vos informations sont traitées en toute sécurité.",
    fullName: "Nom complet", username: "Nom d’utilisateur", email: "Adresse e-mail", phone: "Téléphone", address: "Adresse", city: "Ville", country: "Pays", postal: "Code postal (facultatif)", password: "Mot de passe", identifier: "E-mail ou identifiant", risk: "Je comprends que l’investissement comporte des risques et que les rendements ne sont pas garantis.", agree: "J’ai lu et j’accepte la", terms: "Politique d’utilisation et d’investissement", create: "Créer un compte", signIn: "Se connecter", wait: "Veuillez patienter…", already: "Vous avez déjà un compte ?", newHere: "Nouveau sur greyrockmarkets ?", switchRegister: "Créer un compte",
  },
  de: {
    language: "Sprache", home: "Startseite", logIn: "Anmelden", getStarted: "Loslegen", dashboard: "Übersicht", why: "Warum greyrockmarkets", markets: "Märkte entdecken", how: "So funktioniert es", mining: "Mining", news: "Nachrichten", faqs: "FAQ",
    announcement: "Eine neue Perspektive auf Geldanlagen.", announcementLink: "Entdecken Sie den nächsten Schritt", heroPill: "IHRE ZUKUNFT. MEHR MÖGLICHKEITEN.", heroLead: "Ein klarer Blick.", heroFuture: "Eine größere", future: "Zukunft.", heroDescription: "Verfolgen Sie Bitcoin- und Kryptomärkte, entdecken Sie Trading und Anlagepläne und behalten Sie Ihr Portfolio im Blick. Ihr nächster Schritt beginnt mit mehr Klarheit.", startJourney: "Jetzt starten", explorePlatform: "Plattform entdecken", heroNote: "Mehr Überblick über Ihre Anlagen", allInOne: "Alles an einem Ort",
    backHome: "Zurück zur Startseite", nextChapter: "IHR NÄCHSTES KAPITEL", futureCopy: "Ein Ort für Ihr Portfolio digitaler Vermögenswerte.", nextCopy: "Ein klarer Blick auf das, was kommt.", builtAround: "Für Ihren nächsten Schritt entwickelt.", start: "JETZT STARTEN", welcome: "SCHÖN, DASS SIE WIEDER DA SIND", loginTitle: "Willkommen zurück.", registerTitle: "Konto erstellen.",
    registerCopy: "Erstellen Sie ein Konto, um Märkte zu erkunden und Ihr Portfolio zu verwalten.", loginCopy: "Melden Sie sich an, um Ihr Portfolio und Ihre Kontoaktivitäten anzusehen.", secure: "Sicherer Zugang zu Ihrem greyrockmarkets-Konto", secureFoot: "Ihre Daten werden sicher verarbeitet.",
    fullName: "Vollständiger Name", username: "Benutzername", email: "E-Mail-Adresse", phone: "Telefonnummer", address: "Straße und Hausnummer", city: "Stadt", country: "Land", postal: "Postleitzahl (optional)", password: "Passwort", identifier: "E-Mail oder Benutzername", risk: "Mir ist bewusst, dass Geldanlagen Risiken bergen und Erträge nicht garantiert sind.", agree: "Ich habe die", terms: "Nutzungs- und Anlagerichtlinie", create: "Konto erstellen", signIn: "Anmelden", wait: "Bitte warten…", already: "Sie haben bereits ein Konto?", newHere: "Neu bei greyrockmarkets?", switchRegister: "Konto erstellen",
  },
};

const LanguageContext = createContext(null);
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem("greyrockmarkets-language");
    return translations[saved] ? saved : "en";
  });
  const value = useMemo(() => ({
    language,
    setLanguage: (next) => {
      if (!translations[next]) return;
      localStorage.setItem("greyrockmarkets-language", next);
      document.documentElement.lang = next;
      setLanguage(next);
    },
    t: (key) => translations[language][key] || translations.en[key] || key,
  }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}

export function LanguagePicker({ className = "" }) {
  const { language, setLanguage, t } = useLanguage();
  return (
    <label className={`languagePicker ${className}`.trim()}>
      <span>{t("language")}</span>
      <select aria-label={t("language")} value={language} onChange={(event) => setLanguage(event.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
        <option value="de">Deutsch</option>
      </select>
    </label>
  );
}
