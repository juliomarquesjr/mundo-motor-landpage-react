import Link from "next/link";

function AboutUs_2() {
  return (
    <>
      {/* <!-- About us --> */}
      <section className="content-inner about-wraper-1">
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
                  Valor promocional de <s>R$999,00</s> por apenas R$199,90!
                </h2>
                <p>
                  Bem vindo ao Nettverkt o curso que vai acelerar suas vendas
                </p>
              </div>
              <ul className="list-check primary m-b30">
                <li>Suporte direto comigo para tirar suas dúvidas</li>
                <li>5 Aulas explicativas online com 5 E-Books em PDF</li>
                <li>
                  Atualizações de conteúdos e bônus semanalmente no WhatsApp
                </li>
                <li>Certificado de conclusão do curso</li>
              </ul>

              <a
                href="https://app-vlc.hotmart.com/products/bw/manage/1969489"
                target="_blank"
                className="btn btn-primary rounded-xl gradient"
              >
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
