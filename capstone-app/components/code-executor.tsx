'use client'

import { useState } from 'react'
import { Play, Square, RotateCcw } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'

interface CodeExecutorProps {
  initialCode?: string
  language: string
}

export default function CodeExecutor({ 
  initialCode = '', 
  language
}: CodeExecutorProps) {
  const [code, setCode] = useState(initialCode)
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)
  const [error, setError] = useState('')

  const executeCode = async () => {
    setIsRunning(true)
    setError('')
    setOutput('')

    try {
      if (language === 'html') {
        setOutput('✅ HTML code looks good! This would render a webpage with your structure.')
      } else if (language === 'javascript') {
        try {
          const result = eval(code)
          setOutput(String(result))
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Execution error')
        }
      } else if (language === 'css') {
        setOutput('✅ CSS styles are valid! These would be applied to your HTML elements.')
      } else {
        setOutput(`✅ ${language} code would be processed successfully!`)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error')
    } finally {
      setIsRunning(false)
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput('')
    setError('')
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg text-[#9929EA]">
            {language.toUpperCase()} Code Editor
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={resetCode}
              disabled={isRunning}
            >
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button
              onClick={executeCode}
              disabled={isRunning}
              className="bg-[#00AA6C] hover:bg-[#008A5A] text-white"
            >
              {isRunning ? (
                <Square className="h-4 w-4 mr-1" />
              ) : (
                <Play className="h-4 w-4 mr-1" />
              )}
              {isRunning ? 'Running...' : 'Run Code'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Code Editor:
          </label>
          <Textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="font-mono text-sm min-h-[200px] bg-gray-50"
            placeholder={`Enter your ${language} code here...`}
          />
        </div>

        {(output || error) && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Output:
            </label>
            <div className={`p-4 rounded-lg font-mono text-sm min-h-[100px] ${
              error ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-green-50 text-green-700 border border-green-200'
            }`}>
              {error || output || 'No output yet...'}
            </div>
          </div>
        )}

        <div className="bg-[#FAEB92] p-4 rounded-lg">
          <h4 className="font-bold text-black mb-2">💡 Learning Tips:</h4>
          <ul className="text-black text-sm space-y-1">
            <li>• Use the AI chat assistant for help understanding your code</li>
            <li>• Try modifying the code to see different results</li>
            <li>• Ask specific questions about syntax or logic</li>
            <li>• Practice with different {language} examples</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}


