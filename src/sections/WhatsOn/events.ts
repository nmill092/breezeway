import boardgamesbrew from 'assets/images/events/boardgamesbrew.jpg';
import bookswap from 'assets/images/events/bookswap.jpg';
import chess from 'assets/images/events/chess.jpg';
import coffeeconversation from 'assets/images/events/coffeeconversation.jpg';
import collage from 'assets/images/events/collage.jpg';
import communitytech from 'assets/images/events/communitytech.jpg';
import creativemeetup from 'assets/images/events/creativemeetup.jpg';
import freelancercoffee from 'assets/images/events/freelancercoffee.jpg';
import glorydays from 'assets/images/events/glorydays.jpg';
import indiegamenight from 'assets/images/events/indiegamenight.jpg';
import newtoneighborhood from 'assets/images/events/newtoneighborhood.jpg';
import phillytrivia from 'assets/images/events/phillytrivia.jpg';
import resumedropin from 'assets/images/events/resumedropin.jpg';
import sketchsip from 'assets/images/events/sketchsip.jpg';
import spinners from 'assets/images/events/spinners.jpg';
import tenantrights from 'assets/images/events/tenantrights.jpg';

export type EventCategory = 'Arts & Culture' | 'Gaming' | 'Resources' | 'Social Meetups' | 'Networking'; 

export interface Event {
  id: number, 
  title: string, 
  description: string, 
  category: EventCategory,
  month: number, 
  monthday: number,
  year: number, 
  startHours: number, 
  startMinutes: number,
  endHours: number,
  endMinutes: number,
  image: ImageMetadata,
  imageAlt: string
}; 

