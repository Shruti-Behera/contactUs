import React, { useState } from 'react';
import { Table,Form } from 'react-bootstrap';

const DataViewFile = ({ data}) => {
  const [editMode, setEditMode] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  return (
    <div>
      <h2>Data View</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{editMode === item.id ? (
                <Form.Control type="text" name="name" value={selectedItem.name} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
              ) : (
                item.name
              )}</td>
              <td>{editMode === item.id ? (
                <Form.Control type="email" name="email" value={selectedItem.email} onChange={(e) => setSelectedItem({ ...selectedItem, email: e.target.value })} />
              ) : (
                item.email
              )}</td>
              <td>{editMode === item.id ? (
                <Form.Control type="text" name="contact" value={selectedItem.contact} onChange={(e) => setSelectedItem({ ...selectedItem, contact: e.target.value })} />
              ) : (
                item.contact
              )}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default DataViewFile;