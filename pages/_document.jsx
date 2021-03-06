import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx){
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(){
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:ital,wght@1,600&family=Lato:wght@300&display=swap" rel="stylesheet" />
		            <script src="https://kit.fontawesome.com/0b6920abab.js" crossorigin="anonymous"></script>
                    <link rel="shortcut icon" href="/img/favicon.png" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument