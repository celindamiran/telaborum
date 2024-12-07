var builder = new BlobBuilder();
builder.append("Hello, World!");
builder.append(new Uint8Array([1, 2, 3, 4, 5]));
var blob = builder.getBlob();
