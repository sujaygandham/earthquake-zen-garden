import React from "react";
import response from "../../data.json";

const { profile } = response;

export const Profile = () => {
  return (
    <div className="profile">
      <h3>Profile</h3>
      <div className="profile-content">
        <img
          src={profile.avatarImage}
          alt={`${profile.firstName} ${profile.lastName}`}
          width={250}
          height={250}
        />
        <table>
          <tbody>
            <tr>
              <td className="label">First Name</td>
              <td>{profile.firstName}</td>
            </tr>
            <tr>
              <td className="label">Last Name</td>
              <td>{profile.lastName}</td>
            </tr>
            <tr>
              <td className="label">Phone</td>
              <td>{profile.phone}</td>
            </tr>
            <tr>
              <td className="label">Email</td>
              <td>{profile.email}</td>
            </tr>
            <tr>
              <td className="label">Bio</td>
              <td>{profile.bio}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
