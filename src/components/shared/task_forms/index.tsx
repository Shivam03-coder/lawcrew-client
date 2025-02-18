import CompanyForm from "./company.form";
import CorporateForm from "./corporate.form";
import HearingForm from "./hearing.form";
import IntellectualForm from "./intellectual.form";
import LitigationCaseForm from "./litigation-case.form";
import MeetingForm from "./meeting.form";
import PersonForm from "./person.form";
import ReminderForm from "./reminder.form";
import TaskForm from "./task.form";

const formComponents: Record<string, React.ComponentType> = {
  companyform: CompanyForm,
  personform: PersonForm,
  corporateform: CorporateForm,
  litigationform: LitigationCaseForm,
  hearingform: HearingForm,
  intellectualform: IntellectualForm,
  taskform: TaskForm,
  meetingform: MeetingForm,
  reminderform: ReminderForm,
};

export default formComponents;
