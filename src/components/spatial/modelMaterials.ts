import { DoubleSide, MeshPhysicalMaterial, MeshStandardMaterial } from "three";

export const modelMaterials = {
  wall: new MeshStandardMaterial({ color: "#eee9df", roughness: 0.88 }),
  wallEdge: new MeshStandardMaterial({ color: "#d8d0c2", roughness: 0.9 }),
  limestone: new MeshStandardMaterial({ color: "#cfc7b8", roughness: 0.82 }),
  terrazzo: new MeshStandardMaterial({ color: "#bdb7aa", roughness: 0.8 }),
  oak: new MeshStandardMaterial({ color: "#936f4e", roughness: 0.72 }),
  walnut: new MeshStandardMaterial({ color: "#4e382b", roughness: 0.76 }),
  olive: new MeshStandardMaterial({ color: "#727a68", roughness: 0.9 }),
  fabric: new MeshStandardMaterial({ color: "#d8d1c4", roughness: 0.95 }),
  terracotta: new MeshStandardMaterial({ color: "#a75f45", roughness: 0.84 }),
  metal: new MeshStandardMaterial({ color: "#2b2c29", roughness: 0.38, metalness: 0.58 }),
  brass: new MeshStandardMaterial({ color: "#a98b5f", roughness: 0.4, metalness: 0.5 }),
  screen: new MeshStandardMaterial({ color: "#151716", roughness: 0.24, metalness: 0.15 }),
  ceramic: new MeshStandardMaterial({ color: "#e7e4dc", roughness: 0.55 }),
  green: new MeshStandardMaterial({ color: "#58654d", roughness: 0.92 }),
  garden: new MeshStandardMaterial({ color: "#727b62", roughness: 1 }),
  glass: new MeshPhysicalMaterial({ color: "#c5d0cb", transparent: true, opacity: 0.28, roughness: 0.08, transmission: 0.22, depthWrite: false, side: DoubleSide }),
};

