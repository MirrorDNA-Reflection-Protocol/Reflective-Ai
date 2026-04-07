import { useState } from 'react'
import './App.css'

type View = 'landing' | 'reflect' | 'result'

interface ReflectionResult {
  saying: string
  matters: string
  nextStep: string
}

function Landing({ onTry, onExample }: { onTry: () => void; onExample: () => void }) {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Reflective AI for minds that think in loops</h1>
        <p className="subhead">
          Speak or type freely. Get calm clarity, what matters now, and one next step.
        </p>
        <div className="cta-group">
          <button className="cta-primary" onClick={onTry}>
            Try Reflective AI
          </button>
          <button className="cta-secondary" onClick={onExample}>
            See an example
          </button>
        </div>
      </div>
    </div>
  )
}

function ReflectInput({ onSubmit, onBack }: { onSubmit: (text: string) => void; onBack: () => void }) {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim())
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="reflect-input">
      <button className="back-btn" onClick={onBack} aria-label="Back">
        &larr;
      </button>
      <h2>What's on your mind?</h2>
      <p className="hint">No judgement. Just say it.</p>
      <textarea
        autoFocus
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="I'm overwhelmed and don't know what to do..."
        rows={4}
      />
      <button
        className="cta-primary"
        onClick={handleSubmit}
        disabled={!text.trim()}
      >
        Reflect
      </button>
    </div>
  )
}

function ResultView({ result, onAnother, onBack }: {
  result: ReflectionResult
  onAnother: () => void
  onBack: () => void
}) {
  return (
    <div className="result-view">
      <button className="back-btn" onClick={onBack} aria-label="Back">
        &larr;
      </button>

      <div className="result-block">
        <h3>What you're really saying</h3>
        <p>{result.saying}</p>
      </div>

      <div className="result-block">
        <h3>What matters right now</h3>
        <p>{result.matters}</p>
      </div>

      <div className="result-block highlight">
        <h3>One next step</h3>
        <p>{result.nextStep}</p>
      </div>

      <div className="result-actions">
        <button className="cta-primary" onClick={onAnother}>
          Reflect again
        </button>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="https://activemirror.ai/privacy/" target="_blank" rel="noopener noreferrer">Privacy</a>
        <span className="footer-sep">·</span>
        <a href="https://activemirror.ai/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
        <span className="footer-sep">·</span>
        <span className="footer-brand">Active Mirror</span>
      </div>
    </footer>
  )
}

/* Local reflection engine — no API needed for MVP.
   Patterns match common emotional textures and return
   structured, calm, actionable responses. */
function reflect(input: string): ReflectionResult {
  const lower = input.toLowerCase()

  if (lower.includes('overwhelm') || lower.includes('too much') || lower.includes('can\'t handle')) {
    return {
      saying: 'You are carrying too many open loops. The weight is real, not imagined.',
      matters: 'Nothing is broken. Your system is overloaded, not failing. One thread needs closing first.',
      nextStep: 'Pick the smallest unfinished thing. Close it. Then breathe.',
    }
  }

  if (lower.includes('stuck') || lower.includes('don\'t know what') || lower.includes('paralyz')) {
    return {
      saying: 'You see too many paths and none of them feel safe to take.',
      matters: 'The block is not about knowing the right answer. It is about fear of the wrong one.',
      nextStep: 'Choose the most reversible option. Do it for 15 minutes. Then reassess.',
    }
  }

  if (lower.includes('procrastinat') || lower.includes('can\'t start') || lower.includes('keep putting')) {
    return {
      saying: 'The task feels bigger than it is because your brain is pre-loading the whole thing.',
      matters: 'You don\'t need motivation. You need a smaller first step.',
      nextStep: 'Open the file, the doc, or the app. Just open it. That\'s the whole step.',
    }
  }

  if (lower.includes('anxious') || lower.includes('anxiety') || lower.includes('worried') || lower.includes('scared')) {
    return {
      saying: 'Your mind is running simulations of things that haven\'t happened yet.',
      matters: 'Right now, in this moment, you are safe. The threat is projected, not present.',
      nextStep: 'Name three things you can physically see. Ground here first.',
    }
  }

  if (lower.includes('tired') || lower.includes('exhausted') || lower.includes('burnout') || lower.includes('burnt out')) {
    return {
      saying: 'You have been running on discipline long after your energy ran out.',
      matters: 'Rest is not a reward. It is infrastructure. Without it, nothing else works.',
      nextStep: 'Set a timer for 20 minutes. Do nothing productive. Let your brain idle.',
    }
  }

  if (lower.includes('focus') || lower.includes('distract') || lower.includes('scattered') || lower.includes('adhd')) {
    return {
      saying: 'Your attention is trying to go everywhere because nothing has been declared the one thing.',
      matters: 'You don\'t have a focus problem. You have a priority problem.',
      nextStep: 'Write down the one thing that matters most today. Put everything else in a parking lot.',
    }
  }

  if (lower.includes('fail') || lower.includes('messed up') || lower.includes('mistake') || lower.includes('wrong')) {
    return {
      saying: 'You are replaying something that already happened, looking for a different ending.',
      matters: 'The mistake is done. What matters is whether you extracted the lesson or just the guilt.',
      nextStep: 'Write one sentence: "What I learned is ___." Then close that chapter.',
    }
  }

  if (lower.includes('alone') || lower.includes('lonely') || lower.includes('no one')) {
    return {
      saying: 'You feel unseen. That is one of the heaviest feelings there is.',
      matters: 'Being alone is a state. Feeling alone is a signal. The signal says: reach out.',
      nextStep: 'Send one message to one person. It doesn\'t have to be deep. Just real.',
    }
  }

  // Default: gentle, general reflection
  return {
    saying: 'Something is weighing on you and it needed a place to land.',
    matters: 'The fact that you stopped to reflect means your awareness is working. Trust that.',
    nextStep: 'Take what you just said and write it down in one sentence. Clarity follows compression.',
  }
}

const EXAMPLE_RESULT: ReflectionResult = {
  saying: 'You are carrying too many open loops. The weight is real, not imagined.',
  matters: 'Nothing is broken. Your system is overloaded, not failing. One thread needs closing first.',
  nextStep: 'Pick the smallest unfinished thing. Close it. Then breathe.',
}

export default function App() {
  const [view, setView] = useState<View>('landing')
  const [result, setResult] = useState<ReflectionResult | null>(null)

  const handleTry = () => setView('reflect')

  const handleExample = () => {
    setResult(EXAMPLE_RESULT)
    setView('result')
  }

  const handleSubmit = (text: string) => {
    setResult(reflect(text))
    setView('result')
  }

  const handleAnother = () => {
    setResult(null)
    setView('reflect')
  }

  const handleBack = () => {
    setView('landing')
    setResult(null)
  }

  return (
    <div className="app">
      {view === 'landing' && (
        <Landing onTry={handleTry} onExample={handleExample} />
      )}
      {view === 'reflect' && (
        <ReflectInput onSubmit={handleSubmit} onBack={handleBack} />
      )}
      {view === 'result' && result && (
        <ResultView result={result} onAnother={handleAnother} onBack={handleBack} />
      )}
      <Footer />
    </div>
  )
}
