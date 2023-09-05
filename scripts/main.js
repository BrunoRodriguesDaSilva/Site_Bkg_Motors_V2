import { Cabecalho } from "./header.js";
import { Destaque } from "./destaque.js";
import { BannersHistoria } from "./bannersHistoria";
import { ModelosDisponiveis } from "./modelosDisponiveis.js";
import { BannersInformativos } from "./bannersInformativos.js";

document.querySelector('#app').innerHTML = `
${Cabecalho}
${Destaque}
${BannersHistoria}
${ModelosDisponiveis}
${BannersInformativos}
`;