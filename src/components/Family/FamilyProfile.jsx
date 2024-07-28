import React, { useState, useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { familyState } from '../../atoms/familyState';
import { authState } from '../../atoms/authState';

const FamilyProfile = () => {
  const { user } = useRecoilValue(authState);
  const [families, setFamilies] = useRecoilState(familyState);
  const [family, setFamily] = useState(null);
  const [newMember, setNewMember] = useState({
    name: '',
    age: '',
    gender: '',
    relationship: '',
    contact: '',
    medications: '',
    habits: '',
    eatingHabits: '',
    hobbies: '',
    interests: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const foundFamily = families.find(fam => fam.contact === user.email);
    setFamily(foundFamily);
  }, [families, user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMember({ ...newMember, [name]: value });
  };

  const addMember = () => {
    const updatedFamily = { ...family, members: [...family.members, newMember] };
    setFamilies(families.map(fam => (fam.id === family.id ? updatedFamily : fam)));
    setNewMember({
      name: '',
      age: '',
      gender: '',
      relationship: '',
      contact: '',
      medications: '',
      habits: '',
      eatingHabits: '',
      hobbies: '',
      interests: '',
    });
  };

  const updateMember = (index, updatedDetails) => {
    const updatedMembers = family.members.map((member, i) => (i === index ? updatedDetails : member));
    const updatedFamily = { ...family, members: updatedMembers };
    setFamilies(families.map(fam => (fam.id === family.id ? updatedFamily : fam)));
    setIsEditing(false);
  };

  if (!family) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg animate__animated animate__fadeIn">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Family Profile</h2>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700">Family Members</h3>
        <ul>
          {family.members.map((member, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p>Age: {member.age}</p>
              <p>Gender: {member.gender}</p>
              <p>Relationship: {member.relation}</p>
              <p>Contact: {member.contact}</p>
              <p>Medications: {member.medications}</p>
              <p>Habits: {member.habits}</p>
              <p>Eating Habits: {member.eatingHabits}</p>
              <p>Hobbies: {member.hobbies}</p>
              <p>Interests: {member.interests}</p>
              <button
                onClick={() => setIsEditing(index)}
                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Edit
              </button>
              {isEditing === index && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold">Edit Member Details</h4>
                  <input
                    type="text"
                    name="name"
                    value={newMember.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="number"
                    name="age"
                    value={newMember.age}
                    onChange={handleInputChange}
                    placeholder="Age"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="gender"
                    value={newMember.gender}
                    onChange={handleInputChange}
                    placeholder="Gender"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="relationship"
                    value={newMember.relationship}
                    onChange={handleInputChange}
                    placeholder="Relationship"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="contact"
                    value={newMember.contact}
                    onChange={handleInputChange}
                    placeholder="Contact"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="medications"
                    value={newMember.medications}
                    onChange={handleInputChange}
                    placeholder="Medications"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="habits"
                    value={newMember.habits}
                    onChange={handleInputChange}
                    placeholder="Habits"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="eatingHabits"
                    value={newMember.eatingHabits}
                    onChange={handleInputChange}
                    placeholder="Eating Habits"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="hobbies"
                    value={newMember.hobbies}
                    onChange={handleInputChange}
                    placeholder="Hobbies"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <input
                    type="text"
                    name="interests"
                    value={newMember.interests}
                    onChange={handleInputChange}
                    placeholder="Interests"
                    className="border border-gray-300 rounded-lg p-2 w-full mb-2"
                  />
                  <button
                    onClick={() => updateMember(index, newMember)}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                  >
                    Save
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-700">Add New Member</h3>
        <input
          type="text"
          name="name"
          value={newMember.name}
          onChange={handleInputChange}
          placeholder="Name"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="number"
          name="age"
          value={newMember.age}
          onChange={handleInputChange}
          placeholder="Age"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="gender"
          value={newMember.gender}
          onChange={handleInputChange}
          placeholder="Gender"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="relationship"
          value={newMember.relationship}
          onChange={handleInputChange}
          placeholder="Relationship"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="contact"
          value={newMember.contact}
          onChange={handleInputChange}
          placeholder="Contact"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="medications"
          value={newMember.medications}
          onChange={handleInputChange}
          placeholder="Medications"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="habits"
          value={newMember.habits}
          onChange={handleInputChange}
          placeholder="Habits"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="eatingHabits"
          value={newMember.eatingHabits}
          onChange={handleInputChange}
          placeholder="Eating Habits"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="hobbies"
          value={newMember.hobbies}
          onChange={handleInputChange}
          placeholder="Hobbies"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <input
          type="text"
          name="interests"
          value={newMember.interests}
          onChange={handleInputChange}
          placeholder="Interests"
          className="border border-gray-300 rounded-lg p-2 w-full mb-2"
        />
        <button
          onClick={addMember}
          className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Add Member
        </button>
      </div>
    </div>
  );
};

export default FamilyProfile;
