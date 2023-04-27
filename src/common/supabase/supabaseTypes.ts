export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      pictures: {
        Row: {
          created_at: string | null;
          id: string;
          userID: string;
        };
        Insert: {
          created_at?: string | null;
          id: string;
          userID: string;
        };
        Update: {
          created_at?: string | null;
          id?: string;
          userID?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
