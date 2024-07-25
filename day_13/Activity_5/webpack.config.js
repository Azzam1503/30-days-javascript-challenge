//Task 8 - Use a module bundler like Weppack to Parcel to bundle mulitple JS files into a single file. Write a script to demonstrate the bundling process.
import path from 'path';


export default {
  entry: './Activity_5/src/index.js', // Entry file path
  output: {
    filename: 'bundle.js', // Output bundle file
    path: path.resolve('Activity_5/dist'), // Output directory path
  },
  mode: 'development',
};
