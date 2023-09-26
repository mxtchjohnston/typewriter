let sentence;

if (process.argv.length > 2) sentence = process.argv.splice(2).join(' ');
else sentence = "hello there from lighthouse labs";

sentence += '\n';
let delay = 50;

const print = (c) => process.stdout.write(c);

for (let c of sentence.split('')) {
  setTimeout(() => {
    print(c);
  }, delay);
  delay += 50;
}