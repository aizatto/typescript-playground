(async () => {
  throw new Error('Hello World');
})().catch((err) => console.error(err)) ;