export const events: Event[] = [
  {
    id: 1, 
    title: 'Sketch \'n\' Sip', 
    description: 'Stop by for a morning full of coffee, conversation, and a guided drawing session by a local Point Breeze artist. All materials supplied!',
    category: 'Arts & Culture',
    month: 9, 
    monthday: 10, 
    year: 2026,
    startHours: 10, 
    startMinutes: 0,
    endHours: 11, 
    endMinutes: 0,
    image: sketchsip, 
    imageAlt: ''
  },
   {
    id: 2,
    title: 'Tuesday Chess Night',
    description: 'Casual chess games for every skill level. Bring a board or jump into an open match.',
    category: 'Gaming',
    month: 9,
    monthday: 15,
    year: 2026,
    startHours: 18,
    startMinutes: 30,
    endHours: 20,
    endMinutes: 30,
    image: chess, 
    imageAlt: ''
  },
  {
    id: 3,
    title: 'Neighborhood Book Swap',
    description: 'Bring a book you have finished and leave with something new from a neighbor.',
    category: 'Arts & Culture',
    month: 9,
    monthday: 19,
    year: 2026,
    startHours: 11,
    startMinutes: 0,
    endHours: 14,
    endMinutes: 0,
    image: bookswap, 
    imageAlt: ''
  },
  {
    id: 4,
    title: 'Freelancer Coffee Hour',
    description: 'Meet other local freelancers, swap ideas, and break up the workday over coffee.',
    category: 'Networking',
    month: 9,
    monthday: 22,
    year: 2026,
    startHours: 9,
    startMinutes: 0,
    endHours: 10,
    endMinutes: 30,
    image: freelancercoffee, 
    imageAlt: ''
  },
  {
    id: 5,
    title: 'Know Your Tenant Rights',
    description: 'A local housing advocate answers common questions about Philly-area renter protections.',
    category: 'Resources',
    month: 9,
    monthday: 24,
    year: 2026,
    startHours: 18,
    startMinutes: 0,
    endHours: 19,
    endMinutes: 30,
    image: tenantrights, 
    imageAlt: ''
  },
  {
    id: 6,
    title: 'Board Games \'n\' Brew',
    description: 'Drop in for an afternoon of cards, strategy games, party games, and friendly competition.',
    category: 'Gaming',
    month: 9,
    monthday: 27,
    year: 2026,
    startHours: 13,
    startMinutes: 0,
    endHours: 16,
    endMinutes: 0,
    image: boardgamesbrew, 
    imageAlt: ''
  },
  {
    id: 7,
    title: 'Glory Days Book Club',
    description: 'Join other community members aged 60 and over for a discussion of <em>Poisonwood Bible</em> by Barbara Kingsolver. New book each month!',
    category: 'Arts & Culture',
    month: 10,
    monthday: 3,
    year: 2026,
    startHours: 10,
    startMinutes: 30,
    endHours: 12,
    endMinutes: 0,
    image: glorydays, 
    imageAlt: ''
  },
  {
    id: 8,
    title: 'New to the Neighborhood',
    description: 'Low-key meetup for recent arrivals to meet neighbors and learn about the area.',
    category: 'Social Meetups',
    month: 10,
    monthday: 7,
    year: 2026,
    startHours: 18,
    startMinutes: 30,
    endHours: 20,
    endMinutes: 0,
    image: newtoneighborhood, 
    imageAlt: ''
  },
  {
    id: 9,
    title: 'Resume Drop-In',
    description: 'Bring your resume for practical feedback, quick edits, and job-search advice from local volunteers.',
    category: 'Resources',
    month: 10,
    monthday: 10,
    year: 2026,
    startHours: 12,
    startMinutes: 0,
    endHours: 14,
    endMinutes: 0,
    image: resumedropin, 
    imageAlt: ''
  },
  {
    id: 10,
    title: 'Indie Game Night',
    description: 'Play a rotating selection of small independent games and chat with other local players.',
    category: 'Gaming',
    month: 10,
    monthday: 13,
    year: 2026,
    startHours: 19,
    startMinutes: 0,
    endHours: 21,
    endMinutes: 0,
    image: indiegamenight, 
    imageAlt: ''
  },
  {
    id: 11,
    title: 'South Philly Spinners',
    description: 'Bring your favorite vinyl record and we\'ll spin a couple of tracks for all to enjoy. All genres welcome.',
    category: 'Arts & Culture',
    month: 10,
    monthday: 16,
    year: 2026,
    startHours: 19,
    startMinutes: 0,
    endHours: 21,
    endMinutes: 30,
    image: spinners, 
    imageAlt: ''
  },
  {
    id: 12,
    title: 'Creative People Meetup',
    description: 'Designers, writers, artists, photographers, and makers gather for conversation without pitches or presentations.',
    category: 'Networking',
    month: 10,
    monthday: 21,
    year: 2026,
    startHours: 18,
    startMinutes: 0,
    endHours: 20,
    endMinutes: 0,
    image: creativemeetup, 
    imageAlt: ''
  },
  {
    id: 13,
    title: 'Coffee & Conversation',
    description: 'Show up, grab a drink, share a table, and meet someone nearby.',
    category: 'Social Meetups',
    month: 10,
    monthday: 25,
    year: 2026,
    startHours: 10,
    startMinutes: 0,
    endHours: 12,
    endMinutes: 0,
    image: coffeeconversation, 
    imageAlt: ''
  },
  {
    id: 14,
    title: 'Community Tech Help',
    description: 'Get free help with phones, laptops, online forms, email accounts, and other everyday technology.',
    category: 'Resources',
    month: 10,
    monthday: 29,
    year: 2026,
    startHours: 17,
    startMinutes: 30,
    endHours: 19,
    endMinutes: 30,
    image: communitytech, 
    imageAlt: ''
  },
  {
    id: 15,
    title: 'Philly Trivia Night',
    description: 'Team up for trivia covering Philadelphia history, neighborhoods, food, music, sports, and local oddities.',
    category: 'Gaming',
    month: 11,
    monthday: 4,
    year: 2026,
    startHours: 19,
    startMinutes: 0,
    endHours: 21,
    endMinutes: 0,
    image: phillytrivia, 
    imageAlt: ''
  },
  {
    id: 16,
    title: 'Collage Workshop',
    description: 'Make something strange, colorful, or beautiful using magazines, paper scraps, photographs, scissors, and glue.',
    category: 'Arts & Culture',
    month: 11,
    monthday: 8,
    year: 2026,
    startHours: 13,
    startMinutes: 0,
    endHours: 15,
    endMinutes: 0,
    image: collage, 
    imageAlt: ''
  }
]