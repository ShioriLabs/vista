import { chromium } from 'playwright'

const generate = async (): Promise<void> => {
  const browser = await chromium.launch({
    timeout: 0
  })
  const page = await browser.newPage()
  await page.goto('http://localhost:3000/')
  await page.screenshot({
    path: 'example.png'
  })
  await browser.close()
}

generate()
