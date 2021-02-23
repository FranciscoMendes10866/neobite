import { Request, Response } from 'express'

import { microservice, channel, connection } from '@providers/rabbitmq'
import randomBytes from '@functions/randomBytes'

class RootController {
  async index (req: Request, res: Response) {
    await microservice('length')
    const name = randomBytes()
    await channel.sendToQueue('length', Buffer.from(JSON.stringify({ name })))
    await channel.close()
    await connection.close()
    return res.json({ message: 'Done' })
  }
}

export default new RootController()
