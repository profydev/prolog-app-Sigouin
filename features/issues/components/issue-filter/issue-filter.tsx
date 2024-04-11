import { CustomSelect, Input, Button } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { IssueLevel, IssueStatus } from "@api/issues.types";

const statusOptions = [
  { label: "Open", value: IssueStatus.open },
  { label: "Resolved", value: IssueStatus.resolved },
];

const levelOptions = [
  { label: "Info", value: IssueLevel.info },
  { label: "Warning", value: IssueLevel.warning },
  { label: "Error", value: IssueLevel.error },
];

export function IssueFilter() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterContent}>
        <Button className={styles.resolveBtn}>Resolve Selected Issues</Button>
        <div className={styles.filters}>
          <CustomSelect
            className={styles.selectFilter}
            placeholder="Status"
            options={statusOptions}
          />
          <CustomSelect
            className={styles.selectFilter}
            placeholder="Level"
            options={levelOptions}
          />
          <Input
            className={styles.inputFilter}
            type="text"
            placeholder="Project Name"
          ></Input>
        </div>
      </div>
    </div>
  );
}
