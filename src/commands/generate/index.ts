import {Command, Flags} from '@oclif/core'

export default class Hello extends Command {
  static description = 'Generate an excel sheet'

  static examples = [
    '$ oex generate https://example.com/uuid/ output 1000',
  ]

  static args = [
    {name: 'file', description: 'Filename to generate', required: true},
    {name: 'prefix', description: 'prefix before UUID', required: true},
    {name: 'amount', description: 'Amount of lines in the file', required: true},
  ]

  async run(): Promise<void> {
    const {args} = await this.parse(Hello)

    this.log('we are in generate/index.ts')
  }
}
