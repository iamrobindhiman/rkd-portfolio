import type { MDXComponents } from "mdx/types";
import CodeBlock from "@/components/blog/CodeBlock";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: CodeBlock as MDXComponents["pre"],
  };
}
