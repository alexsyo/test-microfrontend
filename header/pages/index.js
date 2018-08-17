import React from 'react';
import Link from 'next/link';

export default () => (
  <ul style={{backgroundColor: 'pink', margin: 0, padding: "20px 40px"}}>
    <li><Link href="/"><a>home</a></Link></li>
    <li><Link href="/food"><a>food</a></Link></li>
  </ul>
)