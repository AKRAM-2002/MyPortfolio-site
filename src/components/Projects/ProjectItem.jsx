import React from 'react';

const ProjectItem = ({
  title,
  date,
  description,
  stack,
  codeLink,
  liveDemoLink,
  imageSrc,
  altText,
}) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    margin: '16px',
    padding: '16px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s ease-in-out',
    ':hover': {
      transform: 'scale(1.05)',
    },
  };

  const imageStyle = {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '8px',
  };

  const linkStyle = {
    marginRight: '8px',
    color: '#3498db',
    textDecoration: 'none',
  };

  return (
    <div style={cardStyle}>
      <div>
        <img src={imageSrc} alt={altText} style={imageStyle} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <p>{stack}</p>
        <a href={codeLink} style={linkStyle}>
          Code
        </a>
        <a href={liveDemoLink} style={linkStyle}>
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
