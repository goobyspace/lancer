declare module "react/jsx-runtime" {
  namespace JSX {
    interface IntrinsicElements extends React.JSX.IntrinsicElements {
      ["lancer-keyword"]: {
        keyword: keyword;
      };
    }
  }
}
