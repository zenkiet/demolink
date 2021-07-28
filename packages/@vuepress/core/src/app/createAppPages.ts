import { debug, globby } from '@vuepress/utils'
import { createPage } from '../page'
import type { App, Page } from '../types'

const log = debug('vuepress:core/app')

/**
 * Create pages for vuepress app
 */
export const createAppPages = async (app: App): Promise<Page[]> => {
  log('createAppPages start')

  // resolve page file paths according to the page patterns
  const pagePaths = await globby(app.options.pagePatterns, {
    cwd: app.dir.source(),
  })

  // create pages from files
  const pages = await Promise.all(
    pagePaths.map((filePath) => createPage(app, { filePath }))
  )

  // if there is no 404 page, add one
  if (!pages.some((page) => page.path === '/404.html')) {
    pages.push(
      await createPage(app, {
        path: '/404.html',
        frontmatter: {
          layout: '404',
        },
      })
    )
  }

  log('createAppPages finish')

  return pages
}
