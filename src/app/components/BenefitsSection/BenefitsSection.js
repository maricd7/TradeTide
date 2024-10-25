import React from "react";
import styles from "./BeneftisSection.module.css";
const BenefitsSection = () => {
  return (
    <div className={styles.benefitsContainer}>
      <h2 className={styles.subHeading}>Why TradeTide ? </h2>
      <div className={styles.benefitsRow}>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Boost <span className="text-green-500">Efficiency</span>
          </h3>
          <p className="text-gray-500">
            Automate repetitive tasks like inventory tracking, order management,
            and invoicing. Reduce errors and free up your time for what matters
            most.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Tailored for <span className="text-green-500">Shop Owners</span>
          </h3>
          <p className="text-gray-500">
            Whether you run a local store or a chain, TradeTide adapts to your
            business size and needs. Manage products, track sales, and
            communicate with your team from one easy-to-use platform.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-bold">
            Secure & <span className="text-green-500">Reliable </span>
          </h3>
          <p className="text-gray-500">
            With state-of-the-art security measures, your business data is
            always protected. Rest easy knowing your operations are safe with
            TradeTide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
