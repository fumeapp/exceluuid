import {Command} from '@oclif/core'
import {v4} from 'uuid'
import * as Excel from 'exceljs'

export default class Hello extends Command {
  static description = 'Generate an excel sheet'

  static examples = [
    '$ oex generate https://example.com/uuid/ 1000',
  ]

  static args = [
    {name: 'prefix', description: 'prefix before UUID', required: true},
    {name: 'amount', description: 'Amount of lines in the file', required: true},
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Hello)

    const workbook = new Excel.Workbook()
    const worksheet = workbook.addWorksheet('UUIDS')
    for (let i = 0; i < args.amount; i++) {
      worksheet.addRow([`${args.prefix}${v4()}`])
    }

    await workbook.xlsx.writeFile('output.xlsx')
    this.log('Excel file generated')
  }
}
