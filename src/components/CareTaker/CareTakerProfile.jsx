import React, { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { authState } from '../../atoms/authState';
import { caretakersState } from '../../atoms/caretakersState';

const CareTakerProfile = () => {
  const { user } = useRecoilValue(authState);
  const caretakers = useRecoilValue(caretakersState);
  const setCaretakers = useSetRecoilState(caretakersState);
  const caretaker = caretakers.find(c => c.name === user.name);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...caretaker });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfile({ ...editedProfile, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setCaretakers((prevCaretakers) =>
      prevCaretakers.map((c) =>
        c.id === caretaker.id ? { ...editedProfile } : c
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-100"></div>
        <div className="relative z-10 p-8">
          <h2 className="text-4xl font-bold text-white">Care Taker Profile</h2>
        </div>
      </div>

      {isEditing ? (
        <div className="bg-white shadow-lg rounded-lg border p-6 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Skills</label>
            <input
              type="text"
              name="skills"
              value={editedProfile.skills.join(', ')}
              onChange={(e) =>
                setEditedProfile({
                  ...editedProfile,
                  skills: e.target.value.split(',').map(skill => skill.trim())
                })
              }
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={editedProfile.location}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Rating</label>
            <input
              type="number"
              name="rating"
              value={editedProfile.rating}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Pricing ($/hour)</label>
            <input
              type="number"
              name="pricing"
              value={editedProfile.pricing}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Experience (years)</label>
            <input
              type="number"
              name="experience"
              value={editedProfile.experience}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Description</label>
            <textarea
              name="description"
              value={editedProfile.description}
              onChange={handleChange}
              className="w-full border p-2 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Photo</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border p-2 rounded-lg"
            />
            {editedProfile.photo && (
              <img
                src={editedProfile.photo}
                alt="Profile"
                className="mt-4 w-32 h-32 object-cover rounded-full"
              />
            )}
          </div>
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg border p-6 mb-4">
          <div className="flex flex-col sm:flex-row items-start mb-4">
            {caretaker.photo && (
              <img
                src={caretaker.photo}
                alt="Profile"
                className="w-32 h-32 object-cover rounded-full mb-4 sm:mb-0 sm:mr-4"
              />
            )}
            <div>
              <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{caretaker.name}</h3>
              <p className="text-gray-700 mb-1"><strong>Skills:</strong> {caretaker.skills.join(', ')}</p>
              <p className="text-gray-700 mb-1"><strong>Location:</strong> {caretaker.location}</p>
              <p className="text-gray-700 mb-1"><strong>Rating:</strong> {caretaker.rating}</p>
              <p className="text-gray-700 mb-1"><strong>Pricing:</strong> ${caretaker.pricing}/hour</p>
              <p className="text-gray-700 mb-1"><strong>Experience:</strong> {caretaker.experience} years</p>
              <p className="text-gray-700 mb-1"><strong>Description:</strong> {caretaker.description}</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default CareTakerProfile;