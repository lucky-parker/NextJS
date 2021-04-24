//import styles from '../styles/Home.module.css'
import Sidebar from '../../components/sidebar'
import Layout from '../../components/layout'
import Menu from '../../data-dummy/menu.json'
import { useRouter } from 'next/router'

export default function Kategori({ props }) {
  const router = useRouter()
  const { Kategori } = router.query
  return (
<Layout Layoutprops = {props.menu}>
  <div className="row">
    <div className="col-md-8">
      <h3 className="pb-4 mb-4 fst-italic border-bottom">
        Halaman Kategori { Kategori }
      </h3>

     </div>
      <Sidebar />

  </div>
  </Layout>
  )
}
Kategori.getInitialProps = () => {
  return {
    props : {
      menu : Menu,
    }
  }
}