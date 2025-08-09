'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Button as AntButton, message, notification } from 'antd'
import { CodeOutlined } from '@ant-design/icons'

export default function TutorialSections() {
  const [messageApi, contextHolder] = message.useMessage();

  const handleTryIt = (language: string) => {
    messageApi.success(`Opening ${language} playground...`);
    notification.open({
      message: `${language} Playground`,
      description: `Try coding ${language} in our interactive playground!`,
      icon: <CodeOutlined style={{ color: '#9929EA' }} />,
      placement: 'topRight',
    });
  };

  return (
    <>
      {contextHolder}
    <div className="min-h-screen">
      {/* HTML Section */}
      <section className="bg-[#C8E6C9] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* HTML Left Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-8xl lg:text-9xl font-black text-black mb-6 tracking-tight">
                HTML
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-800 font-medium mb-12">
                The language for building web pages
              </p>
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <Link href="/html">
                  <Button className="w-full bg-[#00AA6C] hover:bg-[#008A5A] text-white text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Learn HTML
                  </Button>
                </Link>
                <Button className="w-full bg-[#FAEB92] hover:bg-[#F5E676] text-black text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Video Tutorial
                </Button>
                <Button className="w-full bg-[#4A4A4A] hover:bg-[#3A3A3A] text-white text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  HTML Reference
                </Button>
                <Button className="w-full bg-[#FFB6C1] hover:bg-[#FFA0B4] text-black text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Certified
                </Button>
              </div>
            </div>

            {/* HTML Right Side - Code Example */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">HTML Example:</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-[#00AA6C]">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-gray-800">
                    <span className="text-gray-600">&lt;!DOCTYPE html&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;html&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;head&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;title&gt;</span>HTML Tutorial<span className="text-purple-600">&lt;/title&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;/head&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;body&gt;</span>{'\n'}
                    {'\n'}
                    <span className="text-purple-600">&lt;h1&gt;</span>This is a heading<span className="text-purple-600">&lt;/h1&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;p&gt;</span>This is a paragraph.<span className="text-purple-600">&lt;/p&gt;</span>{'\n'}
                    {'\n'}
                    <span className="text-purple-600">&lt;/body&gt;</span>{'\n'}
                    <span className="text-purple-600">&lt;/html&gt;</span>
                  </code>
                </pre>
              </div>
              <AntButton 
                type="primary" 
                size="large"
                icon={<CodeOutlined />}
                onClick={() => handleTryIt('HTML')}
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: '#00AA6C',
                  borderColor: '#00AA6C',
                  borderRadius: '24px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
                className="shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Try it Yourself
              </AntButton>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Section */}
      <section className="bg-[#FFF59D] py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* CSS Left Side */}
            <div className="text-center lg:text-left">
              <h1 className="text-8xl lg:text-9xl font-black text-black mb-6 tracking-tight">
                CSS
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-800 font-medium mb-12">
                The language for styling web pages
              </p>
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                <Link href="/css">
                  <Button className="w-full bg-[#00AA6C] hover:bg-[#008A5A] text-white text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                    Learn CSS
                  </Button>
                </Link>
                <Button className="w-full bg-[#4A4A4A] hover:bg-[#3A3A3A] text-white text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  CSS Reference
                </Button>
                <Button className="w-full bg-[#FFB6C1] hover:bg-[#FFA0B4] text-black text-lg py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-200">
                  Get Certified
                </Button>
              </div>
            </div>

            {/* CSS Right Side - Code Example */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">CSS Example:</h3>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 border-l-4 border-[#00AA6C]">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-gray-800">
                    <span className="text-purple-600">body</span> <span className="text-gray-800">{'{'}</span>{'\n'}
                    {'  '}<span className="text-red-600">background-color</span>: <span className="text-blue-600">lightblue</span>;{'\n'}
                    <span className="text-gray-800">{'}'}</span>{'\n'}
                    {'\n'}
                    <span className="text-purple-600">h1</span> <span className="text-gray-800">{'{'}</span>{'\n'}
                    {'  '}<span className="text-red-600">color</span>: <span className="text-blue-600">white</span>;{'\n'}
                    {'  '}<span className="text-red-600">text-align</span>: <span className="text-blue-600">center</span>;{'\n'}
                    <span className="text-gray-800">{'}'}</span>{'\n'}
                    {'\n'}
                    <span className="text-purple-600">p</span> <span className="text-gray-800">{'{'}</span>{'\n'}
                    {'  '}<span className="text-red-600">font-family</span>: <span className="text-blue-600">verdana</span>;{'\n'}
                    <span className="text-gray-800">{'}'}</span>
                  </code>
                </pre>
              </div>
              <AntButton 
                type="primary" 
                size="large"
                icon={<CodeOutlined />}
                onClick={() => handleTryIt('CSS')}
                style={{
                  width: '100%',
                  height: '48px',
                  backgroundColor: '#00AA6C',
                  borderColor: '#00AA6C',
                  borderRadius: '24px',
                  fontSize: '16px',
                  fontWeight: '600'
                }}
                className="shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Try it Yourself
              </AntButton>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
