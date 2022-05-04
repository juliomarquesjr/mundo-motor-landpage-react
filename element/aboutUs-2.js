import Link from "next/link";

function AboutUs_2() {
  return (
    <>
      {/* <!-- About us --> */}
      <section
        className="content-inner about-wraper-1"
        style={{
          backgroundImage: "url(images/background/bg15.png)",
          backgroundSize: "contain",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-lg-6 m-b30 wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.2s"
            >
              <div className="dz-media left">
                <img src="images/about/pic1_2.jpg" alt="" />
              </div>
            </div>
            <div
              className="col-lg-6 m-b30 wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.4s"
            >
              <div className="section-head style-3">
                <h6 className="sub-title text-primary bgl-primary m-b15">
                  Plano Hastighet
                </h6>
                <h2 className="title m-b20">
                  Valor promocional de <s>R$499,00</s> por apenas R$49,90!
                </h2>
                <p>
                  Bem vindo a uma experiência Racing, que vai acelerar suas
                  vendas.
                </p>
              </div>
              <ul className="list-check primary m-b30">
                <li>
                  Suporte com equipe especializada para tirar suas duvidas
                </li>
                <li>
                  Náo gostou? Sem problema, seu dinheiro de volta em até 7 dias
                </li>
                <li>Aulas explicativas em video com apostilas em PDF</li>
                <li>Atualizações de conteúdos por até 1 ano</li>
              </ul>
              
                <a href="https://app-vlc.hotmart.com/products/bw/manage/1969489" target="_blank" className="btn btn-primary rounded-xl gradient">
                  Adquira hoje mesmo!
                </a>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs_2;
