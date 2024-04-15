import { CustomSelect, Input } from "@features/ui";
import { IssueLevel, IssueStatus } from "@api/issues.types";
import { useRouter } from "next/router";
import styles from "./issue-filter.module.scss";

const statusOptions = [
  { label: "All", value: null },
  { label: "Unresolved", value: IssueStatus.open },
  { label: "Resolved", value: IssueStatus.resolved },
];

const levelOptions = [
  { label: "All", value: null },
  { label: "Info", value: IssueLevel.info },
  { label: "Warning", value: IssueLevel.warning },
  { label: "Error", value: IssueLevel.error },
];

export function IssueFilter() {
  const router = useRouter();

  const handleFilterChange = (filterType: string, value: string | null) => {
    const query = { ...router.query };

    if (value === null || value.trim() === "") {
      delete query[filterType];
    } else {
      query[filterType] = value;
    }

    router.push({
      pathname: router.pathname,
      query,
    });
  };

  return (
    <div className={styles.filterContainer}>
      {/* <Button className={styles.resolveBtn}>Resolve Selected Issues</Button> */}
      <div className={styles.filterItem}>
        <CustomSelect
          placeholder="Status"
          options={statusOptions}
          onChange={(selectedOption) =>
            handleFilterChange("status", selectedOption?.value || null)
          }
        />
      </div>
      <div className={styles.filterItem}>
        <CustomSelect
          placeholder="Level"
          options={levelOptions}
          onChange={(selectedOption) =>
            handleFilterChange("level", selectedOption?.value || null)
          }
        />
      </div>
      <div className={styles.inputFilter}>
        <Input
          type="text"
          placeholder="Project Name"
          callbackFn={(projectName) =>
            handleFilterChange("project", projectName)
          }
        />
      </div>
    </div>
  );
}
