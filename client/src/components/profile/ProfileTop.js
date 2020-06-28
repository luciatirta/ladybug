import React from 'react';
import { Link } from 'react-router-dom';

const ProfileTop = ({ user, profile, setShowingHeader }) => {
  return (
    <div className="ui segment">
      <div className="ui grid" style={{ backgroundColor: '#b82601' }}>
        <div
          className="sixteen wide column center-text white-text"
          style={{ padding: '2rem' }}
        >
          <img
            className="ui small circular centered image"
            style={{ position: 'relative' }}
            src={profile.avatar}
            alt=""
          />
          <div className="splitscreen">
            <h4 className="hide-buttonA large">
              {`${profile.name} `}
              {user._id === profile.user && (
                <button
                  onClick={() => setShowingHeader(true)}
                  className="invisible-button hide-buttonB"
                >
                  <i
                    className="ui tiny white icon edit outline"
                    style={{ color: 'white' }}
                  ></i>
                </button>
              )}
            </h4>
          </div>
          {profile.status && <div className="lead">{`${profile.status}`}</div>}
          <div className="icons">
            {profile.social && profile.social.website && (
              <Link
                to={`${profile.social.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big globe icon"></i>
              </Link>
            )}
            {profile.social && profile.social.twitter && (
              <Link
                to={`${profile.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big twitter icon"></i>
              </Link>
            )}
            {profile.social && profile.social.facebook && (
              <Link
                to={`${profile.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big facebook icon"></i>
              </Link>
            )}
            {profile.social && profile.social.linkedin && (
              <Link
                to={`${profile.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big linkedin icon"></i>
              </Link>
            )}
            {profile.social && profile.social.youtube && (
              <a
                href={profile.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big youtube icon"></i>
              </a>
            )}
            {profile.social && profile.social.instagram && (
              <Link
                to={`${profile.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="white-link"
              >
                <i className="big instagram icon"></i>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTop;