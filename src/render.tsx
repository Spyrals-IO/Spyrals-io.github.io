import * as fs from "fs";
import prettier from "prettier";
import ReactDOMServer from "react-dom/server";
import React from "react";
import config from './utils/config'
import Site, { Preload } from '.'
import Contact from './pages/nous-contacter'
import Home from './pages/home'

const HomePreloads: ReadonlyArray<Preload> = [
  { as: 'image', href: config.spyrals.img1},
  { as: 'image', href: config.spyrals.img2},
]

const pages = [
  [<Site Main={Home} description={config.home_description} title={config.home_title} preloads={HomePreloads} />,"./index.html"],
  [<Site Main={Contact} description={config.contact_description} title={config.contact_title} />, "./nous-contacter.html"],
] as const

const render = ([element, outputFile]: readonly [JSX.Element, string]) => {
  const html = ReactDOMServer.renderToStaticMarkup(element);
  const htmlWDoc = "<!DOCTYPE html>" + html;
  const prettyHtml = prettier.format(htmlWDoc, { parser: "html" });

  fs.writeFileSync(outputFile, prettyHtml);
  console.log(`Wrote ${outputFile}`);
}

pages.forEach(render)
