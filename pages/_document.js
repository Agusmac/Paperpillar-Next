
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Lora&family=Pacifico&family=Montserrat:wght@500;600&family=Playfair+Display:wght@700&display=block" rel="stylesheet" />
                
                    {/* <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">  */}

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
