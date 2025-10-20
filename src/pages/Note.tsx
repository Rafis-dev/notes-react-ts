import { Badge, Button, Col, Row, Stack } from 'react-bootstrap';
import { useNote } from '../hooks/useNote';
import { Link, useNavigate } from 'react-router-dom';
import ReactMarkDown from 'react-markdown';
import type { NoteProps } from '../types';

export const Note = ({ onDelete }: NoteProps) => {
  const note = useNote();
  const navigate = useNavigate();

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack
              gap={1}
              direction="horizontal"
              className="flex-wrap mb-3 mb-sm-0"
            >
              {note.tags.map(tag => (
                <Badge className="text-truncate" key={tag.id}>
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Редактировать</Button>
            </Link>
            <Button
              onClick={() => {
                onDelete(note.id);
                navigate('/', { replace: true });
              }}
              variant="outline-danger"
            >
              Удалить
            </Button>
            <Link to="/">
              <Button variant="outline-secondary">Назад</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkDown>{note.markdown}</ReactMarkDown>
    </>
  );
};
