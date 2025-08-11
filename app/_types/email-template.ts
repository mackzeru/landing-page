export interface EmailTemplateResponse {
  templates: EmailTemplateType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
}

export interface EmailTemplateType {
  _id: string;
  userId: string;
  emailTemplateId: string;
  templateName: string;
  subject: string;
  content: string;
  deleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  emailTemplateType: string;
}
