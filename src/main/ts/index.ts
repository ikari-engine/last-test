export function helloWorld(dummy: boolean): string {
  const message = "Hello, World!";
  if (dummy) {
    return message;
  }
  return message;
}

export default helloWorld;
