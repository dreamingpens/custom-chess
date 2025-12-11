#!/usr/bin/env node

/**
 * Helper script to move puzzle JSON files from Downloads to ./puzzles/
 *
 * Usage:
 *   node move-puzzles.js <filename>
 *   node move-puzzles.js level-6-test.json
 *
 * Or provide a full path:
 *   node move-puzzles.js ~/Downloads/level-6-test.json
 */

const fs = require('fs');
const path = require('path');
const os = require('os');

const puzzlesDir = path.join(__dirname, 'puzzles');

// Get filename from command line argument
const input = process.argv[2];

if (!input) {
    console.log('Usage: node move-puzzles.js <filename>');
    console.log('\nExamples:');
    console.log('  node move-puzzles.js level-6-test.json');
    console.log('  node move-puzzles.js ~/Downloads/level-6-test.json');
    console.log('\nThis will move the file from Downloads to ./puzzles/');
    process.exit(0);
}

// Determine source path
let sourcePath;
let filename;

if (path.isAbsolute(input) || input.startsWith('~')) {
    // Full path provided
    sourcePath = input.replace('~', os.homedir());
    filename = path.basename(sourcePath);
} else {
    // Just filename provided, assume Downloads
    filename = input;
    sourcePath = path.join(os.homedir(), 'Downloads', filename);
}

const destPath = path.join(puzzlesDir, filename);

// Check if source file exists
if (!fs.existsSync(sourcePath)) {
    console.error(`❌ File not found: ${sourcePath}`);
    console.error('\nTip: Check that the file exists in your Downloads folder');
    console.error('Or provide the full path to the file');
    process.exit(1);
}

// Check if destination already exists
if (fs.existsSync(destPath)) {
    console.error(`❌ File already exists: ${destPath}`);
    console.error('Delete the existing file or use a different name');
    process.exit(1);
}

// Move the file
try {
    fs.renameSync(sourcePath, destPath);
    console.log(`✅ Moved ${filename} to ./puzzles/`);
    console.log(`   ${destPath}`);
} catch (err) {
    // If rename fails (cross-device), try copy + delete
    try {
        fs.copyFileSync(sourcePath, destPath);
        fs.unlinkSync(sourcePath);
        console.log(`✅ Moved ${filename} to ./puzzles/`);
        console.log(`   ${destPath}`);
    } catch (copyErr) {
        console.error(`❌ Failed to move file: ${copyErr.message}`);
        process.exit(1);
    }
}
