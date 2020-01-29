import * as fs from 'fs'

const readJson = (filePath:string): Promise<object> => {
    return new Promise(resolve => {
        fs.readFile(filePath, (err, data) => {
          resolve(JSON.parse(data))
        })
    })
}

export default readJson