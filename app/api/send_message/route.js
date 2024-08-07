import { NextResponse } from 'next/server'
import axios from 'axios'

export const POST = async req => {
  const data = await req.json()

  const options = {
    method: 'POST',
    url: `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`,
    data: {
      chat_id: '-1002156057829',
      text: data.text,
      parse_mode: 'HTML',
    },
  }

  return axios
    .request(options)
    .then(response => {
      return NextResponse.json('Success')
    })
    .catch(error => {
      return NextResponse.json(error)
    })
}
