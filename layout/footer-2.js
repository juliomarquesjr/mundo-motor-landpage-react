function Footer2() {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer
        className="site-footer style-2"
        id="footer"
        style={{ backgroundImage: "url(images/background/bg4.png)" }}
      >
        <div className="container">
          <div
            className="dlab-subscribe style-1 wow fadeInUp"
            data-wow-duration="2s"
            data-wow-delay="0.2s"
          >
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h2 className="title">Inscreva-se para receber novidades</h2>
              </div>
              <div className="col-lg-5">
                <form
                  className="dzSubscribe"
                  action="script/mailchamp.php"
                  method="post"
                >
                  <div className="dzSubscribeMsg"></div>
                  <div className="form-group">
                    <div className="input-group">
                      <input
                        name="dzEmail"
                        required="required"
                        type="email"
                        className="form-control"
                        placeholder="Digite o seu email"
                      />
                      <div className="input-group-addon">
                        <button
                          name="submit"
                          value="Submit"
                          type="submit"
                          className="btn btn-primary gradient fa fa-paper-plane-o"
                        ></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.2s"
              >
                <div className="widget widget_about">
                  <div className="footer-logo">
                    <a href="#">
                      <img
                        src="images/logobranco.png"
                        alt="Logo do Rodapé Empreender no Mundo Motor"
                      />
                    </a>
                  </div>
                  <div className="widget widget_getintuch">
                    <ul>
                      <li>
                        <i className="fa fa-phone gradient"></i>
                        <span>
                          +91 123-456-7890
                          <br />
                          +91 987-654-3210
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-envelope gradient"></i>
                        <span>
                          info@example.com <br />
                          info@example.com
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-map-marker gradient"></i>
                        <span>Marmora Road Chi Minh City, Vietnam</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-2 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.4s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Our links</h5>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">About Us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Services</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Team</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Blog</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-3 col-sm-6 wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.6s"
              >
                <div className="widget widget_services">
                  <h5 className="footer-title">Curta meu Facebook</h5>
                  <div
                    class="fb-page"
                    data-href="https://www.facebook.com/eufranme"
                    data-tabs=""
                    data-width=""
                    data-height=""
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true"
                  >
                    <blockquote
                      cite="https://www.facebook.com/eufranme"
                      class="fb-xfbml-parse-ignore"
                    >
                      <a href="https://www.facebook.com/eufranme">EuFranMe</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer bottom part --> */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-7 text-left">
                <span className="copyright-text">
                  Desenvolvido por{" "}
                  <a href="https://maximweb.com.br/" target="_blank">
                    Maxim Web
                  </a>{" "}
                  © 2021. Todos os direitos reservados.
                </span>
              </div>
              <div className="col-lg-6 col-md-5 text-right">
                <div className="dlab-social-icon">
                  <ul>
                    {/* <li><a className="fa fa-facebook" href="https://www.facebook.com/"></a></li> */}
                    <li>
                      <a
                        className="fa fa-instagram"
                        href="https://www.instagram.com/eufranme"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fa fa-facebook"
                        href="https://www.instagram.com/eufranme"
                        target="_blank"
                      ></a>
                    </li>
                    <li>
                      <a
                        className="fa fa-linkedin"
                        href="https://www.linkedin.com/in/franciele-ferreira-b110731a4"
                        target="_blank"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer End --></footer> */}
    </>
  );
}

export default Footer2;
