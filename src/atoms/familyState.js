import { atom } from 'recoil';

const initialFamilies = [
    {
      "id": 1,
      "name": "abc",
      "members": [
        {
          "name": "John Johnson",
          "age": 60,
          "relation": "Father",
          "interests": "Reading, Gardening",
          "medications": "Aspirin, Lisinopril",
          "habits": "Early riser, Walks daily",
          "description": "John is a retired engineer who loves spending time in his garden and reading historical novels.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "Mary Johnson",
          "age": 58,
          "relation": "Mother",
          "interests": "Cooking, Painting",
          "medications": "Metformin, Atorvastatin",
          "habits": "Yoga, Healthy eating",
          "description": "Mary is a homemaker who enjoys cooking new recipes and painting landscapes in her free time.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "Emily Johnson",
          "age": 25,
          "relation": "Daughter",
          "interests": "Running, Traveling",
          "medications": "None",
          "habits": "Runs every morning, Loves to explore new places",
          "description": "Emily is a software developer who loves running marathons and traveling to different countries.",
          "profileImage": "https://via.placeholder.com/150"
        }
      ],
      "location": "New York",
      "contact": "abc@gmail.com",
      "familyBio": "The Johnsons are a close-knit family living in New York. They are looking for a caretaker to assist with daily activities and provide companionship.",
      "profileImage": "https://via.placeholder.com/150"
    },
    {
      "id": 2,
      "name": "def",
      "members": [
        {
          "name": "Michael Smith",
          "age": 70,
          "relation": "Father",
          "interests": "Fishing, Woodworking",
          "medications": "Warfarin, Metoprolol",
          "habits": "Fishing on weekends, Woodworking projects",
          "description": "Michael is a retired carpenter who loves fishing and working on woodworking projects in his spare time.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "Laura Smith",
          "age": 65,
          "relation": "Mother",
          "interests": "Knitting, Baking",
          "medications": "Lisinopril, Atorvastatin",
          "habits": "Knits daily, Loves baking cookies",
          "description": "Laura is a retired nurse who enjoys knitting and baking delicious cookies for her family.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "James Smith",
          "age": 30,
          "relation": "Son",
          "interests": "Cycling, Music",
          "medications": "None",
          "habits": "Cycles every weekend, Plays guitar",
          "description": "James is a music teacher who enjoys cycling and playing the guitar in his free time.",
          "profileImage": "https://via.placeholder.com/150"
        }
      ],
      "location": "Los Angeles",
      "contact": "def@gmail.com",
      "familyBio": "The Smiths are an active family living in Los Angeles. They are looking for a caretaker to help with daily chores and provide companionship.",
      "profileImage": "https://via.placeholder.com/150"
    },
    {
      "id": 3,
      "name": "ghi",
      "members": [
        {
          "name": "David Brown",
          "age": 55,
          "relation": "Father",
          "interests": "Golf, Traveling",
          "medications": "Amlodipine, Metformin",
          "habits": "Plays golf on weekends, Enjoys traveling",
          "description": "David is a businessman who loves playing golf and traveling to new destinations.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "Sarah Brown",
          "age": 53,
          "relation": "Mother",
          "interests": "Yoga, Reading",
          "medications": "Levothyroxine, Atorvastatin",
          "habits": "Practices yoga daily, Reads novels",
          "description": "Sarah is a writer who practices yoga daily and enjoys reading novels.",
          "profileImage": "https://via.placeholder.com/150"
        },
        {
          "name": "Anna Brown",
          "age": 22,
          "relation": "Daughter",
          "interests": "Photography, Hiking",
          "medications": "None",
          "habits": "Takes photos, Goes on hikes",
          "description": "Anna is a college student who loves photography and hiking in her spare time.",
          "profileImage": "https://via.placeholder.com/150"
        }
      ],
      "location": "Chicago",
      "contact": "ghi@gmail.com",
      "familyBio": "The Browns are a dynamic family living in Chicago. They are looking for a caretaker to assist with household tasks and offer companionship.",
      "profileImage": "https://via.placeholder.com/150"
    }
  ];

export const familyState = atom({
  key: 'familyState',
  default: initialFamilies,
});
