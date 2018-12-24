interface IConfig {
  [key: string]: any;
}

export default function lift(config: IConfig) {
  // eslint-disable-next-line no-console
  console.log(config);
}
