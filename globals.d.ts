/// <reference types="node" />

declare module "*.css" {
  const classes: { [key: string]: string };

  export default classes;
}
