import { useOutletContext } from 'react-router-dom';
import type { Note } from '../App';

export const useNote = () => {
  return useOutletContext<Note>();
};
