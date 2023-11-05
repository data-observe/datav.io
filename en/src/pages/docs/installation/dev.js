import { Steps } from '@/components/Steps'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { InstallationLayout } from '@/layouts/InstallationLayout'
import Link from 'next/link'
import Code  from '@/components/docs/Code'

let steps = [
  {
    title: 'Build query service',
    body: () => (
      <>
        <p>
          Server is written in Go, so you need to install <Link href="https://go.dev/dl/">Go environments</Link> first.
        </p>
        <p>
          Then running command on the right in `ObserveXRoot/query` dir.
        </p>
      </>
    ),
    code: {
      name: 'ObserveXRoot/query',
      lang: 'terminal',
      code: `go build -o observex`,
    },
  },
  {
    title: 'Start server',
    body: () => (
      <>
        <p>
          Still in `ObserveXRoot/query` dir, executing the binary file compiled in the previous step.
        </p>
        <p>
          Finally, you can see the following output, which means that the server has started successfully.
        </p>
      </>
    ),
    code: {
      name: 'ObserveXRoot/query',
      lang: 'terminal',
      code: `./observex --config observex.yaml
INFO[08-22|13:40:25] ObserveX is listening on address            address=:10086`,
    },
  },
  {
    title: 'Build frontend UI',
    body: () => (
      <p>
        Open another terminal and go to `ObserveXRoot/ui` dir, then run the following command to install the dependencies.
      </p>
    ),
    code: {
      name: 'DataRoot/ui',
      lang: 'terminal',
      code: `nvm use node
yarn install`,
    },
  },
  {
    title: 'Start frontend dev server',
    body: () => <p>For local development purpose, there is no need to use Nginx, so we should start the ViteJS dev server.</p>,
    code: {
      name: 'DataRoot/ui',
      lang: 'terminal',
      code: `vite
➜  Vite Local:   http://127.0.0.1:5173/`
    },
  },
]

export default function Index({ code }) {
  return (
    <InstallationLayout>
      <div
        id="content-wrapper"
        className="relative z-10 max-w-3xl mb-16 prose prose-slate dark:prose-dark"
      >
        <h3 className="sr-only">Installing ObserveX</h3>
        <p>
          It's easy to use source code building and running ObserveX from scratch. You can download the latest release from <Link href="https://github.com/observexio/observex/releases">Github</Link>.
        </p>
      </div>
      <Steps level={4} steps={steps} code={code} />
      
      <div>
      <h2 className="text-slate-900 text-xl tracking-tight font-bold mb-3 dark:text-slate-200">
          Try ObserveX in browser
        </h2>
        <p>It's really easy and fast, right? Now you can open Chrome or Safari browser and visit <Code><Link href="http://localhost:5173">http://localhost:5173</Link></Code> to explore ObserveX UI.</p>
      </div>
      {/*
        <Cta
          label="Read the documentation"
          href="/docs/tailwind-cli"
          description={
            <>
              <strong className="font-semibold text-slate-900">
                This is only the beginning of what’s possible with the Tailwind CLI.
              </strong>{' '}
              To learn more about everything it can do, check out the Tailwind CLI documentation.
            </>
          }
        />
      */}
    </InstallationLayout>
  )
}

export function getStaticProps() {
  let { highlightedCodeSnippets } = require('@/components/Guides/Snippets.js')

  return {
    props: {
      code: highlightedCodeSnippets(steps),
    },
  }
}

Index.layoutProps = {
  meta: {
    title: 'Local development',
    description:
      '',
    section: 'Getting Started',
  },
  Layout: DocumentationLayout,
  allowOverflow: false,
}
