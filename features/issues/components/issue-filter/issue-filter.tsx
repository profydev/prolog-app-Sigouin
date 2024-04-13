import { CustomSelect, Input } from "@features/ui";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useRouter } from "next/router";
import styles from "./issue-filter.module.scss";

interface OptionType {
  value: string;
  label: string;
}

const statusOptions = [
  { label: "Unresolved", value: IssueStatus.open },
  { label: "Resolved", value: IssueStatus.resolved },
];

const levelOptions = [
  { label: "Info", value: IssueLevel.info },
  { label: "Warning", value: IssueLevel.warning },
  { label: "Error", value: IssueLevel.error },
];

export function IssueFilter() {
  const router = useRouter();

  const handleStatusChange = (selectedOption: OptionType | null) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, status: selectedOption?.value || null },
    });
  };

  const handleLevelChange = (selectedOption: OptionType | null) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, level: selectedOption?.value || null },
    });
  };

  const handleProjectNameChange = (projectName: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, project: projectName || null },
    });
  };

  return (
    <div className={styles.filterContainer}>
      {/* <Button className={styles.resolveBtn}>Resolve Selected Issues</Button> */}
      <div className={styles.filterItem}>
        <CustomSelect
          placeholder="Status"
          options={statusOptions}
          onChange={handleStatusChange}
        />
      </div>
      <div className={styles.filterItem}>
        <CustomSelect
          placeholder="Level"
          options={levelOptions}
          onChange={handleLevelChange}
        />
      </div>
      <div className={styles.inputFilter}>
        <Input
          type="text"
          placeholder="Project Name"
          callbackFn={handleProjectNameChange}
        />
      </div>
    </div>
  );
}
