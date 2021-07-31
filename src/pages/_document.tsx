import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components'
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/styles'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const styledComponentSheets = new StyledComponentSheets()
    const materialUiServerStyleSheets = new MaterialUiServerStyleSheets()

    // 実際のReactレンダリングロジックを、同期的に実行するコールバック関数
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheets.collectStyles(
              materialUiServerStyleSheets.collect(<App {...props} />)
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentSheets.getStyleElement()}
            {materialUiServerStyleSheets.getStyleElement()}
          </>
        )
      }
    } finally {
      styledComponentSheets.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        {/* 全てのページに共通のheadコードとして使用する */}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
