import React from "react";
import styles from "./loading-indicator.module.scss";
import Image from "next/image";

export function LoadingIndicator() {
  return (
    <div className={styles.loadingContainer}>
      <Image
        className={styles.loadingCircle}
        src="/icons/loading-circle.svg"
        alt="Loading"
        width={64}
        height={64}
        data-testid="loading-indicator"
      />
    </div>
  );
}
