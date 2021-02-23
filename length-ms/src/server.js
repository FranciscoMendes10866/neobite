import amqp from 'amqplib'

(async () => {
    try {
        const connection = await amqp.connect('amqp://localhost:5672')
        const channel = await connection.createChannel()
        await channel.assertQueue('length')
        channel.consume('length', async (data) => {
            console.log({ name: JSON.parse(data.content).name, length: JSON.parse(data.content).name.length })
            channel.ack(data)
        })
      } catch (err) {
        console.log(err)
      }
})()
