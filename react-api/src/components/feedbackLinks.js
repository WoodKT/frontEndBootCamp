import React from 'react';
import Button from 'react-bootstrap/Button';

export default function FeedbackLinks() {
  return (
    <>
      <Button variant='success' href="/feedbackForm" type='button'>Form</Button>{' '}
      <Button variant='success' href="/feedbackTable" type='button'>Feedback Table</Button>
    </>  
  );
}