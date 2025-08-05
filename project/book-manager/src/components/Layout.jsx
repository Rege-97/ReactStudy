import styles from  './Layout.module.css'
import Navbar from './NavBar'

const Layout = ({children}) =>{
    return(
        <div className={styles.container}>
            <Navbar/>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default Layout