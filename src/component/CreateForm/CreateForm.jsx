import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './CreateForm.css'

const CreateForm = ({ onCreate}) => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";
    if (name === "contact" && !/^\d*$/.test(value)) {
        error = "Contact number must contain only digits";
      }
      setErrors({ ...errors, [name]: error });
     setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.contact) {
        alert("Please fill all the data");
        return;
      }
      onCreate({ ...formData, id: Date.now() });
      setFormData({ name: '', email: '', contact: '' }); 
  };

  return (
    <div>
    <h2>Create Form</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" value={formData.name}  pattern="^[^\d]+$"onChange={handleChange} className='mb-2'/>
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} className='mb-2' />
      </Form.Group>
      <Form.Group controlId="formContact">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="tel"  pattern="[0-9]*" maxLength={10} name="contact" value={formData.contact} onChange={handleChange} className='mb-2'/>
        {errors.contact && <p className="error">{errors.contact}</p>}
      </Form.Group>
      <Button  type="submit" className='mt-2 mb-4 submit-btn'>
        Submit
      </Button>
    </Form>
  </div>

  )
}

export default CreateForm;