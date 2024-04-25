import React from 'react'
import CreateForm from '../CreateForm/CreateForm'
import DataViewFile from '../DataViewFile/DataViewFile'
import { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import EditForm from '../EditForm/EditForm'



const CrudFrorm = () => {
    const [data, setData] = useState([]);

    const handleCreate = (newData) => {
        setData([...data, newData]);
      };

  
    const handleEdit = (editedData) => {
      // Handle edit operation
      const updatedData = data.map(item => (item.id === editedData.id ? editedData : item));
      setData(updatedData);
    };
  
    const handleDelete = (id) => {
      // Handle delete operation
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
    };
  
  
  return (
    <>
   <Container>
    <Row>
        <Col md={4}>
        <CreateForm onCreate={handleCreate} />
        </Col>
        <Col md={4}>
        <EditForm data={data} onDelete={handleDelete} onEdit={handleEdit} />
        </Col>
        <Col md={4}>
        <DataViewFile data={data}/>
        </Col>
    </Row>
   </Container>
    </>
  )
}

export default CrudFrorm
