import wordsJson from "@/data/words.json";

export type Word = {
  borrowed: string[];
  alternatives: string[];
  category?: "alternative" | "rare";
  note?: string;
  status: "draft" | "reviewed";
};

export const words = wordsJson as Word[];
