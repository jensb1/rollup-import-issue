import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';
import json from '@rollup/plugin-json';
import commonjs from 'rollup-plugin-commonjs';

const external = [].concat(
	Object.keys(pkg.dependencies),
	Object.keys(process.binding('natives'))
);

export default {
	input: 'index.js',
	output: {
		sourcemap: true,
		format: 'cjs',
		name: 'test',
		file: 'build/index.js'
	},
	external,
	plugins: [
		resolve({preferBuiltins: true}),
		json(),
		commonjs()
	],
};