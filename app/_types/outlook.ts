export interface outlookParams {
  email?: string;
  search?: string;
  readState?: string;
  startDate?: string;
  endDate?: string;
  importance?: string;
  hasAttachments?: string;
  page: number;
  limit: number;
  orderBy?: number;
}

export interface callbackParams {
  code: string;
  state: string;
}

export interface EmailAddress {
  name: string;
  address: string;
}

export interface Recipient {
  emailAddress: EmailAddress;
}

export interface From {
  emailAddress: EmailAddress;
}

export interface EmailMessage {
  "@odata.etag": string;
  id: string;
  receivedDateTime?: string; // ISO 8601 format
  sentDateTime?: string;
  hasAttachments: boolean;
  subject: string;
  bodyPreview: string;
  importance: "low" | "normal" | "high"; // Assuming these are the only values
  isRead: boolean;
  from: From;
  toRecipients?: Recipient[];
}

export type EmailMessages = EmailMessage[];
