import { atom } from 'recoil';
import testimonial1 from '../assets/testimonial1.jpeg';
import testimonial2 from '../assets/testimonial2.jpg';
import testimonial3 from '../assets/testimonial3.jpg';
import testimonial4 from '../assets/testimonial4.jpg';

const initialCareTakers = [
  {
    id: 1,
    name: 'Alice Johnson',
    age: 35,
    gender: 'Female',
    skills: ['Nursing', 'Cooking', 'Medication Management'],
    location: 'New York',
    rating: 4.5,
    schedule: [
      { day: 'Monday', time: '9 AM - 5 PM' },
      { day: 'Wednesday', time: '9 AM - 5 PM' },
    ],
    pricing: 25, // Pricing per hour in USD
    bio: 'Alice has over 10 years of experience in nursing and elderly care. She is compassionate and dedicated.',
    contact: 'alice@example.com',
    profileImage: testimonial4,
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 42,
    gender: 'Male',
    skills: ['Driving', 'Housekeeping', 'Companionship'],
    location: 'Los Angeles',
    rating: 4.0,
    schedule: [
      { day: 'Tuesday', time: '10 AM - 6 PM' },
      { day: 'Thursday', time: '10 AM - 6 PM' },
    ],
    pricing: 20, // Pricing per hour in USD
    bio: 'Bob is an experienced caretaker with a friendly and approachable personality. He excels in providing companionship and assistance with daily activities.',
    contact: 'bob@example.com',
    profileImage: testimonial2,
  },
  {
    id: 3,
    name: 'Charlie Brown',
    age: 29,
    gender: 'Male',
    skills: ['Gardening', 'Shopping', 'Pet Care'],
    location: 'Chicago',
    rating: 4.8,
    schedule: [
      { day: 'Monday', time: '8 AM - 4 PM' },
      { day: 'Friday', time: '8 AM - 4 PM' },
    ],
    pricing: 22, // Pricing per hour in USD
    bio: 'Charlie is a versatile caretaker who is great with outdoor activities and pet care. He has a cheerful disposition and is always ready to help.',
    contact: 'charlie@example.com',
    profileImage: testimonial3,
  },
  {
    id: 4,
    name: 'Diana Ross',
    age: 38,
    gender: 'Female',
    skills: ['Physical Therapy', 'Cooking', 'Housekeeping'],
    location: 'San Francisco',
    rating: 4.9,
    schedule: [
      { day: 'Wednesday', time: '10 AM - 6 PM' },
      { day: 'Saturday', time: '10 AM - 6 PM' },
    ],
    pricing: 30, // Pricing per hour in USD
    bio: 'Diana is a certified physical therapist with over 15 years of experience. She is dedicated to improving the quality of life of her clients.',
    contact: 'diana@example.com',
    profileImage: testimonial1,
  },
  {
    id: 5,
    name: 'Edward King',
    age: 45,
    gender: 'Male',
    skills: ['Medical Assistance', 'Companionship', 'Driving'],
    location: 'Miami',
    rating: 4.7,
    schedule: [
      { day: 'Tuesday', time: '9 AM - 5 PM' },
      { day: 'Thursday', time: '9 AM - 5 PM' },
    ],
    pricing: 28, // Pricing per hour in USD
    bio: 'Edward has extensive experience in medical assistance and caregiving. He is known for his reliable and trustworthy nature.',
    contact: 'edward@example.com',
    profileImage: testimonial2,
  },
];

export const caretakersState = atom({
  key: 'caretakersState',
  default: initialCareTakers,
});
