//component for rendering landing page elements

"use client";
import React from "react";
import { MainHeading, Paragraph, Button } from "../ui";
import BenefitsSection from "../BenefitsSection/BenefitsSection";
import styles from "./LandingHero.module.css";
import { useRouter } from "next/navigation";

const LandingHero = () => {
  const router = useRouter();
  const handleTryNowButton = () => {
    router.push("/login");
  };
  return (
    <main className={styles.mainSection}>
      <div className={styles.heroInfoContainer}>
        <div className={styles.heroTextContainer}>
          <MainHeading text="TradeTide" />
          <Paragraph
            text="Managing a shop has never been easier.TradeTide is a comprehensive shop
  management tool designed to streamline operations, so you can focus on
  growing your business."
          />
          <Button text="Try Now" onClick={() => handleTryNowButton()} />
        </div>
      </div>
      <BenefitsSection />
    </main>
  );
};

export default LandingHero;
