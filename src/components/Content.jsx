import React from 'react'

export default function Content({ content }) {
  return <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content }} />
}
