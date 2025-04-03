import { create } from "zustand";

interface AgentInputStore {
  id: string;
  input: string;
  setInput: (input: string) => void;
  resetInput: () => void;
  setId: (id: string) => void;
  resetId: () => void;
  resetAll: () => void;
}

export const useAgentInputStore = create<AgentInputStore>((set) => ({
  input: "",
  setInput: (input) => set({ input }),
  resetInput: () => set({ input: "" }),
  id: "",
  setId: (id) => set({ id }),
  resetId: () => set({ id: "" }),
  resetAll: () => set({ input: "", id: "" }),
}));
