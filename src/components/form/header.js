import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  const [isActive, setIsActive] = React.useState(false);

  const nextStep = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <div className={styles.dots}>
      {[...Array(4)].map((value, idx) => {
        return (
          <React.Fragment key={idx}>
            <div className={styles.dot}>
              <div
                className={isActive ? styles.active : null}
                onClick={nextStep}
              />
            </div>
            {idx < 3 && <span className={styles.line} />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Header;
