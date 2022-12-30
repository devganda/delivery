import styles from "../../styles/Home.module.css";
import {SearchInput} from "../../components/SearchInput/index";
import {Banner} from "../../components/Banner/index";

const Home = ()=>{

    const handleSearchInput = (searchValue: string)=>{
        console.log(searchValue);
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.headerTop}>
                    <div className={styles.headerTopLeft}>
                        <div className={styles.headerTitle}>
                            Seja Bem Vindo(a) ✋
                        </div>
                        <div className={styles.headerSubTitle}>
                            O que deseja para hoje?
                        </div>
                    </div>
                    <div className={styles.headerTopRight}>
                        <div className={styles.menuButton}>
                            <div className={styles.menuButtonLine}></div>
                            <div className={styles.menuButtonLine}></div>
                            <div className={styles.menuButtonLine}></div>
                        </div>
                    </div>
                </div>
                <div className={styles.headerBottom}>
                    <SearchInput
                        mainColor="#FB9400"
                        onSearch={handleSearchInput}
                    />
                </div>
            </header>

            <Banner/>
            
        </div>
    );
}

export default Home;