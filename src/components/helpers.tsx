import { FC, ReactNode } from "react";

export const SubSectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="text-m font-medium mb-5">{children}</h1>;
};

export const SectionHeader: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 className="text-xl font-bold mb-5">{children}</h1>;
};

export const Section: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mt-8">{children}</div>;
};

export const SectionContent: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="p-10 border rounded-md border-slate-300 border-solid">
      {children}
    </div>
  );
};

export const ControlWrapper: FC<{
  headerText: string;
  children: ReactNode;
}> = ({ children, headerText }) => {
  return (
    <div className="mb-10">
      <SubSectionHeader>{headerText}</SubSectionHeader>
      {children}
    </div>
  );
};
