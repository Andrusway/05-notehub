import axios from "axios";
import type { Note, NoteFormValues } from "../types/note";

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const api = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});

export async function fetchNotes(
  page: number,
  search: string
): Promise<FetchNotesResponse> {
  const { data } = await api.get("/notes", {
    params: {
      page,
      perPage: 12,
      search,
    },
  });
  return data;
}

export async function createNote(newNote: NoteFormValues): Promise<Note> {
  const { data } = await api.post("/notes", newNote, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return data;
}

export async function deleteNote(id: Note["id"]): Promise<Note> {
  const { data } = await api.delete(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
  });
  return data;
}
