import { Modal, Form, Stack, Row, Col, Button } from 'react-bootstrap';
import type { EditTagsModalProps } from '../types';
import { useEffect, useRef } from 'react';

export const EditTagsModal = ({
  availableTags,
  handleClose,
  show,
  onUpdateTag,
  onDeleteTag,
}: EditTagsModalProps) => {
  const editInputRef = useRef(null);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map(tag => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    ref={editInputRef}
                    type="text"
                    value={tag.label}
                    onChange={e => onUpdateTag(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    onClick={() => onDeleteTag(tag.id)}
                    variant="outline-danger"
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
