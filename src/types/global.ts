export interface MetaProps {
  title: string;
  description?: string;
  keywords?: string;
  author?: string;
  robots?: string;
}

export interface UserData {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

export enum TaskStatus {
  ToDo = "To Do",
  OnGoing = "On Going",
  Completed = "Completed",
}

export enum ClientContactCategory {
  "Full-Time" = "Full-Time",
  "Part-Time" = "Part-Time",
  Contractor = "Contractor",
  Freelancer = "Freelancer",
}
export interface ClientContactDetails {
  id: string;
  person: string;
  name: string;
  jobTitle: string;
  companyReference: string;
  subCategory: string;
  additionalIdType: string;
  additionalIdValue: string;
  category: "Full-Time" | "Part-Time" | "Contractor" | "Freelancer";
  email: string;
  phoneNumber: string;
  city: string;
  mobile: string;
  country: string;
  relatedTo: string;
}

export enum PersonContactSubCategory {
  IT = "IT",
  Management = "Management",
  Analytics = "Analytics",
  Design = "Design",
  Operations = "Operations",
}

export interface PersonContactsDetails {
  person: string;
  name: string;
  jobTitle: string;
  companyReference: string;
  subCategory: "IT" | "Management" | "Analytics" | "Design" | "Operations";
  additionalIdType: string;
  additionalIdValue: string;
  category: string;
  email: string;
  phoneNumber: string;
}

export enum CompanyCategory {
  Technology = "Technology",
  Energy = "Energy",
  Finance = "Finance",
  Automobile = "Automobile",
  Healthcare = "Healthcare",
  Education = "Education",
  Agriculture = "Agriculture",
  Retail = "Retail",
  Travel = "Travel",
  Construction = "Construction",
}

export enum CompanySubCategory {
  Software = "Software",
  Electronics = "Electronics",
  Banking = "Banking",
  Pharma = "Pharma",
  ELearning = "E-Learning",
  Farming = "Farming",
  ECommerce = "E-Commerce",
  Tourism = "Tourism",
  Infrastructure = "Infrastructure",
  Renewable = "Renewable",
  Manufacturing = "Manufacturing",
}

export enum CompanyLegalType {
  LLC = "LLC",
  Corp = "Corp",
  Inc = "Inc",
  LLP = "LLP",
  PLC = "PLC",
  SoleProprietorship = "Sole Proprietorship",
  Partnership = "Partnership",
}

export interface CompanyContactDetails {
  id: string;
  companyName: string;
  nickname: string;
  category: string;
  subCategory:
    | "Software"
    | "Manufacturing"
    | "Electronics"
    | "Banking"
    | "Pharma"
    | "E-Learning"
    | "Farming"
    | "E-Commerce"
    | "Tourism"
    | "Infrastructure"
    | "Renewable";
  legalType:
    | "LLC"
    | "Corp"
    | "Inc"
    | "LLP"
    | "Inc"
    | "PLC"
    | "Partnership"
    | "Sole Proprietorship";
  nationality: string;
  lawyer: string;
  capital: number;
  capitalCurrency: string;
  registrationNumber: string;
  registrationTaxNumber: string;
}

export enum CaseStatus {
  Ongoing = "Ongoing",
  Resolved = "Resolved",
  Pending = "Pending",
}

export enum PracticeArea {
  Civil = "Civil",
  Criminal = "Criminal",
  Tax = "Tax",
  Labour = "Labour",
  Property = "Property",
  Family = "Family",
}

export interface LitigationCaseTypes {
  id: string;
  name: string;
  practiceArea: "Criminal" | "Civil" | "Tax" | "Labour" | "Property" | "Family";
  status: "Ongoing" | "Resolved" | "Pending";
  clientName: string;
  clientPosition: string;
  requestedBy: string;
  assignedTeam: string;
  assignee: string;
  arrivalDate: string;
}

export interface HearingCaseTypes {
  id: string;
  day: string;
  hearingDate: string;
  name: string;
  hearingType: "Criminal" | "Civil" | "Tax" | "Labour" | "Property" | "Family";
  stage: string;
  assignee: string;
  courtReferences: string;
  importantDevelopment: string;
  courtName: string;
}

export interface CorporateMatterTypes {
  id: string;
  assignee: string;
  clientName: string;
  name: string;
  practiceArea: "Criminal" | "Civil" | "Tax" | "Labour" | "Property" | "Family";
  workflowStatus: "Pending" | "Ongoing" | "Resolved";
  importantDevelopment: string;
  requestedBy: string;
  value: string;
  assignedTeam: string;
  arrivalDate: string;
  dueDate: string;
  effectiveEffort: string;
  filedOn: string;
}
export enum FileStatus {
  Approved = "Approved",
  UnderReview = "Under Review",
  Finalized = "Finalized",
  Draft = "Draft",
  Reviewed = "Reviewed",
  Pending = "Pending",
}
export enum fileType {
  folder = "folder",
  file = "file",
}
export interface FileItem {
  id: string;
  name: string;
  type: "folder" | "file";
  status?:
    | "Approved"
    | "Under Review"
    | "Finalized"
    | "Draft"
    | "Reviewed"
    | "Pending";
  keywords?: string;
  fileSize?: string;
  addedOn: string;
  addedBy: string;
  modifiedBy: string;
  modifiedOn: string;
}

export enum ReminderStatus {
  Completed = "Completed",
  Scheduled = "Scheduled",
  Overdue = "Overdue",
  "In Progress" = "In Progress",
  Upcoming = "Upcoming",
  Pending = "Pending",
}

export interface Reminder {
  id: string;
  remindOn: string;
  time: string;
  summary: string;
  type: string;
  status:
    | "Completed"
    | "Scheduled"
    | "In Progress"
    | "Overdue"
    | "Upcoming"
    | "Pending";
  remindUser: string;
  relatedMatter: string;
  relatedContract: string;
  relatedCompany: string;
  relatedPerson: string;
  relatedTask: string;
}

export interface TaxPayment {
  id: number;
  payer: string;
  reference: string;
  taxType: string;
  amount: string;
  dueDate: string;
  status: "Pending" | "Completed" | "Overdue";
}

export enum TaxPaymentStatusTypes {
  Pending = "Pending",
  Completed = "Completed",
  Overdue = "Overdue",
}
