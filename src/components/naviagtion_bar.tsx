import { MoveLeft } from "lucide-react";

export const Subnavigations = ({
  setisActiveSegment,
  isActiveSegment,
  Subnavs,
}: {
  setisActiveSegment: (label: string) => void;
  isActiveSegment: string;
  Subnavs: string[];
}) => {
  return (
    <section className="flex flex-1 max-w-[22.75rem] col-span-1 flex-col">
      {Subnavs.map((label) => (
        <SubnavigationLinks
          key={label}
          isActiveSegment={isActiveSegment}
          setisActiveSegment={setisActiveSegment}
          label={label}
        />
      ))}
    </section>
  );
};

const SubnavigationLinks = ({
  label,
  setisActiveSegment,
  isActiveSegment,
}: {
  label: string;
  setisActiveSegment: (label: string) => void;
  isActiveSegment: string;
}) => {
  return (
    <button
      onClick={() => setisActiveSegment(label)}
      className="flex items-center w-full"
    >
      {/* Active segment indicator */}
      <div
        className={`h-full w-1 ${isActiveSegment === label ? 'bg-primary rounded-br-sm rounded-tr-sm' : 'bg-transparent'} transition-all duration-300 ease-in-out`}
      />
      
      {/* Button content */}
      <div className="flex w-full items-center gap-1 border-b border-secondary bg-white px-4 py-2.5">
        <div className="flex items-center gap-5">
          <div className="font-inter text-base font-normal text-primary">
            {label}
          </div>
        </div>
      </div>
    </button>
  );
};

export const SubNavigationTitlebar = ({ title }: { title: string }) => {
  return (
    <div className="font-inter text-lg font-medium text-black">
      {title}
    </div>
  );
};

export const Titlebar = ({ title }: { title: string }) => {
  return (
    <button className="flex bg-secondary mb-4 shadow rounded-lg items-center gap-5 px-5 py-3">
      <div className="font-inter text-lg font-semibold text-[#021526]">
        {title}
      </div>
    </button>
  );
};
