
import React, { useState } from 'react';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleBookSubmit = book => {
    setBooks([...books, book]);
  };

  const handleAuthorSubmit = author => {
    setAuthors([...authors, author]);
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm onSubmit={handleBookSubmit} />

      <h2>Author Management</h2>
      <AuthorForm onSubmit={handleAuthorSubmit} />
    </div>
  );
};

export default Dashboard;
