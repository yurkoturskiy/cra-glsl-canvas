import first from "./001";
import second from "./002";
import third from "./003";
import fourth from "./004";
import generateID from "../utils/generateID";

export default [
  {
    id: generateID("sha"),
    frag: first,
  },
  {
    id: generateID("sha"),
    frag: second,
  },
  {
    id: generateID("sha"),
    frag: third,
  },
  {
    id: generateID("sha"),
    frag: fourth,
  },
];

export const getShader = (id) => shaders.find((sh) => sh.id === id);
