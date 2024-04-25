import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const EditForm = ({ data, onDelete, onEdit }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleEdit = (item) => {
    setSelectedItemId(item.id);
    setFormData(item);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    onEdit(formData);
    setSelectedItemId(null);
    setFormData({});
  };

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h2>Edit Form</h2>
      {data.map(item => (
        <div key={item.id} className="mb-3">
          {selectedItemId === item.id ? (
            <Form onSubmit={handleUpdate}>
              <Form.Group controlId={`name-${item.id}`}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId={`email-${item.id}`}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId={`contact-${item.id}`}>
                <Form.Label>Contact</Form.Label>
                <Form.Control type="text" name="contact" value={formData.contact} onChange={handleChange} />
              </Form.Group>
              <Button variant="success" type="submit" className='mx-2'>Save</Button>
              <Button variant="danger" onClick={() => setSelectedItemId(null)}>Cancel</Button>
            </Form>
          ) : (
            <>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Contact:</strong> {item.contact}</p>
              <Button variant="primary" onClick={() => handleEdit(item)} className='mx-2'>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default EditForm;
