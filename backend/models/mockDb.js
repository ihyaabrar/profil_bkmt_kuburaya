'use strict';

const mockDatabase = {
  users: [
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    { id: 3, username: 'user3', email: 'user3@example.com' }
  ],
  news: [
    { id: 1, title: 'First News', content: 'Content of the first news article.', date: '2026-04-01' },
    { id: 2, title: 'Second News', content: 'Content of the second news article.', date: '2026-04-02' }
  ],
  pages: [
    { id: 1, title: 'Home', content: 'Welcome to our website!' },
    { id: 2, title: 'About', content: 'Information about our organization.' }
  ]
};

module.exports = mockDatabase;
