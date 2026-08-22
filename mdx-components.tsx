import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="docs-title" {...props} />,
    h2: (props) => <h2 className="docs-heading" {...props} />,
    h3: (props) => <h3 className="docs-subheading" {...props} />,
    p: (props) => <p className="docs-paragraph" {...props} />,
    ul: (props) => <ul className="docs-list docs-list-unordered" {...props} />,
    ol: (props) => <ol className="docs-list docs-list-ordered" {...props} />,
    a: (props) => <a className="docs-link" {...props} />,
    table: (props) => <div className="docs-table-wrap"><table className="docs-table" {...props} /></div>,
    thead: (props) => <thead className="docs-table-head" {...props} />,
    th: (props) => <th className="docs-table-cell docs-table-header" {...props} />,
    td: (props) => <td className="docs-table-cell" {...props} />,
    code: (props) => <code className="docs-inline-code" {...props} />,
    pre: (props) => <pre className="docs-code" {...props} />,
    ...components,
  };
}
