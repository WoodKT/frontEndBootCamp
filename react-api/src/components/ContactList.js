import React from 'react';
import Button from 'react-bootstrap/Button';

export default function ContactList() {
  return (
    <>
      <Button href="/contactForm" type='button'>Form</Button>{' '}
      <Button href="/contactUpdate" type='button'>Update</Button>{' '}
      <Button href="/contact" type='button'>Contact Table</Button>
    </>  
  );
}