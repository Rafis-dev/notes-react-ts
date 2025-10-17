export interface NoteData {
  title: string;
  markdown: string;
  tags: Tag[];
}

export interface RawNoteData {
  title: string;
  markdown: string;
  tagIds: string[];
}

export interface Note extends NoteData {
  id: string;
}

export interface RawNote extends RawNoteData {
  id: string;
}

export interface Tag {
  id: string;
  label: string;
}

export interface NoteListProps {
  availableTags: Tag[];
  notes: SimplifiedNote[];
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
}

export interface SimplifiedNote {
  tags: Tag[];
  title: string;
  id: string;
}

export interface EditTagsModalProps {
  show: boolean;
  availableTags: Tag[];
  handleClose: () => void;
  onDeleteTag: (id: string) => void;
  onUpdateTag: (id: string, label: string) => void;
}

export interface NoteProps {
  onDelete: (id: string) => void;
}

export interface NoteLayoutProps {
  notes: Note[];
}

export interface NewNoteProps {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export interface EditNoteProps {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}

export interface NoteFormProps extends Partial<NoteData> {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
}
