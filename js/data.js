// =============================================
// ÉCOLE DE DANSE ADK — Data (données fictives)
// =============================================

const DATA = {

  school: {
    name: "École de Danse ADK",
    shortName: "ADK",
    tagline: "Une famille · Une passion · Une histoire · Une vie",
    founded: 1998,
    address: "Rue de la Danse 42, 1050 Ixelles, Belgique",
    phone: "+32 2 345 67 89",
    email: "contact@annedkdanse.be",
    website: "www.annedkdanse.be",
    facebook: "https://facebook.com/annedkdanse",
    instagram: "https://instagram.com/annedkdanse",
    mapQuery: "Rue+de+la+Danse+42+Ixelles+Belgique",
    stats: { eleves: 180, professeurs: 8, styles: 5, spectacles: 28 }
  },

  courses: [
    {
      id: 1, style: "classique",
      name: "Danse Classique",
      desc: "La base de tout apprentissage. Posture, grâce et technique au programme pour développer un danseur complet.",
      ages: "4 – 18 ans",
      levels: "Éveil → Avancé",
      image: "assets/images/dance_ballet.png",
      emoji: "🩰",
      schedule: ["Lundi 15h-16h", "Mercredi 16h-17h30", "Samedi 10h-12h"]
    },
    {
      id: 2, style: "contemporain",
      name: "Danse Contemporaine",
      desc: "Liberté d'expression et créativité. Explorer les limites du mouvement dans une approche moderne et artistique.",
      ages: "10 – 25 ans",
      levels: "Débutant → Confirmé",
      image: "assets/images/dance_contemporary.png",
      emoji: "🌊",
      schedule: ["Mardi 18h-19h30", "Jeudi 17h-18h30"]
    },
    {
      id: 3, style: "jazz",
      name: "Jazz & Comédie Musicale",
      desc: "Énergie, rythme et show ! Le jazz ADK allie technique solide et interprétation scénique explosive.",
      ages: "7 – 20 ans",
      levels: "Débutant → Avancé",
      image: "assets/images/dance_jazz.png",
      emoji: "🎷",
      schedule: ["Mercredi 17h30-19h", "Vendredi 17h-18h30"]
    },
    {
      id: 4, style: "hiphop",
      name: "Hip-Hop & Street Jazz",
      desc: "Battles, grooves et flows. Le hip-hop ADK est fun, authentique et accessible à tous les niveaux.",
      ages: "8 – adulte",
      levels: "Tous niveaux",
      image: null,
      emoji: "🎤",
      schedule: ["Jeudi 18h30-20h", "Samedi 14h-15h30"]
    },
    {
      id: 5, style: "eveil",
      name: "Éveil à la Danse",
      desc: "Les tout-petits découvrent la musique et le mouvement en s'amusant. Une initiation douce et bienveillante.",
      ages: "3 – 5 ans",
      levels: "Tout-petits",
      image: null,
      emoji: "🌸",
      schedule: ["Mercredi 9h30-10h15", "Samedi 9h-9h45"]
    },
    {
      id: 6, style: "classique",
      name: "Pointe & Variation",
      desc: "Cours avancé pour les danseuses classiques maîtrisant les bases. Travail sur les pointes et variations de répertoire.",
      ages: "12+ ans",
      levels: "Avancé",
      image: null,
      emoji: "🎭",
      schedule: ["Lundi 16h-17h30", "Samedi 12h-13h30"]
    }
  ],

  schedule: {
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    slots: [
      { day: 0, hour: "09h00", course: "Pointe & Variation (Avancé)", style: "classique", duration: 1.5 },
      { day: 0, hour: "15h00", course: "Classique Enfants", style: "classique", duration: 1 },
      { day: 0, hour: "16h00", course: "Pointe & Variation", style: "classique", duration: 1.5 },
      { day: 1, hour: "17h00", course: "Contemporain Ados", style: "contemporain", duration: 1.5 },
      { day: 1, hour: "18h00", course: "Contemporain Adultes", style: "contemporain", duration: 1.5 },
      { day: 2, hour: "09h30", course: "Éveil à la Danse", style: "eveil", duration: 0.75 },
      { day: 2, hour: "16h00", course: "Classique Enfants", style: "classique", duration: 1 },
      { day: 2, hour: "17h30", course: "Jazz Ados", style: "jazz", duration: 1.5 },
      { day: 3, hour: "17h00", course: "Contemporain Ados", style: "contemporain", duration: 1.5 },
      { day: 3, hour: "18h30", course: "Hip-Hop Tous Niveaux", style: "hiphop", duration: 1.5 },
      { day: 4, hour: "17h00", course: "Jazz Adultes", style: "jazz", duration: 1.5 },
      { day: 5, hour: "09h00", course: "Éveil à la Danse", style: "eveil", duration: 0.75 },
      { day: 5, hour: "10h00", course: "Classique Enfants", style: "classique", duration: 2 },
      { day: 5, hour: "12h00", course: "Pointe & Variation", style: "classique", duration: 1.5 },
      { day: 5, hour: "14h00", course: "Hip-Hop Ados", style: "hiphop", duration: 1.5 },
    ]
  },

  news: [
    {
      id: 1,
      date: "15 juin 2026",
      title: "Gala de fin d'année — Inscriptions ouvertes !",
      excerpt: "Le grand spectacle de l'école ADK aura lieu le 28 juin à l'Auditorium de Ixelles. Réservez vos places dès maintenant !",
      image: "assets/images/dance_jazz.png",
      emoji: "🎭",
      category: "Événement"
    },
    {
      id: 2,
      date: "1 juin 2026",
      title: "Stage d'été intensif — Juillet 2026",
      excerpt: "Du 7 au 18 juillet, rejoignez notre stage d'été pour progresser rapidement en classique, contemporain et jazz.",
      image: null,
      emoji: "☀️",
      category: "Stage"
    },
    {
      id: 3,
      date: "15 mai 2026",
      title: "Inscriptions 2026-2027 dès maintenant",
      excerpt: "Les inscriptions pour la prochaine saison sont ouvertes. Profitez du tarif préférentiel pour les familles inscrivant plusieurs enfants.",
      image: "assets/images/dance_ballet.png",
      emoji: "📋",
      category: "Inscriptions"
    }
  ],

  gallery: [
    { src: "assets/images/dance_ballet.png", alt: "Cours de ballet", category: "Classique" },
    { src: "assets/images/dance_jazz.png", alt: "Jazz & spectacle", category: "Jazz" },
    { src: "assets/images/dance_contemporary.png", alt: "Contemporain", category: "Contemporain" },
    { src: "assets/images/hero_dancer.png", alt: "Danseuse solo", category: "Classique" },
    { src: "assets/images/dance_ballet.png", alt: "Barre classique", category: "Classique" },
    { src: "assets/images/dance_jazz.png", alt: "Gala", category: "Événement" },
    { src: "assets/images/dance_contemporary.png", alt: "Répétition", category: "Contemporain" },
    { src: "assets/images/hero_dancer.png", alt: "Variation", category: "Classique" },
    { src: "assets/images/dance_jazz.png", alt: "Showcase", category: "Jazz" },
  ],

  prices: [
    { label: "1 cours / semaine", price: "280€", period: "/ an", note: "Cours de 45 min – 1h" },
    { label: "2 cours / semaine", price: "480€", period: "/ an", note: "Réduction famille 15%" },
    { label: "Pass Illimité", price: "650€", period: "/ an", note: "Tous les cours à volonté" },
    { label: "Stage d'été (2 sem.)", price: "220€", period: "/ stage", note: "Jul ou Août" }
  ],

  demoParent: {
    email: "parent@adk.be",
    password: "adk2026",
    name: "Marie",
    children: [
      {
        name: "Léa",
        age: 9,
        courses: ["Danse Classique", "Jazz"],
        attendance: [
          { date: "09/06", course: "Classique", status: "present" },
          { date: "07/06", course: "Jazz", status: "present" },
          { date: "02/06", course: "Classique", status: "absent" },
          { date: "31/05", course: "Jazz", status: "excuse" },
          { date: "26/05", course: "Classique", status: "present" },
        ]
      }
    ]
  },

  nextEvent: {
    name: "Gala de Fin d'Année",
    date: new Date("2026-06-28T19:00:00")
  }
};
