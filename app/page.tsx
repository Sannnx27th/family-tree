"use client";

import { useState } from "react";
import styles from "./page.module.css";

type FamilyTree = {
  kamu: string;
  saudara: string[];
  ayah: string;
  ibu: string;
  kakek_ayah: string;
  nenek_ayah: string;
  kakek_ibu: string;
  nenek_ibu: string;
};

export default function Home() {
  const [family] = useState<FamilyTree>({
    kamu: "Ihsan Maulana",
    saudara: ["Ahmad Ridwan", "Wahyu Hidayat", "Abdul Mufid", "Muazin", "Rizki Fajar", "Irfan Hakim", "Syifa Putri Aulia"],
    ayah: "Kliwon",
    ibu: "Tarmini",
    kakek_ayah: "Wahyudi (Ayah)",
    nenek_ayah: "Karnoah (Ayah)",
    kakek_ibu: "Kakek (Ibu)",
    nenek_ibu: "Nenek (Ibu)",
  });

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Family Tree</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Saya</h2>
        <p>{family.kamu}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Saudara Kandung</h2>
        <ul className={styles.list}>
          {family.saudara.map((s, index) => (
            <li key={index}>{s}</li>
          ))}
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Orang Tua</h2>
        <p>Ayah: {family.ayah}</p>
        <p>Ibu: {family.ibu}</p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kakek-Nenek</h2>
        <p>
          {family.kakek_ayah} & {family.nenek_ayah}
        </p>
        <p>
          {family.kakek_ibu} & {family.nenek_ibu}
        </p>
      </section>
    </main>
  );
}
