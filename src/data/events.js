export const events = [
    {
      id: 1, slug: 'hackverse-2026', title: 'HackVerse 2026', category: 'hackathon', mode: 'offline',
      startDate: '2026-11-15', prize: '₹1,00,000', teamSize: '1-4',
      tags: ['AI', 'Web3', 'Open Innovation'], banner: 'https://picsum.photos/seed/hack/600/300',
      description: '36-hour hackathon jaha builders milke real problems solve karte hain. Mentors, swag aur free food included.',
      location: 'IITM Janakpuri, New Delhi',
      regDeadline: '2026-11-10',
      prizes: [
        { position: '🥇 1st', reward: '₹50,000' },
        { position: '🥈 2nd', reward: '₹30,000' },
        { position: '🥉 3rd', reward: '₹20,000' },
      ],
      timeline: [
        { title: 'Registrations close', date: '2026-11-10' },
        { title: 'Hacking begins', date: '2026-11-15' },
        { title: 'Final demos', date: '2026-11-16' },
      ],
      rules: ['Team size 1-4', 'Pehle se bana project allowed nahi', 'Open source libraries allowed hain'],
    },
    { id: 2, slug: 'code-clash', title: 'Code Clash', category: 'competition', mode: 'online', startDate: '2026-11-02', prize: '₹25,000', teamSize: '1', tags: ['DSA', 'CP'], banner: 'https://picsum.photos/seed/code/600/300' },
    { id: 3, slug: 'react-workshop', title: 'React Zero to Hero', category: 'workshop', mode: 'hybrid', startDate: '2026-10-20', prize: 'Certificate', teamSize: '1', tags: ['React', 'Frontend'], banner: 'https://picsum.photos/seed/react/600/300' },
    { id: 4, slug: 'tech-quiz', title: 'TechTrivia Quiz', category: 'quiz', mode: 'online', startDate: '2026-10-28', prize: '₹10,000', teamSize: '1-2', tags: ['GK', 'Tech'], banner: 'https://picsum.photos/seed/quiz/600/300' },
    { id: 5, slug: 'rang-tarang', title: 'Rang Tarang', category: 'cultural', mode: 'offline', startDate: '2026-12-05', prize: '₹50,000', teamSize: '1-6', tags: ['Dance', 'Music'], banner: 'https://picsum.photos/seed/cult/600/300' },
  ];
  
  export const categories = ['all', 'hackathon', 'competition', 'workshop', 'quiz', 'cultural'];