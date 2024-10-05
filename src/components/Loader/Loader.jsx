import css from "./Loader.module.css";
import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className={css.loaderContainer}>
      <Grid
        className={css.loader}
        visible={true}
        height="80"
        width="80"
        color="#fafafa"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
