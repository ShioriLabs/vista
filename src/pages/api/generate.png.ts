import { NextApiRequest, NextApiResponse } from 'next'
import { chromium } from 'playwright'

const generate = async (_req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/')
  const image = await page.screenshot()
  res.setHeader('Content-Type', 'image/png')
  await browser.close()
  res.send(image)
}

export default generate
