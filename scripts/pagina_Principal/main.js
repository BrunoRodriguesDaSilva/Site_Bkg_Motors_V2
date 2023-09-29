import { Cabecalho } from "./header.js";
import { Destaque } from "./destaque.js";
import { BannersHistoria } from "./bannersHistoria.js";
import { ModelosDisponiveis } from "./modelosDisponiveis.js";
import { BannersInformativos } from "./bannersInformativos.js";
import { Footer } from "./footer.js";

document.querySelector('#app').innerHTML = `
${Cabecalho}
${Destaque}
${BannersHistoria}
${ModelosDisponiveis}
${BannersInformativos}
${Footer}
`;