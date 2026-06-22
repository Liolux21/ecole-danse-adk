// =============================================
// ÉCOLE DE DANSE ADK — Data v2 (3 rôles)
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

  // ---- UTILISATEURS ----
  users: [
    { id: 1, email: 'admin@adk.be',    password: 'admin2026',  role: 'admin',  name: 'Anne Dubois',   avatar: '👑', title: 'Directrice' },
    { id: 2, email: 'prof@adk.be',     password: 'prof2026',   role: 'prof',   name: 'Sophie Martin', avatar: '👩‍🏫', title: 'Professeure', courseIds: [1, 3, 6] },
    { id: 3, email: 'prof2@adk.be',    password: 'prof2026',   role: 'prof',   name: 'Marc Leroy',    avatar: '👨‍🏫', title: 'Professeur',  courseIds: [2, 4] },
    { id: 4, email: 'parent@adk.be',   password: 'parent2026', role: 'parent', name: 'Marie Dupont',  avatar: '👩', childrenIds: [1] },
    { id: 5, email: 'parent2@adk.be',  password: 'parent2026', role: 'parent', name: 'Jean Petit',    avatar: '👨', childrenIds: [2, 3] },
  ],

  // ---- COURS ----
  courses: [
    { id: 1, style: "classique",    name: "Danse Classique",       desc: "La base de tout apprentissage. Posture, grâce et technique au programme pour développer un danseur complet.", ages: "4 – 18 ans", levels: "Éveil → Avancé", image: "assets/images/dance_ballet.png", emoji: "🩰", schedule: ["Lundi 15h-16h", "Mercredi 16h-17h30", "Samedi 10h-12h"] },
    { id: 2, style: "contemporain", name: "Danse Contemporaine",   desc: "Liberté d'expression et créativité. Explorer les limites du mouvement dans une approche moderne et artistique.", ages: "10 – 25 ans", levels: "Débutant → Confirmé", image: "assets/images/dance_contemporary.png", emoji: "🌊", schedule: ["Mardi 18h-19h30", "Jeudi 17h-18h30"] },
    { id: 3, style: "jazz",         name: "Jazz & Comédie Musicale", desc: "Énergie, rythme et show ! Le jazz ADK allie technique solide et interprétation scénique explosive.", ages: "7 – 20 ans", levels: "Débutant → Avancé", image: "assets/images/dance_jazz.png", emoji: "🎷", schedule: ["Mercredi 17h30-19h", "Vendredi 17h-18h30"] },
    { id: 4, style: "hiphop",       name: "Hip-Hop & Street Jazz", desc: "Battles, grooves et flows. Le hip-hop ADK est fun, authentique et accessible à tous les niveaux.", ages: "8 – adulte", levels: "Tous niveaux", image: null, emoji: "🎤", schedule: ["Jeudi 18h30-20h", "Samedi 14h-15h30"] },
    { id: 5, style: "eveil",        name: "Éveil à la Danse",      desc: "Les tout-petits découvrent la musique et le mouvement en s'amusant. Une initiation douce et bienveillante.", ages: "3 – 5 ans", levels: "Tout-petits", image: null, emoji: "🌸", schedule: ["Mercredi 9h30-10h15", "Samedi 9h-9h45"] },
    { id: 6, style: "classique",    name: "Pointe & Variation",    desc: "Cours avancé pour les danseuses classiques maîtrisant les bases. Travail sur les pointes et variations de répertoire.", ages: "12+ ans", levels: "Avancé", image: null, emoji: "🎭", schedule: ["Lundi 16h-17h30", "Samedi 12h-13h30"] },
  ],

  // ---- ÉLÈVES ----
  students: [
    { id: 1, firstname: 'Léa',   lastname: 'Dupont',   age: 9,  courseIds: [1, 3], parentId: 4, cotisation: 'payée',    montant: 480 },
    { id: 2, firstname: 'Emma',  lastname: 'Petit',    age: 7,  courseIds: [1],    parentId: 5, cotisation: 'payée',    montant: 280 },
    { id: 3, firstname: 'Tom',   lastname: 'Petit',    age: 12, courseIds: [4],    parentId: 5, cotisation: 'en attente', montant: 280 },
    { id: 4, firstname: 'Chloé', lastname: 'Bernard',  age: 14, courseIds: [2, 6], parentId: null, cotisation: 'payée', montant: 480 },
    { id: 5, firstname: 'Inès',  lastname: 'Martin',   age: 10, courseIds: [1, 3], parentId: null, cotisation: 'payée', montant: 480 },
    { id: 6, firstname: 'Zoé',   lastname: 'Lambert',  age: 6,  courseIds: [5],    parentId: null, cotisation: 'payée', montant: 280 },
    { id: 7, firstname: 'Milo',  lastname: 'Rousseau', age: 13, courseIds: [4, 2], parentId: null, cotisation: 'en attente', montant: 480 },
    { id: 8, firstname: 'Alice', lastname: 'Moreau',   age: 8,  courseIds: [1, 5], parentId: null, cotisation: 'payée', montant: 480 },
  ],

  // ---- PRÉSENCES ----
  attendance: [
    { studentId: 1, courseId: 1, date: '16/06', status: 'present' },
    { studentId: 1, courseId: 3, date: '14/06', status: 'present' },
    { studentId: 1, courseId: 1, date: '09/06', status: 'absent'  },
    { studentId: 1, courseId: 3, date: '07/06', status: 'excuse'  },
    { studentId: 1, courseId: 1, date: '02/06', status: 'present' },

    { studentId: 2, courseId: 1, date: '16/06', status: 'present' },
    { studentId: 2, courseId: 1, date: '09/06', status: 'present' },
    { studentId: 2, courseId: 1, date: '02/06', status: 'absent'  },

    { studentId: 3, courseId: 4, date: '12/06', status: 'present' },
    { studentId: 3, courseId: 4, date: '05/06', status: 'present' },

    { studentId: 4, courseId: 2, date: '17/06', status: 'present' },
    { studentId: 4, courseId: 6, date: '16/06', status: 'present' },
    { studentId: 4, courseId: 2, date: '10/06', status: 'excuse'  },

    { studentId: 5, courseId: 1, date: '16/06', status: 'present' },
    { studentId: 5, courseId: 3, date: '14/06', status: 'absent'  },

    { studentId: 7, courseId: 4, date: '12/06', status: 'present' },
    { studentId: 7, courseId: 2, date: '17/06', status: 'present' },

    { studentId: 8, courseId: 1, date: '16/06', status: 'present' },
    { studentId: 8, courseId: 5, date: '14/06', status: 'present' },
  ],

  // ---- INSCRIPTIONS EN ATTENTE ----
  inscriptions: [
    { id: 1, childName: 'Zoé Laurent',   age: 8,  parentName: 'Claire Laurent', email: 'claire.laurent@email.com', phone: '0476 12 34 56', courses: ['Danse Classique'], level: 'Débutant', status: 'pending',  date: '20/06/2026', message: 'Ma fille rêve de faire de la danse classique !' },
    { id: 2, childName: 'Milo Rousseau', age: 11, parentName: 'Paul Rousseau',  email: 'paul.rousseau@email.com',  phone: '0486 54 32 10', courses: ['Hip-Hop & Street Jazz'], level: '1-2 ans', status: 'pending',  date: '19/06/2026', message: '' },
    { id: 3, childName: 'Alice Moreau',  age: 6,  parentName: 'Julie Moreau',   email: 'julie.moreau@email.com',   phone: '0472 98 76 54', courses: ['Éveil à la Danse'], level: 'Débutant', status: 'approved', date: '15/06/2026', message: 'Première fois en danse.' },
    { id: 4, childName: 'Lucas Girard',  age: 15, parentName: 'Eric Girard',    email: 'eric.girard@email.com',    phone: '0479 11 22 33', courses: ['Danse Contemporaine', 'Jazz'], level: '3-5 ans', status: 'pending',  date: '22/06/2026', message: 'Lucas a déjà fait 4 ans de danse dans une autre école.' },
  ],

  // ---- PLANNING ----
  schedule: {
    days: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    slots: [
      { day: 0, hour: "09h00", course: "Pointe & Variation (Avancé)", style: "classique",    duration: 1.5, courseId: 6 },
      { day: 0, hour: "15h00", course: "Classique Enfants",           style: "classique",    duration: 1,   courseId: 1 },
      { day: 0, hour: "16h00", course: "Pointe & Variation",          style: "classique",    duration: 1.5, courseId: 6 },
      { day: 1, hour: "17h00", course: "Contemporain Ados",           style: "contemporain", duration: 1.5, courseId: 2 },
      { day: 1, hour: "18h00", course: "Contemporain Adultes",        style: "contemporain", duration: 1.5, courseId: 2 },
      { day: 2, hour: "09h30", course: "Éveil à la Danse",            style: "eveil",        duration: 0.75,courseId: 5 },
      { day: 2, hour: "16h00", course: "Classique Enfants",           style: "classique",    duration: 1,   courseId: 1 },
      { day: 2, hour: "17h30", course: "Jazz Ados",                   style: "jazz",         duration: 1.5, courseId: 3 },
      { day: 3, hour: "17h00", course: "Contemporain Ados",           style: "contemporain", duration: 1.5, courseId: 2 },
      { day: 3, hour: "18h30", course: "Hip-Hop Tous Niveaux",        style: "hiphop",       duration: 1.5, courseId: 4 },
      { day: 4, hour: "17h00", course: "Jazz Adultes",                style: "jazz",         duration: 1.5, courseId: 3 },
      { day: 5, hour: "09h00", course: "Éveil à la Danse",            style: "eveil",        duration: 0.75,courseId: 5 },
      { day: 5, hour: "10h00", course: "Classique Enfants",           style: "classique",    duration: 2,   courseId: 1 },
      { day: 5, hour: "12h00", course: "Pointe & Variation",          style: "classique",    duration: 1.5, courseId: 6 },
      { day: 5, hour: "14h00", course: "Hip-Hop Ados",                style: "hiphop",       duration: 1.5, courseId: 4 },
    ]
  },

  // ---- ACTUALITÉS ----
  news: [
    { id: 1, date: "15 juin 2026", title: "Gala de fin d'année — Inscriptions ouvertes !", excerpt: "Le grand spectacle de l'école ADK aura lieu le 28 juin à l'Auditorium de Ixelles. Réservez vos places dès maintenant !", image: "assets/images/dance_jazz.png", emoji: "🎭", category: "Événement" },
    { id: 2, date: "1 juin 2026",  title: "Stage d'été intensif — Juillet 2026",            excerpt: "Du 7 au 18 juillet, rejoignez notre stage d'été pour progresser rapidement en classique, contemporain et jazz.", image: null, emoji: "☀️", category: "Stage" },
    { id: 3, date: "15 mai 2026",  title: "Inscriptions 2026-2027 dès maintenant",          excerpt: "Les inscriptions pour la prochaine saison sont ouvertes. Profitez du tarif préférentiel pour les familles inscrivant plusieurs enfants.", image: "assets/images/dance_ballet.png", emoji: "📋", category: "Inscriptions" },
  ],

  // ---- GALERIE ----
  gallery: [
    { src: "assets/images/dance_ballet.png",       alt: "Cours de ballet",   category: "Classique"    },
    { src: "assets/images/dance_jazz.png",         alt: "Jazz & spectacle",  category: "Jazz"         },
    { src: "assets/images/dance_contemporary.png", alt: "Contemporain",      category: "Contemporain" },
    { src: "assets/images/hero_dancer.png",        alt: "Danseuse solo",     category: "Classique"    },
    { src: "assets/images/dance_ballet.png",       alt: "Barre classique",   category: "Classique"    },
    { src: "assets/images/dance_jazz.png",         alt: "Gala",              category: "Événement"    },
    { src: "assets/images/dance_contemporary.png", alt: "Répétition",        category: "Contemporain" },
    { src: "assets/images/hero_dancer.png",        alt: "Variation",         category: "Classique"    },
    { src: "assets/images/dance_jazz.png",         alt: "Showcase",          category: "Jazz"         },
  ],

  nextEvent: { name: "Gala de Fin d'Année", date: new Date("2026-06-28T19:00:00") },

  // ---- HELPERS ----
  getCourseById(id) { return this.courses.find(c => c.id === id); },
  getStudentById(id) { return this.students.find(s => s.id === id); },
  getUserById(id) { return this.users.find(u => u.id === id); },
  getStudentsByCourse(courseId) { return this.students.filter(s => s.courseIds.includes(courseId)); },
  getAttendanceByStudent(studentId) { return this.attendance.filter(a => a.studentId === studentId); },
  getAttendanceByStudentAndCourse(studentId, courseId) { return this.attendance.filter(a => a.studentId === studentId && a.courseId === courseId); },
  getPendingInscriptions() { return this.inscriptions.filter(i => i.status === 'pending'); },
  getChildrenByParent(parentId) { return this.students.filter(s => s.parentId === parentId); },
  approveInscription(id) { const i = this.inscriptions.find(i => i.id === id); if (i) i.status = 'approved'; },
  rejectInscription(id)  { const i = this.inscriptions.find(i => i.id === id); if (i) i.status = 'rejected'; },
  markAttendance(studentId, courseId, date, status) {
    const existing = this.attendance.find(a => a.studentId === studentId && a.courseId === courseId && a.date === date);
    if (existing) { existing.status = status; }
    else { this.attendance.push({ studentId, courseId, date, status }); }
  }
};
