let str = "Hello, world\n";
if (str.endsWith("\n")) {
    str = str.slice(0, -1);
}
console.log(str); // Output: "Hello, world"
