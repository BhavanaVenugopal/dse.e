const Fs = require('fs')

const Path = require('path')

const Sass = require('node-sass')

getComponents = () => {
    let allComponents = []
    const types = ['atoms', 'molecules']
    types.forEach(eachType => {
        const allFiles = Fs.readdirSync(`src/${eachType}`).map(file => ({
            input: `src/${eachType}/${file}`,
            output: `lib/${file.slice(0, -4) + 'css'}`
        }))
        allComponents = [
            ...allComponents,
            ...allFiles
        ]
    })
    return allComponents
}
 
const compile = (path, fileName) => {
    const result = Sass.renderSync({
        data: Fs.readFileSync(
            Path.resolve(path)
        ).toString(),
        outputStyle: 'expanded',
        outFile: 'global.css',
        includePaths: [Path.resolve('src')]
    })
    Fs.writeFileSync(
        Path.resolve(fileName),
        result.css.toString()
    )
}

try{Fs.mkdirSync(Path.resolve('lib'))}
catch(e){}

compile('src/global.scss', 'lib/global.css')

getComponents().forEach(component => {
    compile(component.input, component.output)
})
