import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <div className={css.greetingBlock}>
        <h1 className={css.greetingTitle}>
          We are happy to see You on our website!
        </h1>
        <p className={css.secondaryText}>
          This web service provides necessary contact-book functionality, so you
          can stay in touch with everyone!
        </p>
      </div>
    </>
  );
}
