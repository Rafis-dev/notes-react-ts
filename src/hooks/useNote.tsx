import { useOutletContext } from 'react-router-dom';
import type { Note } from '../types';

export const useNote = () => {
  return useOutletContext<Note>();
};
