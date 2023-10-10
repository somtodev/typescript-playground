function htmlEsc<String>(
  literal: string,
  ...placeholders: Array<string>
): string {
  let output = "";
  for (let index = 0; index < placeholders.length; index++) {
    output += literal[index];
    output += placeholders[index]
      .replace(/&/g, "&amp;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  output += literal[literal.length - 1];
  return output;
}
