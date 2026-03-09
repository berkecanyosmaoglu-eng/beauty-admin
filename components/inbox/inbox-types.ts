export type InboxChat = {
    id: string;
    name: string;
    initials: string;
    message: string;
    time: string;
    unread: number;
    active: boolean;
    tag: string;
    channel: string;
  };
  
  export type InboxMessage = {
    from: "me" | "them";
    text: string;
    time: string;
  };
  
  export type InboxCustomerCard = {
    customerName: string;
    customerPhone: string;
    labels: string[];
    interestTitle: string;
    interestDescription: string;
    nextAppointmentTitle: string;
    nextAppointmentDescription: string;
    lastActivity: string;
    botNote: string;
  };
  
  export type InboxVariant = "whatsapp" | "instagram";
  
  export type InboxConfig = {
    variant: InboxVariant;
    title: string;
    subtitle: string;
    statusText: string;
    accent: "green" | "pink";
    activeChannelLabel: string;
    customerName: string;
    customerInitials: string;
    customerStatus: string;
    quickActions: string[];
    chats: InboxChat[];
    messages: InboxMessage[];
    customerCard: InboxCustomerCard;
  };