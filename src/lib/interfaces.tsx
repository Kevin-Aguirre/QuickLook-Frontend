export interface Phrase {
    id: number,
    dateAdded: string,
    phrase: string,
    summary: string
}



export interface PhraseSet {
    phraseSetId: number;
    phraseSetName: string;
    dateAdded: string; // or Date
    phrases: Phrase[]
}

export interface newPhraseSet {
  phraseSetName: string;
  user: User; // or Date
}
  
export interface User {
  userId: number;
  email: string;
  passwordHash: string;
  phraseSets: PhraseSet[];
}

export interface PhraseDTO {
  phrase: String;
  summary: String;
  dateAdded: Date;
  userId: Number;
  setId: Number;
}
