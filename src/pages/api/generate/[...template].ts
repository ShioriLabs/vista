import { NextApiRequest, NextApiResponse } from 'next'
import { chromium } from 'playwright'

const generate = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { template, ...query } = req.query

  const templateName = (template as string[]).join('/').split('.png')[0]
  const queryString = Object.entries(query).map(([key, value]) => `${key}=${encodeURI(value as string)}`).join('&')
  const templateUrl = `http://localhost:${process.env.PORT || 3000}/templates/${templateName}?${queryString}`

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto(templateUrl)
  const image = await page.screenshot()
  await browser.close()
  res.setHeader('Content-Type', 'image/png')
  res.send(image)
}

export default generate
