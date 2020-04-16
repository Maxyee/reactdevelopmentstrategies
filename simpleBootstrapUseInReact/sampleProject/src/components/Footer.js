import React from "react";

function Footer() {

    const hrstyle = {
        margin: "0 15%"
    }


  return (
    <div>
      <footer class="page-footer font-small indigo">
        <div class="container">
          <div class="row text-center d-flex justify-content-center pt-5 mb-3">
            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="about.html">About us</a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="product.html">Products</a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="award.html">Awards</a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="help.html">Help</a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase font-weight-bold">
                <a href="contact.html">Contact</a>
              </h6>
            </div>
          </div>

          <hr class="rgba-white-light" style={hrstyle} />

          <div class="row d-flex text-center justify-content-center mb-md-0 mb-4">
            <div class="col-md-8 col-12 mt-5">
              <p style={{lineHeight:"1.7rem"}}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur.
              </p>
            </div>
          </div>

          <hr
            class="clearfix d-md-none rgba-white-light"
            style={{margin:"margin: 10% 15% 5%;"}}
          />

          <div class="row pb-3">
            <div class="col-md-12">
              <div class="mb-5 flex-center">
                <a class="fb-ic" href="error.html">
                  <i class="fab fa-facebook-f fa-lg white-text mr-4"> </i>
                </a>

                <a class="tw-ic" href="error.html">
                  <i class="fab fa-twitter fa-lg white-text mr-4"> </i>
                </a>

                <a class="gplus-ic" href="error.html">
                  <i class="fab fa-google-plus-g fa-lg white-text mr-4"> </i>
                </a>

                <a class="li-ic" href="error.html">
                  <i class="fab fa-linkedin-in fa-lg white-text mr-4"> </i>
                </a>

                <a class="ins-ic" href="error.html">
                  <i class="fab fa-instagram fa-lg white-text mr-4"> </i>
                </a>

                <a class="pin-ic" href="error.html">
                  <i class="fab fa-pinterest fa-lg white-text"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="https://github.com/Maxyee"> MD JULHAS HOSSAIN</a>
        </div>
      </footer>
    </div>
  );
}


export default Footer;