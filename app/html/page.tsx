import Header from '@/components/header'
import TutorialLayout from '@/components/tutorial-layout'
import CodeExecutor from '@/components/code-executor'
import HTMLCSSLearningCompanion from '@/components/html-css-learning-companion'
import FloatingChatbot from '@/components/floating-chatbot'
import { Button } from '@/components/ui/button'

export default function HTMLTutorial() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <TutorialLayout
        title="HTML Tutorial"
        description="HTML is the standard markup language for Web pages."
        currentTopic="HTML Introduction"
        topics={[
          'HTML Introduction',
          'HTML Editors',
          'HTML Basic',
          'HTML Elements',
          'HTML Attributes',
          'HTML Headings',
          'HTML Paragraphs',
          'HTML Styles',
          'HTML Formatting',
          'HTML Quotations',
          'HTML Comments',
          'HTML Colors',
          'HTML CSS',
          'HTML Links',
          'HTML Images',
          'HTML Tables',
          'HTML Lists',
          'HTML Forms'
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
          {/* Middle Content Area - Tutorial Content */}
          <div className="lg:col-span-2 space-y-6 overflow-y-auto">
            <div>
              <h2 className="text-2xl font-bold text-[#9929EA] mb-4">What is HTML?</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• HTML stands for Hyper Text Markup Language</li>
                <li>• HTML is the standard markup language for creating Web pages</li>
                <li>• HTML describes the structure of a Web page</li>
                <li>• HTML consists of a series of elements</li>
                <li>• HTML elements tell the browser how to display the content</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#9929EA] mb-4">Try It Yourself - Interactive Editor</h2>
              <CodeExecutor
                initialCode={`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
                language="html"
              />
              
              {/* Try it Yourself button below the code editor */}
              <div className="mt-6 text-center">
                <Button className="bg-[#00AA6C] hover:bg-[#008A5A] text-white text-lg px-8 py-3">
                  Try it Yourself »
                </Button>
              </div>
            </div>

            <div className="bg-[#FAEB92] p-4 rounded-lg">
              <h3 className="font-bold text-[#9929EA] mb-2">Example Explained</h3>
              <ul className="space-y-1 text-[#9929EA] text-sm">
                <li>• The <code>&lt;!DOCTYPE html&gt;</code> declaration defines this document to be HTML5</li>
                <li>• The <code>&lt;html&gt;</code> element is the root element of an HTML page</li>
                <li>• The <code>&lt;head&gt;</code> element contains meta information about the HTML page</li>
                <li>• The <code>&lt;title&gt;</code> element specifies a title for the HTML page</li>
                <li>• The <code>&lt;body&gt;</code> element defines the document&apos;s body</li>
                <li>• The <code>&lt;h1&gt;</code> element defines a large heading</li>
                <li>• The <code>&lt;p&gt;</code> element defines a paragraph</li>
              </ul>
            </div>
          </div>
          
          {/* Right Sidebar - AI-Powered Learning Widget */}
          <div className="lg:col-span-1 overflow-y-auto">
            <div className="sticky top-0">
              <HTMLCSSLearningCompanion />
            </div>
          </div>
        </div>
      </TutorialLayout>
      <FloatingChatbot />
    </div>
  )
}


