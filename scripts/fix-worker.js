#!/usr/bin/env node
import { readFileSync, writeFileSync, cpSync } from 'fs';
import { join } from 'path';

const workerPath = join(process.cwd(), 'dist', '_worker.js');
const serverSrcPath = join(process.cwd(), 'server');
const serverDestPath = join(process.cwd(), 'dist', 'server');

try {
  // Fix the worker import path
  let content = readFileSync(workerPath, 'utf8');
  content = content.replace('../server/entry.cloudflare-pages', './server/entry.cloudflare-pages');
  writeFileSync(workerPath, content);
  console.log('Fixed _worker.js import path');

  // Copy server files to dist directory
  cpSync(serverSrcPath, serverDestPath, { recursive: true });
  console.log('Copied server files to dist directory');
} catch (error) {
  console.error('Error in fix script:', error.message);
  process.exit(1);
}