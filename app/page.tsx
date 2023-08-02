"use client";
import styles from "./page.module.css";
import Counter from "./components/Counter";
import ListStats from "./components/ListStats";

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>Testing Derby</h1>
      </header>
      <Counter />
      <ListStats />
    </main>
  );
}
