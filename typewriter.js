const str = "My name is Jonathan Cheng";

const timer = (str, delay) => {
  str += "\n"
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char)
    }, delay);
    delay += 50;
  }
}

timer(str, 1000);