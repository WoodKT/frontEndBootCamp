import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <div className='main'>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Questions and Concerns</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    </div>
  );
}

export default Contact;