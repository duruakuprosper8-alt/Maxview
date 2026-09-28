import { useState } from "react";
import AvatarEditor from "../../components/profile/AvatarEditor";
import "./EditProfile.css";

function EditProfile() {
  const [avatar, setAvatar] = useState(null);

  const [showAvatarEditor, setShowAvatarEditor] = useState(false);

  const [avatarSettings, setAvatarSettings] = useState({
    zoom: 1,
    positionX: 50,
    positionY: 50,
  });

  const [favoriteFandoms, setFavoriteFandoms] = useState([
    "Marvel",
    "DC",
    "Anime",
    "Star Wars",
  ]);

  const fandoms = [
    "Marvel",
    "DC",
    "Anime",
    "Star Wars",
    "Harry Potter",
    "Gaming",
    "Comics",
    "Movies",
  ];

  const handleFandomChange = (fandom) => {
    setFavoriteFandoms((currentFandoms) =>
      currentFandoms.includes(fandom)
        ? currentFandoms.filter((item) => item !== fandom)
        : [...currentFandoms, fandom]
    );
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setAvatar(imageUrl);

    setAvatarSettings({
      zoom: 1,
      positionX: 50,
      positionY: 50,
    });

    setShowAvatarEditor(true);
  };

  const handleAvatarApply = (settings) => {
    setAvatarSettings({
      zoom: settings.zoom,
      positionX: settings.positionX,
      positionY: settings.positionY,
    });

    setShowAvatarEditor(false);
  };

  const handleAvatarRemove = () => {
    setAvatar(null);

    setAvatarSettings({
      zoom: 1,
      positionX: 50,
      positionY: 50,
    });

    setShowAvatarEditor(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Profile changes:", {
      favoriteFandoms,
      avatar,
      avatarSettings,
    });
  };

  return (
    <div className="edit-profile-page">
      <div className="edit-profile-container">
        <div className="edit-profile-header">
          <div>
            <h1>Edit Profile</h1>
            <p>Update your personal information and preferences.</p>
          </div>

          <a href="/profile" className="cancel-button">
            Cancel
          </a>
        </div>

        <form className="edit-profile-form" onSubmit={handleSubmit}>

          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Profile Information</h2>
              <p>
                Update the information displayed on your profile.
              </p>
            </div>

            <div className="avatar-section">
              <label
                htmlFor="avatar-upload"
                className="edit-avatar clickable-avatar"
              >
                {avatar ? (
                  <img
                    src={avatar}
                    alt="Profile preview"
                    style={{
                      transform: `scale(${avatarSettings.zoom})`,
                      objectPosition: `${avatarSettings.positionX}% ${avatarSettings.positionY}%`,
                    }}
                  />
                ) : (
                  "WC"
                )}
              </label>

              <div className="avatar-actions">
                <label
                  htmlFor="avatar-upload"
                  className="secondary-button"
                >
                  Change Avatar
                </label>

                <input
                  type="file"
                  id="avatar-upload"
                  accept="image/png, image/jpeg, image/gif"
                  onChange={handleAvatarChange}
                  hidden
                />

                <span>
                  JPG, PNG or GIF. Maximum size 5MB.
                </span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>

                <input
                  type="text"
                  id="firstName"
                  defaultValue="Wisdom"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>

                <input
                  type="text"
                  id="lastName"
                  defaultValue="Charles"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="displayName">
                Display Name
              </label>

              <input
                type="text"
                id="displayName"
                defaultValue="Wisdom Charles"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                defaultValue="wisdom.charles@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio">Bio</label>

              <textarea
                id="bio"
                rows="4"
                placeholder="Tell the fandom community a little about yourself..."
              ></textarea>
            </div>
          </section>

          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Favorite Fandoms</h2>

              <p>
                Select the fandoms you love most.
              </p>
            </div>

            <div className="fandom-options">
              {fandoms.map((fandom) => (
                <label
                  key={fandom}
                  className="fandom-option"
                >
                  <input
                    type="checkbox"
                    checked={favoriteFandoms.includes(fandom)}
                    onChange={() =>
                      handleFandomChange(fandom)
                    }
                  />

                  <span>{fandom}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Display Preferences */}
          <section className="edit-profile-card">
            <div className="edit-card-header">
              <h2>Display Preferences</h2>

              <p>
                Customize how Max View looks for you.
              </p>
            </div>

            <div className="preference-control">
              <div>
                <strong>Theme</strong>

                <p>
                  Choose your preferred appearance.
                </p>
              </div>

              <select defaultValue="dark">
                <option value="dark">Dark</option>
                <option value="light">Light</option>
                <option value="system">
                  System Default
                </option>
              </select>
            </div>
            <div className="preference-control">
              <div>
                <strong>Content Language</strong>

                <p>
                  Select the language used across the
                  platform.
                </p>
              </div>

              <select defaultValue="english">
                <option value="english">English</option>
              </select>
            </div>
          </section>

          <div className="form-actions">
            <a href="/profile" className="cancel-button">
              Cancel
            </a>

            <button
              type="submit"
              className="save-button"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>

  
      {showAvatarEditor && (
        <AvatarEditor
          image={avatar}
          onApply={handleAvatarApply}
          onRemove={handleAvatarRemove}
          onClose={() =>
            setShowAvatarEditor(false)
          }
        />
      )}
    </div>
  );
}

export default EditProfile;
