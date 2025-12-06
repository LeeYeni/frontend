import { create } from "zustand";

interface FileStoreState {
  file: File | null;
  setFile: (file: File | null) => void;
}

export const useFileStore = create<FileStoreState>((set) => ({
  file: null,
  setFile: (file: File | null) => set({ file })
}));