import React from "react";
import classes from "./home.module.css";
import { FiCheck } from "react-icons/fi";
import { HomepageSiteData, Svg } from "../data/data";

const Home = () => {
  return (
    <main className={classes.container}>
      <section className={classes.teamimg}>
        <article className={classes.title}>
          <h3>W3SCHOOLS SPACES</h3>
          <span> Get your own website</span>
          <h2>
            Create your own space. Use it to host your website or try out ideas.
          </h2>
        </article>
        <article className={classes.titlebox}>
          <h1>free</h1>
          <ul>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>Build static sites</p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>w3spaces.com subdomain </p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>HTTPS encryption </p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>5 000 requests/ month </p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>1 GB data served / month</p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>100 MB storage </p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>5 MB files maximum </p>
            </li>
            <li>
              <span>
                <FiCheck />
              </span>
              <p>1 space</p>
            </li>
          </ul>
          <button typeof="button" className={classes.titleboxbtn}>
            get started for free
          </button>
          <div className={classes.termofbox}>
            <p>
              By clicking the "Get started" button, you agree to W3Schools
              <span>Terms of Service</span> and
              <span> Privacy Policy</span>
            </p>
          </div>
        </article>
      </section>
      <div>
        <ul className={classes.content}>
          {HomepageSiteData.map((unit, index) => {
            return (
              <li className={classes.contentitem} key={index}>
                <h2>{unit.title}</h2>
                <p>{unit.discription}</p>
              </li>
            );
          })}
        </ul>
        <div className={classes.howitworks}>
          <div>
            <div className={classes.howitworksimg}>
              <h1>How it works?</h1>
              <ul className={classes.svgcontainer}>
                {Svg.map((svg, index) => {
                  return <img src={svg.svg} alt="pictures" key={index} />;
                })}
              </ul>
            </div>
            <div>
              <ul className={classes.howitworkstitle}>
                <li>1. Join W3Schools - and create a space</li>
                <li>2. Choose a template - or start from scratch</li>
                <li>3. Edit your code and make it yours</li>
                <li>4. Share your space with someone</li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.startworking}>
          <div className={classes.titleofstart}>
            <h1>Start Free - go Pro later</h1>
            <p>Master new skills</p>
          </div>
          <div className={classes.cardsofstart}>
            <div className={classes.freecard}>
              <div className={classes.headofcard}>
                <button typeof="button">free</button>
              </div>
              <div className={classes.pricecard}>
                <h2>
                  <span>0$</span> {"   "}/month
                </h2>
              </div>
              <h1>free</h1>
              <p>For new web developers ready to create their first website</p>
              <ul>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>Build static sites</p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>w3spaces.com subdomain </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>HTTPS encryption </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>5 000 requests/ month </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>1 GB data served / month</p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>100 MB storage </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>5 MB files maximum </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>1 space</p>
                </li>
              </ul>
              <button typeof="button" className={classes.freecardboxbtn}>
                get started for free
              </button>
            </div>
            <div className={classes.procard}>
              <h2 className={classes.pricecard}>
                <span>2.99$</span> {"   "}/month
              </h2>
              <h1>pro</h1>
              <ul>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>Build static sites</p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>w3spaces.com subdomain </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>HTTPS encryption </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>100 000 requests/ month </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>20 GB data served / month</p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>1 GB storage </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>25 MB files maximum </p>
                </li>
                <li>
                  <span>
                    <FiCheck />
                  </span>
                  <p>10 space</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.termofboxend}>
            <p>
              By clicking the "Get started" button, you agree to W3Schools
              <span>Terms of Service</span> and
              <span> Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
