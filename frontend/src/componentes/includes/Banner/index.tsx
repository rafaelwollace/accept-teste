import estilos from './Banner.module.scss';

const Banner = () => {
  return (<section className={estilos.BannerArea}>
    <div className={estilos.Container}>
      <h1 className={estilos.Titulo}>Leilão</h1>
      <p>ACCEPT Tecnologia.</p>
    </div>
  </section>)
}

export default Banner