import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {PDFDownloadLink} from "@react-pdf/renderer";
import {MyDocument} from "./pdf/react-render-test-page/ReactRenderTest.tsx";
import download from "downloadjs";
import { testDoc } from "./pdf/pdf-lib-test/pdfLibTestDoc.ts";

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <PDFDownloadLink document={<MyDocument />} fileName={"react-pdf-test.pdf"}>
              {({ loading}) => (loading ? 'Loading document...' : 'Test: react-pdf!')}
          </PDFDownloadLink>
          <button onClick={async () => {
              const pdfBytes = await testDoc();
              download(pdfBytes, "pdf-lib-test.pdf", "application/pdf");
          }}>Test: pdf-lib</button>
      </div>
    </>
  )
}

export default App
