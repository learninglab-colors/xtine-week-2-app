import React, { useState } from 'react';

interface NameInputProps {
  onNameSubmit: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ onNameSubmit }) => {
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name.trim() === '') {
      setError('Please enter your name');
      return;
    }
    
    setError('');
    onNameSubmit(name);
  };

  return (
    <div className="name-input-container">
      <p>your name:</p>
      
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            aria-label="Your name"
            className="name-input"
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        
        <button type="submit" className="submit-button">
          beginnen sie   
        </button>
      </form>
      
      <style jsx>{`
        .name-input-container {
          max-width: 500px;
          margin: 0 auto;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color:rgb(162, 22, 209);
        }
        
        h2 {
          color: #333;
          margin-bottom: 0.5rem;
        }
        
        .input-group {
          margin: 1.5rem 0;
        }
        
        .name-input {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          margin-bottom: 0.5rem;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .submit-button {
          background-color:rgb(218, 43, 98);
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        
        .submit-button:hover {
          background-color:rgb(156, 206, 41);
        }
      `}</style>
    </div>
  );
};

export default NameInput;