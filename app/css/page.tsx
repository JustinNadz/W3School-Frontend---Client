import Header from '@/components/header'
import TutorialLayout from '@/components/tutorial-layout'
import CodeExample from '@/components/code-example'
import CodeExecutor from '@/components/code-executor'
import HTMLCSSLearningCompanion from '@/components/html-css-learning-companion'

export default function CSSTutorial() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Header />
      <TutorialLayout
        title="CSS Tutorial"
        description="CSS is the language we use to style an HTML document."
        currentTopic="CSS Introduction"
        topics={[
          'CSS Introduction',
          'CSS Syntax',
          'CSS Selectors',
          'CSS Colors',
          'CSS Backgrounds',
          'CSS Borders',
          'CSS Margins',
          'CSS Padding',
          'CSS Height/Width',
          'CSS Box Model',
          'CSS Text',
          'CSS Fonts',
          'CSS Display',
          'CSS Position',
          'CSS Flexbox',
          'CSS Grid',
          'CSS Responsive'
        ]}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 xl:col-span-3 space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9929EA] mb-3 sm:mb-4">What is CSS?</h2>
              <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                <li>• CSS stands for Cascading Style Sheets</li>
                <li>• CSS describes how HTML elements are displayed</li>
                <li>• CSS saves time - it can control multiple web pages at once</li>
                <li>• CSS controls colors, fonts, layouts, and spacing</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9929EA] mb-3 sm:mb-4">Try CSS Styling - Interactive Editor</h2>
              <CodeExecutor
                initialCode={`/* CSS Styles */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}

h1 {
  color: #9929EA;
  text-align: center;
  font-size: 2em;
}

p {
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}

.highlight {
  background-color: #FAEB92;
  padding: 10px;
  border-radius: 5px;
}`}
                language="css"
              />
            </div>

            <div className="bg-[#FAEB92] p-3 sm:p-4 rounded-lg">
              <h3 className="font-bold text-black mb-2 text-sm sm:text-base">CSS Explained</h3>
              <ul className="space-y-1 text-black text-xs sm:text-sm">
                <li>• <strong>Selectors</strong> target HTML elements (body, h1, p, .highlight)</li>
                <li>• <strong>Properties</strong> define what to style (color, font-size, background)</li>
                <li>• <strong>Values</strong> specify how to style (colors, sizes, fonts)</li>
                <li>• <strong>Classes</strong> (.highlight) can be applied to any HTML element</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#9929EA] mb-3 sm:mb-4">HTML + CSS Example</h2>
              <CodeExample
                code={`<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
h1 {
  color: #9929EA;
  text-align: center;
}
p {
  color: #333;
  padding: 20px;
}
</style>
</head>
<body>

<h1>My Styled Page</h1>
<p>This paragraph is styled with CSS!</p>

</body>
</html>`}
                language="html"
              />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <HTMLCSSLearningCompanion />
          </div>
        </div>
      </TutorialLayout>
    </div>
  )
}


