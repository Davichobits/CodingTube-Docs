import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  urlImg: string;
  link?: string;
  linkDoc?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "HTML",
    urlImg: require("@site/static/img/HTML.png").default,
    link: "https://www.youtube.com/watch?v=QwMlgfMK6fQ&list=PLJubkp8BnTJt-pKYkVNLt72n1hKmYmkFw",
    linkDoc: "/docs/category/html",
    description: (
      <>Toda página debe tener una estructura HTML, empieza por aquí.</>
    ),
  },
  {
    title: "CSS",
    urlImg: require("@site/static/img/CSS.png").default,
    link: "https://www.youtube.com/watch?v=I_RG3bNjTfQ&list=PLJubkp8BnTJt1u6z_voRiYtwskmP0VVzw",
    linkDoc: "/docs/category/css",
    description: (
      <>
        Los estilos son importantes para que tu página se vea bien, aprende a
        usar CSS.
      </>
    ),
  },
  {
    title: "Javascript",
    urlImg: require("@site/static/img/javascript.png").default,
    link: "https://www.youtube.com/watch?v=3oSeQb94Ga4&list=PLJubkp8BnTJsDgWXWcS1Z0VDV7rAOqbU4",
    description: (
      <>
        Aprende a dar funcionalidad e interactividad a tu página web con
        Javascript.
      </>
    ),
  },
  {
    title: "Tailwind",
    urlImg: require("@site/static/img/tailwind.png").default,
    link: "https://www.youtube.com/watch?v=gvdvuGSksDU&list=PLJubkp8BnTJu9khizC7ywblms1YzdLO3g",
    description: (
      <>
        Framework de CSS que te ayudará a darle estilos a tu página web de
        manera más rápida.
      </>
    ),
  },
  {
    title: "React",
    urlImg: require("@site/static/img/react.png").default,
    link: "https://www.youtube.com/watch?v=Ed9OM9uQTAA&list=PLJubkp8BnTJshwFKJGgAiQy2HrkTeYT1a",
    linkDoc: "/docs/category/react",
    description: (
      <>
        La librería más usada en desarollo web. Aprende a crear aplicaciones web
        con React.
      </>
    ),
  },
  // {
  //   title: "Phaser",
  //   urlImg: require("@site/static/img/phaser.png").default,
  //   // link: "https://www.youtube.com/CodingTube",
  //   linkDoc: "/docs/category/phaser",
  //   description: (
  //     <>Framework Open Source de JavaScript para crear videojuegos HTML5.</>
  //   ),
  // },
  {
    title: "Dart",
    urlImg: require("@site/static/img/dart.png").default,
    link: "https://www.youtube.com/watch?v=ymTczP7hDCE&list=PLJubkp8BnTJsinoOsYfDucgvTbo4Xb_ti",
    linkDoc: "/docs/category/dart",
    description: (
      <>Dart es el lenguaje de programación que se utiliza para crear aplicaciones móviles con Flutter.</>
    ),
  },
];

function Feature({ title, urlImg, description, link, linkDoc }: FeatureItem) {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card item shadow--md">
        <div className="card__image">
          <img src={urlImg} alt="Image alt text" title="Logo Title Text 1" />
        </div>
        <div className="card__body">
          <h4>{title}</h4>
          <small>{description}</small>
        </div>

        <div className="card__footer">
          <div className="button-group button-group--block">
            {linkDoc && (
              <button
                className="button button--secondary button--block"
                onClick={() => window.open(linkDoc, "_self")}
              >
                Docs
              </button>
            )}
            {link && (
              <button
                className="button button--primary button--block"
                onClick={() => window.open(link, "_blank")}
              >
                Videos
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Cursos:
        </Heading>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
