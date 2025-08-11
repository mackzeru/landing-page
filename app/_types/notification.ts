export interface NotificationResponse {
  docs: NotificationType[];
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  nextPage: null;
  page: number;
  pagingCounter: number;
  prevPage: null;
  totalDocs: number;
  totalPages: number;
  totalUnread: number;
}

export interface NotificationType {
  _id: string;
  userId: string;
  organizationId: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  type:
    | "userInvited"
    | "invitationAccepted"
    | "passwordChanged"
    | "subscriptionUpdated"
    | "creditsLow"
    | "subscriptionFailed"
    | "integrationConnected"
    | "candidateAdded"
    | "candidateAssigned"
    | "candidateReplied"
    | "emailOpened"
    | "linkClicked"
    | "positiveReply"
    | "interviewScheduled"
    | "interviewCancelled"
    | "interviewRescheduled"
    | "offerExtended"
    | "offerAccepted"
    | "campaignStarted"
    | "emailSequenceSent"
    | "engagementMetrics"
    | "campaignCompleted"
    | "sourcingCompleted"
    | "integrationFailed"
    | "syncFailed"
    | "reportGenerated";
  url?: string;
  meta?: Record<string, any>;
}

export interface NotificationPreferenceType {
  _id?: string;
  userId: string;
  email: {
    newCandidates: boolean;
    candidateResponses: boolean;
    interviewScheduling: boolean;
    weeklyDigest: boolean;
  };
  inApp: {
    enableNotifications: boolean;
    notificationSound: boolean;
  };
  admin?: {
    allowRoleBasedNotifications: boolean;
  };
  createdAt?: string;
  updatedAt?: string;
}
