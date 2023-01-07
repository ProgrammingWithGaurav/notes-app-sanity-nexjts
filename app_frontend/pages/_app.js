import '../styles/globals.css'
import { NoteProvider } from './context/NoteContext'

export default function App({ Component, pageProps }) {
  return(
    <NoteProvider>
       <Component {...pageProps} />
    </NoteProvider>
  )
}
