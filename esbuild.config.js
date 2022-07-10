const esbuild = require("esbuild");
const { dtsPlugin } = require("esbuild-plugin-d.ts");

const defaultConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
};
const formatList = ['esm', 'cjs'];

const build = () => {
    for (const format of formatList) {
        esbuild.build({
            ...defaultConfig,
            // @ts-ignore
            format,
            outfile: `dist/index.${format}.js`,
            external: ['react'],
            plugins: [dtsPlugin({ outDir: 'dist' })]
        })
    }
}

build();