export interface Fieldset {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  colSpan?: number;
}

export interface FormData {
  [key: string]: string;
}

export type FormState = "idle" | "sending" | "success" | "error";