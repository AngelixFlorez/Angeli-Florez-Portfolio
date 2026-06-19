import { Component } from 'react'

export default class AppErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('=== APP ERROR ===')
    console.error('Error:', error)
    console.error('Stack:', error?.stack)
    console.error('Component Stack:', info?.componentStack)
    this.setState({ errorInfo: info })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center p-8" style={{ backgroundColor: '#0a0a0f', color: '#f1f1f3', fontFamily: 'system-ui, sans-serif' }}>
          <div style={{ maxWidth: '600px', width: '100%' }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '1rem' }}>
              Error detected
            </h1>
            <div style={{ background: '#1a1a25', borderRadius: '12px', padding: '1.5rem', marginBottom: '1rem', overflow: 'auto' }}>
              <p style={{ color: '#f87171', fontFamily: 'monospace', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
                {this.state.error?.toString()}
              </p>
              <pre style={{ color: '#a1a1aa', fontFamily: 'monospace', fontSize: '0.75rem', whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                {this.state.error?.stack}
              </pre>
            </div>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '500',
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
