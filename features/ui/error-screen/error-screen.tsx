import { Button } from "@features/ui";
import styles from "./error-screen.module.scss";
import Image from "next/image";

export function ErrorScreen({
  error,
  onTryAgain,
}: {
  error: Error;
  onTryAgain: () => void;
}) {
  return (
    console.log(error),
    (
      <div className={styles.alert} data-testid="projects-error-message">
        <Image
          src="/icons/error-alert.svg"
          alt="Error"
          width={20}
          height={20}
        />
        <div className={styles.content}>
          There was a problem while loading the project data
        </div>

        <Button className={styles.tryAgain} onClick={onTryAgain}>
          Try again
          <Image src="/icons/arrow-right.svg" alt="" width={20} height={20} />
        </Button>
      </div>
    )
  );
}
