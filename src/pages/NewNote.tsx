import { NoteForm } from '../components/NoteForm';
import type { NewNoteProps } from '../types';
// страница создания новой заметки
export const NewNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">Создайте заметку</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};
