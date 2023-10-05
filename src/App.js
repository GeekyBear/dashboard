import styles from "./App.module.css";
import icon from "./assets/icon.png";
import chart from "./assets/chart.png";
function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sideBarContainer}>
        <h2>DASHBOARD</h2>
        <h5>Bienvenido Ezequiel</h5>

        <button className={styles.selectedButton}>
          <div>
            <img src={icon} className={styles.icon} alt="" />
          </div>
          <p className={styles.buttonTitle}>Clientes</p>
        </button>

        <button className={styles.button}>
          <div className={styles.iconBG}>
            <img src={chart} className={styles.icon} alt="" />
          </div>
          <p className={styles.buttonTitle}>Ordenes</p>
        </button>

        <button className={styles.button}>
          <div className={styles.iconBG}>
            <img src={chart} className={styles.icon} alt="" />
          </div>
          <p className={styles.buttonTitle}>Mis ordenes</p>
        </button>
      </div>
      <div className={styles.mainContainer}>
        <h4>Nombre de tabla</h4>
        <div className={styles.table}>
          <div className={styles.tableHeader}>
            <div className={styles.firstColumn}>
              <p>Columna 1</p>
            </div>
            <div className={styles.column}>
              <p>Columna 2</p>
            </div>
            <div className={styles.column}>
              <p>Columna 3</p>
            </div>
            <div className={styles.column}>
              <p>Columna 4</p>
            </div>
            <div className={styles.column}>
              <p>Columna 5</p>
            </div>
          </div>
          <div className={styles.tableRow}>
            <div className={styles.firstColumn}>
              <p>Dato Cliente</p>
            </div>
            <div className={styles.column}>
              <p>Dato Cliente</p>
            </div>
            <div className={styles.column}>
              <p>Dato Cliente</p>
            </div>
            <div className={styles.column}>
              <p>Dato Cliente</p>
            </div>
            <div className={styles.column}>
              <p>Dato Cliente</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
